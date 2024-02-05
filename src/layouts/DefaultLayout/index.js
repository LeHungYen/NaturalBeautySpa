import style from './index.module.scss'
import Header from './header'

export default function DefaultLayout({ children }) {

    return (
        <div className={style.container}>
            <Header/>
        </div>
    )
}