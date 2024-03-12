import style from './index.module.scss'
export default function Loading(){
    return <div className="page-loading-icon">
        <img src={require("../../assets/loading.gif")} alt="loading"/>
    </div>
}