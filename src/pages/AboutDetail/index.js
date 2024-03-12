import style from './index.module.scss'

export function AboutDetail(props) {
    let {details} = props;
    if(!details) {
        details = {
            message : {

            },
            feature : {

            },
            important : {

            },
            academy : {

            },
            product : {

            },
            access : {

            },
        }
    }
    const url = window.location.href;
    let detail = details.message;
    for(let key of Object.keys(details)) {
        if(url.includes(key)) {
            details = detail[key]
        }
    }

    return (
        <div className={style.detail}>

        </div>
    )
}