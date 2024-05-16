import style from './index.module.scss'
import React from 'react';
import { useRef } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { routes } from '../../../config/routes';
import banner from '../../../assets/banner/bannerStoreProduct.jpg'
import { ApiService } from '../../../services/ApiService';
import { baseUrl, productServiceUrl } from '../../../config/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Popup } from '../../../components/Popup';
function ProductDetail() {
    const apiService = new ApiService(baseUrl)
    const navigate = useNavigate();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const languageEnum = { VN: 'VN', EN: 'EN', SK: 'SK', JP: 'JP' }
    const [language, setLanguage] = useState(languageEnum.VN)
    const [data, setData] = useState(null);
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);
    const [imgSelected, setImgSelected] = useState(null);


    const getProducts = async () => {
        try {
            const response = await apiService.fetchData(productServiceUrl.get, {}, {}, true);
            setProducts(response);

        } catch (error) {
            // setMessage(error.response.data.error)
        }
    }

    useEffect(() => {

        if (language === languageEnum.VN) {
            let formattedResponse = products.map(item => {
                if (item.languageVN.enable) {
                    if (item.id != id && item.languageVN.enable) {
                        return {
                            id: item.id,
                            name: item.languageVN.name,
                            price: formatCurrency(item.languageVN.price, 'vi-VN', 'VND'),
                            img: item.coverImg,
                            description: item.languageVN.description,
                            categoryId: item.categoryId
                        };
                    }
                }
            }).filter(item => !!item);


            const repeatTimes = 20;
            const repeatedItems = Array.from({ length: repeatTimes }, () => formattedResponse).flat();

            setItems(repeatedItems);
            // setItems(formattedResponse)

        }
    }, [products, id])


    const getData = async () => {
        try {
            const response = await apiService.fetchData(productServiceUrl.getById, { id: id }, {}, true);
            setData(response);
            scrollUp();
        } catch (error) {
            // setMessage(error.response.data.error)
        }
    }
    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id])

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        if (language == languageEnum.VN && data) {
            setItem({
                name: data.languageVN.name,
                price: formatCurrency(data.languageVN.price, 'vi-VN', 'VND'),
                // imgs: data.imgs,
                imgs: [...data.imgs, ...data.imgs], // Gấp đôi mảng imgs
                description: data.languageVN.description,
            })
            setImgSelected(data.imgs[0].img);
        }
    }, [data, language])

    const scrollUp = () => {
        window.scrollTo({
            top: 500,
            behavior: 'smooth'
        });
    };

    const formatCurrency = (amount, languageCode, currency) => {
        return new Intl.NumberFormat(languageCode, { style: 'currency', currency: currency }).format(amount);
    };

    // const items = [
    //     {
    //         name: "Marimove 365 face mask (7 pieces)",
    //         price: "¥2,420 ",
    //         imgs: [
    //             "https://baseec-img-mng.akamaized.net/images/item/origin/9898ff19b437f645573af78f11c6c317.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //             "https://baseec-img-mng.akamaized.net/images/item/origin/0bfdc4fa144b7490496eee30d989f157.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //             "https://baseec-img-mng.akamaized.net/images/item/origin/5d0195d991aeabf345a41536c991a1cc.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //             "https://baseec-img-mng.akamaized.net/images/item/origin/483021cb8d4e4616141fc8e6f9de8542.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //             "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal"
    //         ],
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/abd520c6054e76998012734e5173d3c0.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A 3D three - dimensional approach to each layer of the skin with three types of hyaluronic acid and ceramide.
    //         A dense, long - lasting moisturizing mask that uses Benliese, which is gentle on the skin and has high water absorption and moisturizing properties.`,
    //         detail: "7 pieces included"
    //     },
    //    
    // ]

    const [item, setItem] = useState(items[0]);
    const carouselRef = useRef(null);
    function handleNext() {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 230;
        }
    }

    function handlePrev() {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 230;
        }
    }


    const carouselImageRef = useRef(null);
    function handleNext1() {
        if (carouselImageRef.current) {
            carouselImageRef.current.scrollLeft += 150;
        }
    }

    function handlePrev1() {
        if (carouselImageRef.current) {
            carouselImageRef.current.scrollLeft -= 150;
        }
    }


    const carouselImgRef = useRef(null);
    function handleNext2() {
        if (carouselImgRef.current) {
            carouselImgRef.current.scrollLeft += 82;
        }
    }

    function handlePrev2() {
        if (carouselImgRef.current) {
            carouselImgRef.current.scrollLeft -= 82;
        }
    }
    // popup
    const [popupZoom, setPopupZoom] = useState(false)




    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src={banner}></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        {/* <p className={style.title}>個人情報保護方針</p> */}
                    </div>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.row1}>
                    <div className={style.img}>
                        <div className={style.mainImg} onClick={() => setPopupZoom(true)}>
                            <img src={imgSelected} />
                        </div>

                        <div className={style.listImg}>
                            <div className={style.carouselImg} ref={carouselImgRef}>
                                {item?.imgs.map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setImgSelected(img.img)}
                                        className={style.carouselImgItem}
                                    ><img src={img.img} /></div>
                                ))}
                            </div>

                            <button className={style.btnPrev} onClick={() => handlePrev2()}><GrPrevious className={style.icon} /></button>
                            <button className={style.btnNext} onClick={() => handleNext2()}><GrNext className={style.icon} /></button>
                        </div>
                    </div>

                    <div className={style.infor}>
                        <div className={style.name}>
                            <p>{item?.name}</p>
                        </div>

                        <div className={style.price}>
                            <p>{item?.price} <span>tax included</span></p>
                        </div>

                        <div className={style.description}>

                            {item?.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    <p>{line}</p>
                                </React.Fragment>
                            ))}
                        </div>

                        <div className={style.description}>
                            <p>{item?.detail} </p>
                        </div>

                        <div className={style.button}>
                            <button>Available in-store only</button>
                        </div>
                    </div>
                </div>
            </div>

            <p className={style.titleOtherProduct}>Other products</p>
            <div className={style.otherProduct}>
                <div className={style.carousel} ref={carouselRef}>
                    {items.map((item, index) => (
                        <div className={style.carouselItem} key={index} onClick={() => navigate(`${routes.productDetail}?id=${item.id}`)} >
                            <img src={item.img} />
                            <p className={style.title}>{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</p>
                            <p className={style.price}>{item.price}</p>
                        </div>
                    ))}
                </div>
                <button className={style.btnPrev} onClick={() => handlePrev()}> <GrPrevious className={style.icon} /></button>
                <button className={style.btnNext} onClick={() => handleNext()}> <GrNext className={style.icon} /></button>
            </div>

            <a href={routes.storeProduct}>
                <button className={style.returnProductList}>Return to product list</button>
            </a>


            <Popup popup={popupZoom} setPopup={setPopupZoom} index={999}>
                <div className={style.zoomImg}>
                    <div className={style.mainImage} >
                        <img src={imgSelected} />
                    </div>

                    <div className={style.listImage}>
                        <div className={style.carouselImage} ref={carouselImageRef}>
                            {item?.imgs.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setImgSelected(img.img)}
                                    className={style.carouselImageItem}
                                ><img src={img.img} /></div>
                            ))}
                        </div>

                        <button className={style.btnPrev} onClick={() => handlePrev1()}><GrPrevious className={style.icon} /></button>
                        <button className={style.btnNext} onClick={() => handleNext1()}><GrNext className={style.icon} /></button>
                    </div>
                </div>
            </Popup >


        </div >
    );
}

export default ProductDetail
