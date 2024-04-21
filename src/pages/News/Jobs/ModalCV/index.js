import { ModalDrop } from "../../../../components/ModalDrop";
import style from './index.module.scss'
import { useState, useRef } from "react";
import { MdCloudUpload } from "react-icons/md";
import { PiFileTextLight } from "react-icons/pi";
import { VscTrash } from "react-icons/vsc";
import { ApiService } from "../../../../services/ApiService";
import { baseUrl, resumeServiceUrl } from "../../../../config/link";
import { useLocation } from 'react-router-dom';
import { SuccessOrErrorPopup } from "../../../../components/SuccessOrErrorPopup";
function ModalCV({ modal, setModal, job }) {
    const apiService = new ApiService(baseUrl)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');



    const defaultValue = {
        fullName: "",
        email: "",
        phone: "",
        note: "",
        file: "",
        jobPositionId: ""
    }

    const [form, setForm] = useState(defaultValue);
    const [errors, setErrors] = useState(defaultValue);

    const handleForm = (name, value) => {
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // handle file
    const fileInputRef = useRef(null);
    const handleSelectFileClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (file) => {
        if (file.type !== 'application/pdf') {
            setErrors(prevErrors => ({ ...prevErrors, file: 'Vui lòng chỉ chọn file PDF.' }));
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setErrors(prevErrors => ({ ...prevErrors, file: 'File quá lớn. Vui lòng chọn file dưới 5MB.' }));
            return;
        }
        setForm(prevState => ({
            ...prevState,
            file: file
        }));
        setErrors({ ...errors, file: null });
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        handleFileChange(file);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        handleFileChange(file);
    };



    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
    };
    // handle api 
    const save = async (e) => {
        e.preventDefault();

        if (!form.file) {
            setErrors({ ...errors, file: 'Vui lòng chọn file.' });
            return;
        }

        try {
            const response = await apiService.postData(`${resumeServiceUrl.save}`, { ...form, jobPositionId: job.id }, { 'Content-Type': 'multipart/form-data' }, true);
            setForm(defaultValue);
            setErrors(defaultValue);
            setModal(false);
            setPopup(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    // message
    const [popup, setPopup] = useState(true)

    const cancelAction = () => {
        setPopup(false)
    }

    const [message, setMessage] = useState({
        type: "success",
        mainText: "CV của bạn đã được gửi đi",
        subText: "Chúng tôi sẽ sớm liên lạc với bạn",
        buttons: [
            { text: "Continue", action: cancelAction, className: "btn-success" },
        ]
    });

    return (
        <div>
            <ModalDrop modal={modal} setModal={setModal}>
                <div className={style.container}>
                    <form onSubmit={save}>
                        <div className={style.header}>
                            <p><span>Ứng tuyển: </span>{job?.title}</p>
                        </div>

                        <div className={style.body}>
                            <div className={style.formInput}>
                                <label>Họ và tên <span className={style.required}>*</span></label>
                                <input
                                    type='text'
                                    placeholder="Họ và tên"
                                    value={form.fullName}
                                    required
                                    onChange={(e) => handleForm("fullName", e.target.value)}
                                />
                                {errors.fullName && <p className={style.error}>{errors.fullName}</p>}
                            </div>

                            <div className={style.dflex}>
                                <div className={style.formInput}>
                                    <label>Email <span className={style.required}>*</span></label>
                                    <input
                                        type='text'
                                        placeholder="Email"
                                        required
                                        value={form.email}
                                        onChange={(e) => handleForm("email", e.target.value)}
                                    />
                                    {errors.email && <p className={style.error}>{errors.email}</p>}
                                </div>
                                <div className={style.formInput}>
                                    <label>Số điện thoại <span className={style.required}>*</span></label>
                                    <input
                                        type='text'
                                        placeholder="Số điện thoại"
                                        required
                                        value={form.phone}
                                        onChange={(e) => handleForm("phone", e.target.value)}
                                    />
                                    {errors.phone && <p className={style.error}>{errors.phone}</p>}
                                </div>
                            </div>

                            <div className={style.formTextarea}>
                                <label>Thư giới thiệu</label>
                                <textarea
                                    placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) và nêu rõ mong muốn, lý do bạn muốn ứng tuyển cho vị trí này"
                                    value={form.note}
                                    onChange={(e) => handleForm("note", e.target.value)}
                                />
                                {errors.note && <p className={style.error}>{errors.note}</p>}
                            </div>

                            <div
                                className={style.InputFileDrop}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            // onDragLeave={handleDragLeave}
                            >
                                <div className={style.mainText}>
                                    <MdCloudUpload className={style.icon} />
                                    <p> Tải lên CV từ máy tính, chọn hoặc kéo thả</p>

                                </div>
                                <p className={style.subText}>Hỗ trợ định dạng pdf có kích thước dưới 5MB</p>
                                <div className={style.fileAndBtn}>
                                    {form.file && <div className={style.file}>
                                        <div className={style.fileName}><PiFileTextLight className={style.icon} /> {form.file.name}</div>
                                        <button className={style.deleteBtn} onClick={() => handleForm("file", null)}>
                                            <VscTrash className={style.icon} />
                                        </button>
                                    </div>}


                                    <button className={style.selectBtn} onClick={handleSelectFileClick} type="button">Chọn CV</button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileInputChange}
                                        hidden
                                    />
                                </div>

                                {errors.file && <p className={style.error}>{errors.file}</p>}
                            </div>



                        </div>

                        <div className={style.buttons}>
                            <button className={style.cancelBtn} type="button" onClick={() => setModal(false)}>Hủy</button>
                            <button className={style.submitBtn} type="submit">Nộp hồ sơ ứng tuyển</button>
                        </div>
                    </form>
                </div>
            </ModalDrop >
            <SuccessOrErrorPopup messagePopup={popup} setMessagePopup={setPopup} message={message} />
        </div>
    );
}

export default ModalCV;