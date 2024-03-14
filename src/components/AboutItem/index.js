import style from "./index.module.scss"
export default function AboutItem(props) {
    const {src, title, subTitles, description, btn, url, zoomEffect} = props
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            {zoomEffect?
                <div className={style.zoom}>
                    <img src={src}  alt="alt"/>
                </div>:
                <img src={src}  alt="alt"/>
            }
            <div className={style.subs}>
                {subTitles.map((t, i)=>
                    <div className={style.sub}>{t}</div>
                )}
                <div className={style.description}>{description}</div>
                <a href={url}><button>{btn}</button></a>
            </div>
        </div>
    )
}