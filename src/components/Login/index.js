import style from './index.module.scss'
import { useRef } from 'react';
import { SignUp } from './SignUp';
function Login({ exitLogin, loginRef }) {
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
                            <input type='text'></input>
                        </div>
                        <div className={style.formGroup}>
                            <label>Password</label>
                            <input type='password'></input>
                        </div>
                        <div className={style.remember}>
                            <input type='checkBox' id="remember"></input>
                            <label htmlFor='remember'>Remember me</label>
                        </div>

                        <button>Login</button>
                        {/* <p className={style.text}>ForgotPassword?</p> */}
                    </div>

                    <p className={style.text}>Don't have account? <a onClick={openSignUp}>Create an account</a></p>
                </div>
            </div>

            <SignUp exitLogin={exitLogin} signUpRef={signUpRef} openSignIn={openSignIn} />
        </div>
    )
}

export default Login;