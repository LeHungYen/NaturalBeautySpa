import style from './index.module.scss'
import clsx from 'clsx'
import Pagination from '../Pagination';
import { useState, useEffect } from 'react';
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

// const fields = [
//     { form: 'input', label: 'input', type: 'input', name: "inputName" },
//     { form: 'input', label: 'email', type: 'email', name: "emailName" },
//     { form: 'select', label: 'select', type: 'select', name: "selectName", options: ['Option 1', 'Option 2', 'Option 3'] },
//     { form: 'radio', label: 'radios', name: "radioName", options: ['Option 1', 'Option 2', 'Option 3'] },
//     { form: 'checkbox', label: 'Checkbox', name: "checkboxName", options: ['Option 1', 'Option 2', 'Option 3'] },
//     { form: 'textarea', label: 'TextArea', name: "textareaName" },
//     [
//         { form: 'input', label: 'input', type: 'input', name: "inputName1" },
//         { form: 'input', label: 'email', type: 'email', name: "emailName1" },
//         { form: 'select', label: 'select', type: 'select', name: "selectName1", options: ['Option 1', 'Option 2', 'Option 3'] },
//         { form: 'radio', label: 'radios', name: "radioName1", options: ['Option 1', 'Option 2', 'Option 3'] },
//         { form: 'checkbox', label: 'Checkbox', name: "checkboxName1", options: ['Option 1', 'Option 2', 'Option 3'] },
//         { form: 'textarea', label: 'TextArea', name: "textareaName1" }
//     ],
// ];

// const [errors, setErrors] = useState({
//     inputName: "",
//     emailName: "",
//     selectName: "",
//     radioName: "",
//     checkboxName: "",
//     textareaName: "",

//     inputName1: "",
//     emailName1: "",
//     selectName1: "",
//     radioName1: "",
//     checkboxName1: "",
//     textareaName1: ""
// });

// const [formValue, setFormValue] = useState({
//     inputName: "",
//     emailName: "",
//     selectName: "",
//     radioName: "",
//     checkboxName: "",
//     textareaName: "",

//     inputName1: "",
//     emailName1: "",
//     selectName1: "",
//     radioName1: "",
//     checkboxName1: "",
//     textareaName1: ""
// });

// const [resetValue, setResetValue] = useState({
//     inputName: "",
//     emailName: "",
//     selectName: "",
//     radioName: "",
//     checkboxName: "",
//     textareaName: "",

//     inputName1: "",
//     emailName1: "",
//     selectName1: "",
//     radioName1: "",
//     checkboxName1: "",
//     textareaName1: ""
// });

// const onSubmit = () => {
//     setErrors({
//         inputName: "inputName",
//     })
// }

