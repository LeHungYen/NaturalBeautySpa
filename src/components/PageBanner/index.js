import style from './index.module.scss'
export default function PageBanner(props) {
    const {image, titles, subTitles} = props
    return (
        <div className={style.banner}>
            <img src={image} alt={'banner'}/>
            <div className={style.title}>
                {titles.map((title, idx)=>
                    <div key={`title-${idx}`} className={style.main}>
                        {title}
                    </div>
                )}
                {subTitles.map((subTitle, idx)=>
                    <div key={`subtitle-${idx}`} className={style.sub}>
                        {subTitle}
                    </div>
                )}
            </div>
        </div>
    )
}