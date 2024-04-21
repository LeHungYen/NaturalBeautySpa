import style from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
import { BsCheck2Circle } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";


// const [popup, setPopup] = useState(false)

// const cancelAction = () => {
//     setPopup(false)
// }

// const okAction = () => {
//     setPopup(false)
// }


// const [message, setMessage] = useState({
//     type: "success",
//     mainText: "Đã tạo tài khoản thành công",
//     subText: "Vui lòng kiểm tra email để xác thực",
//     buttons: [
//         { text: "Continue", action: cancelAction, className: "btn-success" },
//     ]
// });

// const [message, setMessage] = useState({
//     type: "error",
//     mainText: "Something went wrong.",
//     subText: "",
//     buttons: [
//         { text: "Try Again", action: cancelAction, className: "btn-danger" },
//     ]
// });

{/* <SuccessOrErrorPopup messagePopup={popup} setMessagePopup={setPopup} message={message} /> */ }

export function SuccessOrErrorPopup({ messagePopup, setMessagePopup, message }) {

    const overlayRef = useRef();

    useEffect(() => {
        if (messagePopup) {
            overlayRef.current.classList.add(style.open);
        } else {
            overlayRef.current.classList.remove(style.open);
        }
    }, [messagePopup]);

    return (
        <div className={style.controller}>
            <div className={style.overlay} onClick={() => setMessagePopup(false)} ref={overlayRef}>
                <div className={style.popup} onClick={(e) => e.stopPropagation()}>

                    {message.type == "success" &&
                        <div className={style.success}>
                            <BsCheck2Circle className={style.icon} />
                            <p>SUCCESS</p>
                        </div>
                    }
                    {message.type == "error" &&
                        <div className={style.error}>
                            <RiErrorWarningLine className={style.icon} />
                            <p>OOPS!</p>
                        </div>
                    }

                    <div className={style.mainText}>
                        <p>{message.mainText}</p>
                    </div>
                    <div className={style.subText}>
                        <p>{message.subText}</p>
                    </div>


                    <div className={style.buttons}>
                        {message.buttons.map((btn, index) => (
                            <
                                button
                                key={index}
                                onClick={btn.action}
                                className={btn.className}
                            >
                                {btn.text} </button>
                        ))}
                    </div>
                    {/* <IoCloseOutline onClick={() => setMessagePopup(false)} className={style.iconClose} /> */}
                </div>
            </div>
        </div>
    );
}


