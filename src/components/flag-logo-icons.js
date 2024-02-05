import {changeLanguage} from "../store/action";
import {useDispatch} from 'react-redux';
import {getResourceImage} from "../services/import-resource";
import {useEffect, useState} from "react";


export default function FlagLogoIcons(props) {
    let {flags} = props;
    const dispatch = useDispatch();
    const [imageSources, setImageSources] = useState([]);

    useEffect(() => {
        const loadImages = async function () {
            if(flags) {
                const resources = await Promise.all(
                    flags.map(flag => getResourceImage(flag.path))
                )
                setImageSources(resources);
            }
        }
        loadImages().then(()=>{
            //do nothing
        });
    }, []);

    const handleLanguageChange = (lang) => {
        changeLanguage(dispatch ,lang);
    };
    console.log("images " + imageSources.length)
    return(
        <div className="lang-chooser">
            {flags.map((flag, index) =>{
                if(imageSources.length > 0) {
                    return <img
                        key={index}
                        className={flag.className}
                        src={ imageSources[index] }
                        alt={flag.value}
                        onClick={
                            ()=>handleLanguageChange(flag.value)
                        }
                    />
                } else {
                    return <></>
                }
            })}
        </div>
    )
}

FlagLogoIcons.defaultProps = {
    flags: [
        {
            className: "flag-icon",
            path: "flag_en.jpg",
            value: "en"
        },
        {
            className: "flag-icon",
            path: "flag_ja.jpg",
            value: "jp"
        },
        {
            className: "flag-icon",
            path: "flag_vn.jpg",
            value: "vi"
        },
    ]
}