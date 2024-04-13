
import style from './index.module.scss'
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"
import { AccountService } from '../../../../services/AccountService';
import { routes } from '../../../../config/routes';
import { baseUrl, accountServiceUrl } from '../../../../config/link';
import { ApiService } from '../../../../services/ApiService';
import { IoCloseCircleSharp } from "react-icons/io5";
import { Popup } from '../../../Popup';
export function AuthenticationEmail() {
    const apiService = new ApiService(baseUrl);
    const navigate = useNavigate();
    // get id from url
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");

    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");

    const authenticationEmail = async () => {
        try {
            const response = await apiService.postData(accountServiceUrl.confirmEmail, { code: code }, {}, true);
            navigate(routes.home)
        } catch (error) {
            setMessage(error.response.data.error)
        }
    }

    const resendEmail = async () => {
        try {
            const response = await apiService.postData(accountServiceUrl.resendEmail, {}, {}, true);
            setPopupMessage(true)
        } catch (error) {
            setMessage(error.response.data.error)
        }
    }

    // popup message
    const [popupMessage, setPopupMessage] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.header}>
                    <p> Enter the code from your email</p>
                </div>

                <div className={style.body}>
                    <p className={style.text}>Please let us know this email belongs to you. Please enter the code in the email sent to <strong>{email}</strong> </p>

                    <div className={style.formInput}>
                        <label>Code:</label>
                        <input value={code} onChange={(e) => setCode(e.target.value)}></input>
                    </div>
                    {message && <p className={style.message}>{message}</p>}
                    <p className={style.resendEmail} ><span onClick={resendEmail}>Resend email</span></p>
                </div>

                <div className={style.footer}>
                    <button onClick={() => navigate(routes.home)}>Cancel</button>
                    <button
                        disabled={code == "" ? true : false}
                        style={{ background: code == "" ? "" : "#0389c9", color: code == "" ? "" : "#ffffff" }}
                        onClick={authenticationEmail}
                    >Continue</button>
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

        </div>
    );
}