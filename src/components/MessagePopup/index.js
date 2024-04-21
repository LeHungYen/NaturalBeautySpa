import style from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";

// const [popup, setPopup] = useState(false)

// const cancelAction = () => {
//     setPopup(false)
// }

// const okAction = () => {
//     setPopup(false)
// }


// const [message, setMessage] = useState({
//     title: "Title",
//     message: "This is only a message",
//     buttons: [
//         { text: "Cancel", action: cancelAction, style: {} },
//         { text: "Ok", action: okAction, style: { backgroundColor: '#0d6efd', color: 'white' } },
//     ]
// });

{/* <MessagePopup popup={popup} setPopup={setPopup} message={message} /> */ }

export function MessagePopup({ messagePopup, setMessagePopup, message }) {

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
                    <div className={style.title}>
                        <p>{message.title}</p>
                    </div>
                    <div className={style.message}>
                        <p>{message.message}</p>
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
                    <IoCloseOutline onClick={() => setMessagePopup(false)} className={style.iconClose} />
                </div>
            </div>
        </div>
    );
}
