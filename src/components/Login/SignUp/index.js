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


export function SignUp({ exitLogin, signUpRef, openSignIn }) {


    return (
        <div className={style.container} ref={signUpRef}>
            <div className={style.overlay} onClick={exitLogin}>
                <div className={style.signUp} onClick={(e) => e.stopPropagation()}>
                    <div className={style.title}>
                        <p className={style.main}>Create an Account</p>
                        <p className={style.sub}>Enter your personal details to create account</p>
                    </div>
                    <div className={style.form}>
                        <div className={style.formGroup}>
                            <label>Your Name</label>
                            <input type='text'></input>
                        </div>
                        <div className={style.formGroup}>
                            <label>Your Email</label>
                            <input type='email'></input>
                        </div>
                        <div className={style.formGroup}>
                            <label>UserName</label>
                            <input type='text'></input>
                        </div>
                        <div className={style.formGroup}>
                            <label>Password</label>
                            <input type='password'></input>
                        </div>
                        <div className={style.agreeTearm}>
                            <input type='checkBox' id="agreeTearm"></input>
                            <label htmlFor='agreeTearm'>I agree and accept the <a onClick={() => window.open(routes.privacyPolicy)}>terms and conditions</a></label>
                        </div>

                        <button>Create Account</button>
                    </div>

                    <p className={style.text}>Already have an account? <a onClick={openSignIn}>Log in</a></p>
                </div>
            </div>
        </div>
    );
}