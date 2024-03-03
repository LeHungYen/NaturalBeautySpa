import style from './index.module.scss'
export default function Loading(){
    return <div className={style.loading}>
        <img src={require("../../assets/loading.gif")} alt="loading"/>
    </div>
}