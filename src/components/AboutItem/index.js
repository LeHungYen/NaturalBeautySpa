import style from "./index.module.scss"
export default function AboutItem(props) {
    const {src, title, subTitles, description, btn} = props
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <img src={src}  alt="alt"/>
            <div className={style.subs}>
                {subTitles.map((t, i)=>
                    <div className={style.sub}>{t}</div>
                )}
                <div className={style.description}>{description}</div>
                <button>{btn}</button>
            </div>
        </div>
    )
}