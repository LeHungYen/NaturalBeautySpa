import style from "./index.module.scss"
export default function AboutItem(props) {
    const {url, title, subTitles, description} = props
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <img src={url}  alt="alt"/>
            {subTitles.map((t, i)=>
                <div className={style.sub}>{t}</div>
            )}
            <div className={style.description}>{description}</div>
        </div>
    )
}