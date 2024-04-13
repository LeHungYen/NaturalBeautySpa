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
import { ApiService } from "../../../services/ApiService"
import { baseUrl, accountServiceUrl } from "../../../config/link"
export function SignUp({ exitLogin, signUpRef, openSignIn }) {
    const defaultRegister = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: '',
        username: '',
        password: '',
    };


    const navigate = useNavigate();
    const apiService = new ApiService(baseUrl)
    const [register, setRegister] = useState(defaultRegister)
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
                const response = await apiService.postData(accountServiceUrl.register, register, {}, true)
                setRegister(defaultRegister)
                setAgreeTerm(false)
                await apiService.postData(accountServiceUrl.login, {
                    username: register.username,
                    password: register.password,
                }, {}, true);
            } catch (error) {
                if (error.response.data.error == 'email is not confirmed') {
                    navigate(routes.authentication_email)
                }
                setError(error.response.data);
            }
        } else {
            setError({ ...error, agreeTerm: "Vui lòng đồng ý điều khoản" });
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
                                <label>First name</label>
                                <input type='text' value={register.firstname} onChange={(e) => handleRegister('firstname', e.target.value)}></input>
                                {error?.firstname && <p className={style.error}>{error.firstname}</p>}
                            </div>
                            <div className={style.formGroup}>
                                <label>Last name</label>
                                <input type='text' value={register.lastname} onChange={(e) => handleRegister('lastname', e.target.value)}></input>
                                {error?.lastname && <p className={style.error}>{error.lastname}</p>}
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <label>Email</label>
                            <input type='email' value={register.email} onChange={(e) => handleRegister('email', e.target.value)}></input>
                            {error?.email && <p className={style.error}>{error.email}</p>}
                        </div>
                        <div className={style.dflex}>
                            <div className={style.formGroup}>
                                <label>Phone number</label>
                                <input type='number' value={register.phone} onChange={(e) => handleRegister('phone', e.target.value)}></input>
                                {error?.phone && <p className={style.error}>{error.phone}</p>}
                            </div>
                            <div className={style.formGroup}>
                                <label>Gender</label>
                                <select value={register.gender} onChange={(e) => handleRegister("gender", e.target.value)}>
                                    <option value="">Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                </select>
                                {error?.gender && <p className={style.error}>{error.gender}</p>}
                            </div>
                        </div>

                        <div className={style.formGroup}>
                            <label>UserName</label>
                            <input type='text' value={register.username} onChange={(e) => handleRegister('username', e.target.value)}></input>
                            {error?.username && <p className={style.error}>{error.username}</p>}
                        </div>
                        <div className={style.formGroup}>
                            <label>Password</label>
                            <input type='password' value={register.password} onChange={(e) => handleRegister('password', e.target.value)}></input>
                            {error?.password && <p className={style.error}>{error.password}</p>}
                        </div>
                        <div className={style.agreeTearm}>
                            <input
                                type='checkBox' id="agreeTearm"
                                checked={agreeTerm}
                                onChange={(e) => setAgreeTerm(e.target.checked)}
                            ></input>
                            <label htmlFor='agreeTearm'>I agree and accept the <a onClick={() => window.open(routes.privacyPolicy)}>terms and conditions</a></label>
                        </div>
                        {error?.agreeTerm && <p className={style.error}>{error.agreeTerm}</p>}
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