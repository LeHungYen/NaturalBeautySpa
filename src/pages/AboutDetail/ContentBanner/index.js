import style from "./index.module.scss"
export default function(props) {
    const {img, title} = props;
    return (
        <div className={style.container}>
            <img src={img}/>
            <span>{title}</span>
        </div>
    )
}