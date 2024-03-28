import { useState, useRef, useEffect, useContext } from "react"
import axios from "axios"
import { Link, json, parsePath, useLocation, useParams, useNavigate } from 'react-router-dom'
import clsx from "clsx"
import style from './index.module.scss'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaTransgender } from "react-icons/fa6";
import { routes } from '../../../config/routes';
import { AccountService } from "../../../services/AccountService"

export function SignUp({ exitLogin, signUpRef, openSignIn }) {
    const accountService = new AccountService();
    const [register, setRegister] = useState(accountService.defaultRegister)
    const [agreeTerm, setAgreeTerm] = useState(false)
    const [error, setError] = useState();

    const handleRegister = (name, value) => {
        setRegister(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const createAccount = async () => {
        if (agreeTerm) {
            try {
                const response = await accountService.register({ code: register });
                setRegister(accountService.defaultRegister)
                setAgreeTerm(false)
                openMessage();
            } catch (error) {
                setError(error.response.data);
            }
        }
    }
    // ref
    const messageRef = useRef(null)
    const exitMessage = () => {
        messageRef.current.style.display = "none";
        openSignUpForm();
    }
    const openMessage = () => {
        messageRef.current.style.display = "block";
        exitSignUpForm();
    }

    const signUpFormRef = useRef(null)
    const exitSignUpForm = () => {
        signUpFormRef.current.style.display = "none";
    }
    const openSignUpForm = () => {
        signUpFormRef.current.style.display = "block";
    }
    // handle go to login btn
    const goToLogin = () => {
        exitMessage();
        openSignIn();
    }

    return (
        <div className={style.container} ref={signUpRef}>
            <div className={style.overlay} onClick={exitLogin}>
                <div className={style.signUp} onClick={(e) => e.stopPropagation()} ref={signUpFormRef}>
                    <div className={style.title}>
                        <p className={style.main}>Create an Account</p>
                        <p className={style.sub}>Enter your personal details to create account</p>
                    </div>
                    <div className={style.form}>
                        <div className={style.dflex}>
                            <div className={style.formGroup}>
                                {error?.firstname && <p className={style.error}>{error.firstname}</p>}
                                <label>First name</label>
                                <input type='text' value={register.firstname} onChange={(e) => handleRegister('firstname', e.target.value)}></input>
                            </div>
                            <div className={style.formGroup}>
                                {error?.lastname && <p className={style.error}>{error.lastname}</p>}
                                <label>Last name</label>
                                <input type='text' value={register.lastname} onChange={(e) => handleRegister('lastname', e.target.value)}></input>
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            {error?.email && <p className={style.error}>{error.email}</p>}
                            <label>Email</label>
                            <input type='email' value={register.email} onChange={(e) => handleRegister('email', e.target.value)}></input>
                        </div>
                        <div className={style.dflex}>
                            <div className={style.formGroup}>
                                {error?.phone && <p className={style.error}>{error.phone}</p>}
                                <label>Phone number</label>
                                <input type='number' value={register.phone} onChange={(e) => handleRegister('phone', e.target.value)}></input>
                            </div>
                            <div className={style.formGroup}>
                                {error?.gender && <p className={style.error}>{error.gender}</p>}
                                <label>Gender</label>
                                <select value={register.gender} onChange={(e) => handleRegister("gender", e.target.value)}>
                                    <option value="">Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className={style.formGroup}>
                            {error?.username && <p className={style.error}>{error.username}</p>}
                            <label>UserName</label>
                            <input type='text' value={register.username} onChange={(e) => handleRegister('username', e.target.value)}></input>
                        </div>
                        <div className={style.formGroup}>
                            {error?.password && <p className={style.error}>{error.password}</p>}
                            <label>Password</label>
                            <input type='password' value={register.password} onChange={(e) => handleRegister('password', e.target.value)}></input>
                        </div>
                        <div className={style.agreeTearm}>
                            <input
                                type='checkBox' id="agreeTearm"
                                checked={agreeTerm}
                                onChange={(e) => setAgreeTerm(e.target.checked)}
                            ></input>
                            <label htmlFor='agreeTearm'>I agree and accept the <a onClick={() => window.open(routes.privacyPolicy)}>terms and conditions</a></label>
                        </div>

                        <button onClick={createAccount}>Create Account</button>
                    </div>

                    <p className={style.text}>Already have an account? <a onClick={openSignIn}>Log in</a></p>
                </div>

                <div className={style.message} ref={messageRef} onClick={(e) => e.stopPropagation()}>
                    <p className={style.success}>Congratulations</p>
                    <p>Chúc mừng bạn đã tạo tài khoản thành công</p>
                    <div className={style.dflex}>
                        <button className={style.okBtn} onClick={exitMessage}>Ok</button>
                        <button onClick={goToLogin}>Go to login</button>
                    </div>
                </div>
            </div>
        </div >
    );
}