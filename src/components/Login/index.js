import style from './index.module.scss'
import { useRef, useState } from 'react';
import { SignUp } from './SignUp';
import { ForgotPassword } from './ForgotPassword';
import { AccountService } from '../../services/AccountService';
import { ApiService } from '../../services/ApiService';
import { baseUrl, accountServiceUrl } from '../../config/link';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../config/routes';
function Login({ exitLogin, loginRef }) {
    const navigate = useNavigate();
    const apiService = new ApiService(baseUrl);
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    })
    const [message, setMessage] = useState('');

    const handleLoginForm = (name, value) => {
        setLoginForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const login = async () => {
        try {
            const response = await apiService.postData(accountServiceUrl.login, loginForm, {}, true);
            window.localStorage.setItem("user", response.username)
            setMessage('')
            exitLogin();
        } catch (error) {
            if (error.response.data.error == 'email is not confirmed') {
                navigate(`${routes.authentication_email}?email=${error.response.data.email}`)
            }
            if (error.response.status == 403) {
                setMessage('Incorrect username or password')
            }
        }
    }


    // sign up ref
    const signUpRef = useRef(null);
    const exitSignUp = () => {
        signUpRef.current.style.display = "none";
    }
    const openSignUp = () => {
        signUpRef.current.style.display = "block";
        exitSignIn();
    }

    const signInRef = useRef(null);
    const exitSignIn = () => {
        signInRef.current.style.display = "none";
    }
    const openSignIn = () => {
        signInRef.current.style.display = "block";
        exitSignUp();
        exitForgotPass();
    }

    // forgot pass ref
    const forgotPasswordRef = useRef(null);
    const exitForgotPass = () => {
        forgotPasswordRef.current.style.display = "none";
    }
    const openForgotPass = () => {
        forgotPasswordRef.current.style.display = "block";
        exitSignIn();
    }


    return (
        <div className={style.container} ref={loginRef}>
            <div className={style.overlay} onClick={exitLogin} ref={signInRef}>
                <div className={style.login} onClick={(e) => e.stopPropagation()}>
                    <div className={style.title}>
                        <p className={style.main}>Login to Your Account</p>
                        <p className={style.sub}>Enter your username & password to login</p>
                    </div>
                    <div className={style.form}>
                        <div className={style.formGroup}>
                            <label>UserName</label>
                            <input type='text' value={loginForm.username} onChange={(e) => handleLoginForm("username", e.target.value)}></input>
                        </div>
                        <div className={style.formGroup}>
                            <label>Password</label>
                            <input type='password' value={loginForm.password} onChange={(e) => handleLoginForm("password", e.target.value)}></input>
                            <div className={style.error}>
                                {message && <p>{message}</p>}
                            </div>
                        </div>

                        {/* <div className={style.remember}>
                            <input type='checkBox' id="remember"></input>
                            <label htmlFor='remember'>Remember me</label>
                        </div> */}

                        <button onClick={login}>Login</button>
                        {/* <p className={style.text}>ForgotPassword?</p> */}
                    </div>

                    <div className={style.text}>
                        <p >Forgot password? <a onClick={openForgotPass}>Click here to reset it</a></p>
                        <p >Don't have account? <a onClick={openSignUp}>Create an account</a></p>
                    </div>
                </div>
            </div>

            <SignUp exitLogin={exitLogin} signUpRef={signUpRef} openSignIn={openSignIn} />
            <ForgotPassword exitLogin={exitLogin} forgotPasswordRef={forgotPasswordRef} openSignIn={openSignIn} />
        </div>
    )
}

export default Login;