import { useState, useRef, useEffect, useContext } from "react"
import { Link, json, parsePath, useLocation, useParams, useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { routes } from "../../../../config/routes";
import { Popup } from "../../../Popup";
import { IoCloseCircleSharp } from "react-icons/io5";
export function ResetPassword() {
    const navigate = useNavigate();
    // get id from url
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");

    const [resetPasswordForm, setResetPasswordForm] = useState({
        code: "",
        newPassword: "",
        confirmNewPassword: ""
    })
    const [error, setError] = useState();


    const handleForm = (name, value) => {
        setResetPasswordForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const resetPassword = async () => {
        try {
            // const response = await accountService.register(register);
            // setRegister(accountService.defaultRegister)
            // setAgreeTerm(false)
            navigate(routes.resetPassword)
        } catch (error) {
            setError(error.response.data);
        }
    }


    const resendEmail = async () => {
        try {
            // const response = await apiService.postData(accountServiceUrl.resendEmail, {}, {}, true);
            setPopupMessage(true)
        } catch (error) {
            // setMessage(error.response.data.error)
        }
    }

    // popup message
    const [popupMessage, setPopupMessage] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.resetPassword} >
                <div className={style.title}>
                    <p className={style.main}>Password reset</p>
                    <p className={style.sub}>Enter the code from your email </p>
                </div>


                <div className={style.form}>

                    <div className={style.formGroup}>
                        {error?.code && <p className={style.error}>{error.code}</p>}
                        <label>Code</label>
                        <div className={style.dflexForm}>
                            <input type='text' value={resetPasswordForm.code} onChange={(e) => handleForm('code', e.target.value)}></input>
                            <button className={style.resendCode} onClick={resendEmail}>Resend code</button>
                        </div>

                    </div>


                    <div className={style.formGroup}>
                        {error?.newPassword && <p className={style.error}>{error.newPassword}</p>}
                        <label>New password</label>
                        <input type='text' value={resetPasswordForm.newPassword} onChange={(e) => handleForm('code', e.target.value)}></input>
                    </div>
                    <div className={style.formGroup}>
                        {error?.confirmNewPassword && <p className={style.error}>{error.confirmNewPassword}</p>}
                        <label>Confirm new password</label>
                        <input type='text' value={resetPasswordForm.confirmNewPassword} onChange={(e) => handleForm('code', e.target.value)}></input>
                    </div>
                    <div className={style.dflex}>
                        <button className={style.cancelBtn} onClick={() => navigate(routes.home)}>Cancel</button>
                        <button className={style.resetPasswordBtn} onClick={resetPassword}>Reset password</button>
                    </div>
                </div>

            </div>

            <Popup popup={popupMessage} setPopup={setPopupMessage}>
                <div className={style.popupMessage}>
                    <p className={style.title}>Code sent</p>
                    <p className={style.message}>To confirm your account, enter the code in the email we just sent to <span>{email}</span></p>

                    <button onClick={() => setPopupMessage(false)}>OK</button>
                    <IoCloseCircleSharp className={style.iconExit} onClick={() => setPopupMessage(false)}></IoCloseCircleSharp>
                </div>
            </Popup>
        </div >
    );
}