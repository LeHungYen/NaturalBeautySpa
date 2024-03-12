import {IoMdSettings} from "react-icons/io";
import style from './index.module.scss'
import {useEffect, useState} from "react";
import {getResourceImage} from "../../../services/import-resource";
import {useDispatch} from "react-redux";
import {changeLanguage} from "../../../store/action";
export default function SettingIcon(props) {
    const[img, setImg] = useState([])
    const flags = ["flag_en.jpg","flag_ja.jpg","flag_vn.jpg","flag_kr.jpg"]
    const lang = ["en","jp","vi","kr"]
    const dispatch = useDispatch();
    const changeLang = function (lang) {
        changeLanguage(dispatch, lang)
    }
    useEffect(() => {
        const loadImages = async function () {
            if(flags) {
                const resources = await Promise.all(
                    flags.map(flag => getResourceImage(flag))
                )
                setImg(resources);
            }
        }
        loadImages().then(()=>{
            //do nothing
        });
    }, []);
    return (
        <div className={style.icon}>
            <IoMdSettings />
            <div className={style.language}>
                {img.map((i, idx) => <img onClick={()=> changeLang(lang[idx])} key={idx} src={i}/>)}
            </div>
        </div>
    )
}