{/* <AdminForm title={'Form Title'} fields={fields} onSubmit={onSubmit} formValue={formValue} setFormValue={setFormValue} errors={errors} resetValue={resetValue} /> */ }
const AdminForm = ({ title, fields, onSubmit, formValue, setFormValue, errors, resetValue }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const handleChangeFile = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        if (file) {
            setFormValue({ ...formValue, [name]: file });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    const handleReset = () => {
        setFormValue(resetValue)
    }
    return (
        <div className={style.container}>
            <div className={style.row1}>
                <p className={style.titleTable}>{title}</p>
            </div>

            <div className={style.row2}>
                <form onSubmit={handleSubmit}>
                    {fields.map((field, index) => (
                        <div key={index}>
                            {Array.isArray(field) ? (
                                <div className={style.dflex}>
                                    {field.map((subField, subIndex) => (
                                        <div key={subIndex}>
                                            {subField.form === 'input' && (
                                                <div className={style.formInput}>
                                                    <label>{subField.label}</label>
                                                    <input
                                                        type={subField.type || 'text'}
                                                        placeholder={subField.label}
                                                        name={subField.name}
                                                        id={subField.name}
                                                        value={formValue[subField.name]}
                                                        onChange={subField.type === 'file' ? handleChangeFile : handleChange}
                                                    />
                                                    {errors[subField.name] && <p className={style.error}>{errors[subField.name]}</p>}
                                                </div>
                                            )}

                                            {subField.form === 'select' && (
                                                <div className={style.formSelect}>
                                                    <label>{subField.label}</label>
                                                    <select
                                                        value={formValue[subField.name]}
                                                        onChange={handleChange}
                                                        name={subField.name}
                                                        id={subField.name}
                                                    >
                                                        {subField.options.map((option, optionIndex) => (
                                                            <option key={optionIndex}>{option}</option>
                                                        ))}
                                                    </select>
                                                    {errors[subField.name] && <p className={style.error}>{errors[subField.name]}</p>}
                                                </div>
                                            )}

                                            {subField.form === 'radio' && (
                                                <div className={style.formRadio}>
                                                    <label>{subField.label}</label>
                                                    <div className={style.radioOptions}>
                                                        {subField.options.map((option, optionIndex) => (
                                                            <div key={optionIndex} >
                                                                <input
                                                                    type="radio"
                                                                    id={`${subField.name}-${optionIndex}`}
                                                                    name={subField.name}
                                                                    value={option}
                                                                    checked={formValue[subField.name] === option}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor={`${subField.name}-${optionIndex}`}>{option}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {errors[subField.name] && <p className={style.error}>{errors[subField.name]}</p>}
                                                </div>
                                            )}

                                            {subField.form === 'checkbox' && (
                                                <div className={style.formCheckbox}>
                                                    <label>{subField.label}</label>
                                                    <div className={style.checkboxOptions}>
                                                        {subField.options.map((option, index) => (
                                                            <div key={index}>
                                                                <input type="checkbox"
                                                                    id={`${subField.name}-${index}`}
                                                                    name={subField.name}
                                                                    value={option}
                                                                    checked={formValue[subField.name] === option}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor={`${subField.name}-${index}`}>{option}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {errors[subField.name] && <p className={style.error}>{errors[subField.name]}</p>}
                                                </div>
                                            )}

                                            {subField.form === 'textarea' && (
                                                <div className={style.formTextarea}>
                                                    <label>{subField.label}</label>
                                                    <textarea
                                                        placeholder={subField.label}
                                                        value={formValue[subField.name]}
                                                        id={subField.name}
                                                        name={subField.name}
                                                        onChange={handleChange}
                                                    />
                                                    {errors[subField.name] && <p className={style.error}>{errors[subField.name]}</p>}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={style.dflex}>
                                    {field.form === 'input' && (
                                        <div className={style.formInput}>
                                            <label>{field.label}</label>
                                            <input
                                                type={field.type || 'text'}
                                                placeholder={field.label}
                                                name={field.name}
                                                id={field.name}
                                                value={formValue[field.name]}
                                                onChange={field.type === 'file' ? handleChangeFile : handleChange}
                                            />
                                            {errors[field.name] && <p className={style.error}>{errors[field.name]}</p>}
                                        </div>
                                    )}

                                    {field.form === 'select' && (
                                        <div className={style.formInput}>
                                            <label>{field.label}</label>
                                            <select
                                                value={formValue[field.name]}
                                                onChange={handleChange}
                                                name={field.name}
                                                id={field.name}
                                            >
                                                {field.options.map((option, optionIndex) => (
                                                    <option
                                                        key={optionIndex}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors[field.name] && <p className={style.error}>{errors[field.name]}</p>}
                                        </div>
                                    )}

                                    {field.form === 'radio' && (
                                        <div className={style.formRadio}>
                                            <label>{field.label}</label>
                                            <div className={style.radioOptions}>
                                                {field.options.map((option, optionIndex) => (
                                                    <div key={optionIndex} >
                                                        <input
                                                            type="radio"
                                                            name={field.name}
                                                            id={`${field.name}-${optionIndex}`}
                                                            value={option}
                                                            checked={formValue[field.name] === option}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor={`${field.name}-${optionIndex}`}>{option}</label>
                                                    </div>
                                                ))}
                                            </div>
                                            {errors[field.name] && <p className={style.error}>{errors[field.name]}</p>}
                                        </div>
                                    )}

                                    {field.form === 'checkbox' && (
                                        <div className={style.formCheckbox}>
                                            <label>{field.label}</label>
                                            <div className={style.checkboxOptions}>
                                                {field.options.map((option, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type="checkbox"
                                                            id={`${field.name}-${index}`}
                                                            name={field.name}
                                                            value={option}
                                                            checked={formValue[field.name] === option}
                                                            onChange={handleChange} />
                                                        <label htmlFor={`${field.name}-${index}`}>{option}</label>
                                                    </div>
                                                ))}
                                            </div>
                                            {errors[field.name] && <p className={style.error}>{errors[field.name]}</p>}
                                        </div>
                                    )}

                                    {field.form === 'textarea' && (
                                        <div className={style.formTextarea}>
                                            <label>{field.label}</label>
                                            <textarea
                                                id={field.name}
                                                name={field.name}
                                                placeholder={field.label}
                                                value={formValue[field.name]}
                                                onChange={handleChange}
                                            />
                                            {errors[field.name] && <p className={style.error}>{errors[field.name]}</p>}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className={style.buttons}>
                        <button className={style.submit} type="submit">Submit</button>
                        <button onClick={handleReset} className={style.reset}>Reset</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AdminForm;