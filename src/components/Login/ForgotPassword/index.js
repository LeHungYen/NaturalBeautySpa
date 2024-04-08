import { useState, useRef, useEffect, useContext } from "react"
import { Link, json, parsePath, useLocation, useParams, useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { routes } from '../../../config/routes';
// import { AccountService } from "../../../services/AccountService"
import { ApiService } from "../../../services/ApiService";
import { baseUrl, accountServiceUrl } from "../../../config/link";
export function ForgotPassword({ exitLogin, forgotPasswordRef, openSignIn }) {
    const navigate = useNavigate();
    const apiService = new ApiService(baseUrl);
    const [email, setEmail] = useState('')
    const [agreeTerm, setAgreeTerm] = useState(false)
    const [error, setError] = useState();

    const resetPassword = async () => {
        try {
            const response = await apiService.postData(accountServiceUrl.sendMailforgotPassword, { username: email }, {}, true)
            // setRegister(accountService.defaultRegister)
            // setAgreeTerm(false)
            navigate(routes.resetPassword)
        } catch (error) {
            setError(error.response.data);
        }
    }

    return (
        <div className={style.container} ref={forgotPasswordRef}>
            <div className={style.overlay} onClick={exitLogin}>
                <div className={style.signUp} onClick={(e) => e.stopPropagation()} >
                    <div className={style.title}>
                        <p className={style.main}>Forgot Password</p>
                        <p className={style.sub}>Enter your email to reset your password</p>
                    </div>

                    <div className={style.form}>
                        <div className={style.formGroup}>
                            {error?.email && <p className={style.error}>{error.email}</p>}
                            <label>Email</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <button onClick={resetPassword}>Reset password</button>
                    </div>

                    <p className={style.text}> <a onClick={openSignIn}>Log in?</a></p>
                </div>

            </div>
        </div >
    );
}