
import style from './index.module.scss'
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"
import { AccountService } from '../../../../services/AccountService';
import { routes } from '../../../../config/routes';
export function AuthenticationEmail() {
    const accountService = new AccountService();
    const navigate = useNavigate();
    // get id from url
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");

    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");

    const authenticationEmail = async () => {
        try {
            const response = accountService.emailConfirmation(code);
        } catch (error) {
            // setMessage(error.response.data)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.header}>
                    <p> Enter the code from your email</p>
                </div>

                <div className={style.body}>
                    <p className={style.text}>Please let us know this email belongs to you. Please enter the code in the email sent to {email} </p>

                    <div className={style.formInput}>
                        <label>SS-</label>
                        <input value={code} onChange={(e) => setCode(e.target.value)}></input>
                    </div>
                    {message && <p className={style.message}>{message}</p>}

                    <p className={style.resendEmail}>Resend email</p>
                </div>

                <div className={style.footer}>
                    <button onClick={() => navigate(routes.login)}>Cancel</button>
                    <button
                        disabled={code == "" ? true : false}
                        style={{ background: code == "" ? "" : "#0389c9", color: code == "" ? "" : "#ffffff" }}
                        onClick={authenticationEmail}
                    >Continue</button>
                </div>
            </div>

        </div>
    );
}