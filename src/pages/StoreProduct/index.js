import { getDict } from '../../services/dict';
import style from './index.module.scss'
import React, { useEffect, useState } from 'react';
import { routes } from '../../config/routes';
import banner from '../../assets/banner/bannerStoreProduct.jpg'
import { ApiService } from '../../services/ApiService'
import { productServiceUrl, baseUrl, categoryServiceUrl } from '../../config/link';
function StoreProduct() {
    const apiService = new ApiService(baseUrl);
    const itemsPerPageOptions = [10, 20, 30, 'All'];
    const languageEnum = { VN: 'VN', EN: 'EN', SK: 'SK', JP: 'JP' }
    const [language, setLanguage] = useState(languageEnum.VN)
    const [categorySelected, setCategorySelected] = useState('-1')
    const [keySearch, setKeySearch] = useState("")
    const [filter, setFilter] = useState('');
    // api
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);

    const getCategory = async () => {
        try {
            const response = await apiService.fetchData(categoryServiceUrl.get, {}, {}, true);
            setCategorys(response)
        } catch (error) {
            // setMessage(error.response.data.error)
        }
    }

    const getData = async () => {
        try {
            const response = await apiService.fetchData(productServiceUrl.get, {}, {}, true);
            setProducts(response);

        } catch (error) {
            // setMessage(error.response.data.error)
        }
    }


    useEffect(() => {
        getCategory();
        getData();
    }, [])

    useEffect(() => {
        if (language === languageEnum.VN) {
            let formattedResponse = products.map(item => {
                if (item.languageVN.enable) {
                    if (categorySelected > 0 && categorySelected == item.categoryId) {
                        return {
                            id: item.id,
                            name: item.languageVN.name,
                            price: formatCurrency(item.languageVN.price, 'vi-VN', 'VND'),
                            img: item.coverImg,
                            description: item.languageVN.description,
                            categoryId: item.categoryId
                        };
                    } else if (categorySelected == (-1)) {
                        return {
                            id: item.id,
                            name: item.languageVN.name,
                            priceFormated: formatCurrency(item.languageVN.price, 'vi-VN', 'VND'),
                            price: item.languageVN.price,
                            img: item.coverImg,
                            description: item.languageVN.description,
                            categoryId: item.categoryId
                        };
                    }

                }
            }).filter(item => !!item && item.name.toLowerCase().includes(keySearch.toLowerCase()));

            if (filter === 'increase') {
                formattedResponse.sort((a, b) => a.price - b.price);
            } else if (filter === 'decrease') {
                formattedResponse.sort((a, b) => b.price - a.price);
            }

            // const repeatTimes = 20;
            // const repeatedItems = Array.from({ length: repeatTimes }, () => formattedResponse).flat();

            // setItems(repeatedItems);
            setItems(formattedResponse)
            //
        }


    }, [products, language, categorySelected, keySearch, filter])

    // else if (language === languageEnum.EN) {
    //     const formattedResponse = products.map(item => {
    //         if (item.languageEN.enable) {
    //             return {
    //                 name: item.languageEN.name,
    //                 price: formatCurrency(item.languageEN.price, 'en-US', 'USD'),
    //                 img: item.coverImg,
    //                 description: item.languageEN.description
    //             };
    //         }
    //     });
    //     setItems(formattedResponse);
    // } else if (language === languageEnum.SK) {
    //     const formattedResponse = products.map(item => {
    //         if (item.languageSK.enable) {
    //             return {
    //                 name: item.languageSK.name,
    //                 price: formatCurrency(item.languageSK.price, 'ko-KR', 'KRW'),
    //                 img: item.coverImg,
    //                 description: item.languageSK.description
    //             };
    //         }
    //     });
    //     setItems(formattedResponse);
    // } else if (language === languageEnum.JP) {
    //     const formattedResponse = products.map(item => {
    //         if (item.languageJP.enable) {
    //             return {
    //                 name: item.languageJP.name,
    //                 price: formatCurrency(item.languageJP.price, 'ja-JP', 'JPY'),
    //                 img: item.coverImg,
    //                 description: item.languageJP.description
    //             };
    //         }
    //     });
    //     setItems(formattedResponse);
    // }


    // const items = [
    //     {
    //         name: "Marimove 365 face mask (7 pieces)",
    //         price: "¥2,420 ",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/9898ff19b437f645573af78f11c6c317.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A 3D three-dimensional approach to each layer of the skin with three types of hyaluronic acid and ceramide.
    //         A dense, long-lasting moisturizing mask that uses Benliese, which is gentle on the skin and has high water absorption and moisturizing properties.`
    //     },
    //     {
    //         name: "Marimove Mini EGF Serum (48ml)",
    //         price: "¥6,380 ",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/0bfdc4fa144b7490496eee30d989f157.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `"EGF Skin Serum" is a high-performance serum for everyone who takes their beauty seriously.
    //         Contains EGF and 4 types of stem cell extracts to moisturize the skin and improve skin texture, leaving your skin moisturized and glossy.
    //         The thick, rich texture brings comfort to the skin and is extremely comfortable to use. Incorporate it into your daily beauty routine and experience a new beginning for glowing skin.

    //         [4 stem cell extracts]
    //         Apple fruit cultured cell extract, Rhododendron ferrugineum leaf cultured cell extract, grape fruit cell extract, Argania spinosa callus cultured extract
    //         (48ml)
    //         `
    //     },
    //     {
    //         name: "Marimove Mini Moisturizing Cream (35g)",
    //         price: "¥5,280",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/5d0195d991aeabf345a41536c991a1cc.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `Intensive Moisturizing Cream" is a moisturizing cream that is a luxurious blend of highly functional beauty ingredients including Falcolex BX46.
    //         Seven plant extracts and Falcolex BX46 are in perfect harmony and spread comfortably on the skin without stickiness,
    //         making it ideal for after-sun care.`
    //     },
    //     {
    //         name: "Marimove Omashan",
    //         price: "¥3,080",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/483021cb8d4e4616141fc8e6f9de8542.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A gentle shampoo made with mainly plant ingredients that
    //         can be used by people of all ages, from children to the elderly.
    //         Fragrance-free, color-free, hypoallergenic, weakly acidic`
    //     },
    //     {
    //         name: "Marimove wax",
    //         price: "¥6,600",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/abd520c6054e76998012734e5173d3c0.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `Make waxing simpler...mà remove wax can be used on all parts of the body, from face, body, VIO to men's beards!
    //         This wax is easy to use on your own at home.`
    //     },
    //     {
    //         name: "Marimove Premium BC (Bio Cellulose Mask) 25ml x 5 sheets",
    //         price: "¥5,280",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/bff61325810a46c607511c4864f45409.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A high-adhesion, high-penetration facial sheet mask using biocellulose, a new gel-like material similar to Nata de Coco .
    //         The biofiber with a 3D net cross structure allows it to adhere tightly to the uneven parts of your face,
    //         allowing the beauty ingredients to penetrate into every corner of the stratum corneum.`
    //     },
    //     {
    //         name: "Marimove UV milk protector (sunscreen)",
    //         price: "¥4,180",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `The non-chemical additive-free formula does not leave a white cast.
    //         It can be safely used by people with sensitive skin and children.
    //         It is waterproof and does not require repainting.

    //         [8 ingredients free]
    //         Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
    //         petroleum surfactant free, alcohol free, UV absorber free

    //         [7 naturally derived anti-inflammatory ingredients]
    //         Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
    //     },
    //     //////////////////////////////////////
    //     {
    //         name: "Marimove 365 face mask (7 pieces)",
    //         price: "¥2,420 ",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/9898ff19b437f645573af78f11c6c317.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A 3D three-dimensional approach to each layer of the skin with three types of hyaluronic acid and ceramide.
    //         A dense, long-lasting moisturizing mask that uses Benliese, which is gentle on the skin and has high water absorption and moisturizing properties.`
    //     },
    //     {
    //         name: "Marimove Mini EGF Serum (48ml)",
    //         price: "¥6,380 ",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/0bfdc4fa144b7490496eee30d989f157.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `"EGF Skin Serum" is a high-performance serum for everyone who takes their beauty seriously.
    //         Contains EGF and 4 types of stem cell extracts to moisturize the skin and improve skin texture, leaving your skin moisturized and glossy.
    //         The thick, rich texture brings comfort to the skin and is extremely comfortable to use. Incorporate it into your daily beauty routine and experience a new beginning for glowing skin.

    //         [4 stem cell extracts]
    //         Apple fruit cultured cell extract, Rhododendron ferrugineum leaf cultured cell extract, grape fruit cell extract, Argania spinosa callus cultured extract
    //         (48ml)
    //         `
    //     },
    //     {
    //         name: "Marimove Mini Moisturizing Cream (35g)",
    //         price: "¥5,280",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/5d0195d991aeabf345a41536c991a1cc.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `Intensive Moisturizing Cream" is a moisturizing cream that is a luxurious blend of highly functional beauty ingredients including Falcolex BX46.
    //         Seven plant extracts and Falcolex BX46 are in perfect harmony and spread comfortably on the skin without stickiness,
    //         making it ideal for after-sun care.`
    //     },
    //     {
    //         name: "Marimove Omashan",
    //         price: "¥3,080",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/483021cb8d4e4616141fc8e6f9de8542.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A gentle shampoo made with mainly plant ingredients that
    //         can be used by people of all ages, from children to the elderly.
    //         Fragrance-free, color-free, hypoallergenic, weakly acidic`
    //     },
    //     {
    //         name: "Marimove wax",
    //         price: "¥6,600",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/abd520c6054e76998012734e5173d3c0.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `Make waxing simpler...mà remove wax can be used on all parts of the body, from face, body, VIO to men's beards!
    //         This wax is easy to use on your own at home.`
    //     },
    //     {
    //         name: "Marimove Premium BC (Bio Cellulose Mask) 25ml x 5 sheets",
    //         price: "¥5,280",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/bff61325810a46c607511c4864f45409.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A high-adhesion, high-penetration facial sheet mask using biocellulose, a new gel-like material similar to Nata de Coco .
    //         The biofiber with a 3D net cross structure allows it to adhere tightly to the uneven parts of your face,
    //         allowing the beauty ingredients to penetrate into every corner of the stratum corneum.`
    //     },
    //     {
    //         name: "Marimove UV milk protector (sunscreen)",
    //         price: "¥4,180",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `The non-chemical additive-free formula does not leave a white cast.
    //         It can be safely used by people with sensitive skin and children.
    //         It is waterproof and does not require repainting.

    //         [8 ingredients free]
    //         Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
    //         petroleum surfactant free, alcohol free, UV absorber free

    //         [7 naturally derived anti-inflammatory ingredients]
    //         Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
    //     },
    //     {
    //         name: "Marimove 365 face mask (7 pieces)",
    //         price: "¥2,420 ",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/9898ff19b437f645573af78f11c6c317.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A 3D three-dimensional approach to each layer of the skin with three types of hyaluronic acid and ceramide.
    //         A dense, long-lasting moisturizing mask that uses Benliese, which is gentle on the skin and has high water absorption and moisturizing properties.`
    //     },
    //     {
    //         name: "Marimove Mini EGF Serum (48ml)",
    //         price: "¥6,380 ",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/0bfdc4fa144b7490496eee30d989f157.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `"EGF Skin Serum" is a high-performance serum for everyone who takes their beauty seriously.
    //         Contains EGF and 4 types of stem cell extracts to moisturize the skin and improve skin texture, leaving your skin moisturized and glossy.
    //         The thick, rich texture brings comfort to the skin and is extremely comfortable to use. Incorporate it into your daily beauty routine and experience a new beginning for glowing skin.

    //         [4 stem cell extracts]
    //         Apple fruit cultured cell extract, Rhododendron ferrugineum leaf cultured cell extract, grape fruit cell extract, Argania spinosa callus cultured extract
    //         (48ml)
    //         `
    //     },
    //     {
    //         name: "Marimove Mini Moisturizing Cream (35g)",
    //         price: "¥5,280",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/5d0195d991aeabf345a41536c991a1cc.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `Intensive Moisturizing Cream" is a moisturizing cream that is a luxurious blend of highly functional beauty ingredients including Falcolex BX46.
    //         Seven plant extracts and Falcolex BX46 are in perfect harmony and spread comfortably on the skin without stickiness,
    //         making it ideal for after-sun care.`
    //     },
    //     {
    //         name: "Marimove Omashan",
    //         price: "¥3,080",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/483021cb8d4e4616141fc8e6f9de8542.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A gentle shampoo made with mainly plant ingredients that
    //         can be used by people of all ages, from children to the elderly.
    //         Fragrance-free, color-free, hypoallergenic, weakly acidic`
    //     },
    //     {
    //         name: "Marimove wax",
    //         price: "¥6,600",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/abd520c6054e76998012734e5173d3c0.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `Make waxing simpler...mà remove wax can be used on all parts of the body, from face, body, VIO to men's beards!
    //         This wax is easy to use on your own at home.`
    //     },
    //     {
    //         name: "Marimove Premium BC (Bio Cellulose Mask) 25ml x 5 sheets",
    //         price: "¥5,280",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/bff61325810a46c607511c4864f45409.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A high-adhesion, high-penetration facial sheet mask using biocellulose, a new gel-like material similar to Nata de Coco .
    //         The biofiber with a 3D net cross structure allows it to adhere tightly to the uneven parts of your face,
    //         allowing the beauty ingredients to penetrate into every corner of the stratum corneum.`
    //     },
    //     {
    //         name: "Marimove UV milk protector (sunscreen)",
    //         price: "¥4,180",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `The non-chemical additive-free formula does not leave a white cast.
    //         It can be safely used by people with sensitive skin and children.
    //         It is waterproof and does not require repainting.

    //         [8 ingredients free]
    //         Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
    //         petroleum surfactant free, alcohol free, UV absorber free

    //         [7 naturally derived anti-inflammatory ingredients]
    //         Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
    //     },
    //     {
    //         name: "Marimove 365 face mask (7 pieces)",
    //         price: "¥2,420 ",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/9898ff19b437f645573af78f11c6c317.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A 3D three-dimensional approach to each layer of the skin with three types of hyaluronic acid and ceramide.
    //         A dense, long-lasting moisturizing mask that uses Benliese, which is gentle on the skin and has high water absorption and moisturizing properties.`
    //     },
    //     {
    //         name: "Marimove Mini EGF Serum (48ml)",
    //         price: "¥6,380 ",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/0bfdc4fa144b7490496eee30d989f157.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `"EGF Skin Serum" is a high-performance serum for everyone who takes their beauty seriously.
    //         Contains EGF and 4 types of stem cell extracts to moisturize the skin and improve skin texture, leaving your skin moisturized and glossy.
    //         The thick, rich texture brings comfort to the skin and is extremely comfortable to use. Incorporate it into your daily beauty routine and experience a new beginning for glowing skin.

    //         [4 stem cell extracts]
    //         Apple fruit cultured cell extract, Rhododendron ferrugineum leaf cultured cell extract, grape fruit cell extract, Argania spinosa callus cultured extract
    //         (48ml)
    //         `
    //     },
    //     {
    //         name: "Marimove Mini Moisturizing Cream (35g)",
    //         price: "¥5,280",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/5d0195d991aeabf345a41536c991a1cc.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `Intensive Moisturizing Cream" is a moisturizing cream that is a luxurious blend of highly functional beauty ingredients including Falcolex BX46.
    //         Seven plant extracts and Falcolex BX46 are in perfect harmony and spread comfortably on the skin without stickiness,
    //         making it ideal for after-sun care.`
    //     },
    //     {
    //         name: "Marimove Omashan",
    //         price: "¥3,080",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/483021cb8d4e4616141fc8e6f9de8542.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A gentle shampoo made with mainly plant ingredients that
    //         can be used by people of all ages, from children to the elderly.
    //         Fragrance-free, color-free, hypoallergenic, weakly acidic`
    //     },
    //     {
    //         name: "Marimove wax",
    //         price: "¥6,600",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/abd520c6054e76998012734e5173d3c0.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `Make waxing simpler...mà remove wax can be used on all parts of the body, from face, body, VIO to men's beards!
    //         This wax is easy to use on your own at home.`
    //     },
    //     {
    //         name: "Marimove Premium BC (Bio Cellulose Mask) 25ml x 5 sheets",
    //         price: "¥5,280",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/bff61325810a46c607511c4864f45409.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `A high-adhesion, high-penetration facial sheet mask using biocellulose, a new gel-like material similar to Nata de Coco .
    //         The biofiber with a 3D net cross structure allows it to adhere tightly to the uneven parts of your face,
    //         allowing the beauty ingredients to penetrate into every corner of the stratum corneum.`
    //     },
    //     {
    //         name: "Marimove UV milk protector (sunscreen)",
    //         price: "¥4,180",
    //         img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
    //         description: `The non-chemical additive-free formula does not leave a white cast.
    //         It can be safely used by people with sensitive skin and children.
    //         It is waterproof and does not require repainting.

    //         [8 ingredients free]
    //         Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
    //         petroleum surfactant free, alcohol free, UV absorber free

    //         [7 naturally derived anti-inflammatory ingredients]
    //         Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
    //     }
    // ]

    const [visibleItems, setVisibleItems] = useState(8);

    const handleLoadMore = () => {
        setVisibleItems(prevCount => prevCount + 4);
    };
    useEffect(() => {
        if (visibleItems < items.length && visibleItems > 8) {
            scrollDown();
        }
    }, [visibleItems])

    const scrollDown = () => {
        const currentPosition = window.pageYOffset;
        const newPosition = currentPosition + 300;

        window.scrollTo({
            top: newPosition,
            behavior: 'smooth'
        });
    };

    const formatCurrency = (amount, languageCode, currency) => {
        return new Intl.NumberFormat(languageCode, { style: 'currency', currency: currency }).format(amount);
    };

    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    {/* <img src="https://baseec-img-mng.akamaized.net/images/user/logo/180c45ea74bbc6b53b7b0088b9a8ba71.png?imformat=generic&q=90&im=Resize,width=2048,aspect=fit,type=downsize"></img> */}
                    <img src={banner}></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        {/* <p className={style.title}>個人情報保護方針</p> */}
                    </div>
                </div>
            </div>

            <div className={style.productFilter}>
                <div className={style.filter}>
                    <select
                        value={categorySelected}
                        onChange={(e) => setCategorySelected(e.target.value)}>

                        <option value={-1}>Loại sản phẩm</option>

                        {language == languageEnum.VN &&
                            categorys.map((o, index) => {
                                return <option key={index} value={o.id}>{o.nameVN}</option>
                            })
                        }
                        {language == languageEnum.EN &&
                            categorys.map((o, index) => {
                                return <option key={index} value={o.id}>{o.nameEN}</option>
                            })
                        }
                        {language == languageEnum.SK &&
                            categorys.map((o, index) => {
                                return <option key={index} value={o.id}>{o.nameSK}</option>
                            })
                        }
                        {language == languageEnum.JP &&
                            categorys.map((o, index) => {
                                return <option key={index} value={o.id}>{o.nameJP}</option>
                            })
                        }
                    </select>

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value={""}>Sắp xếp theo</option>
                        <option value={"increase"}>Giá tăng dần</option>
                        <option value={"decrease"}>Giá giảm dần</option>
                    </select>
                </div>

                <div className={style.search}>
                    <input placeholder='Tìm kiếm' value={keySearch} onChange={(e) => setKeySearch(e.target.value)}></input>
                </div>
            </div>

            <div className={style.products}>

                {items.slice(0, visibleItems).map((item, index) => (

                    <a href={`${routes.productDetail}?id=${item.id}`}>
                        <div className={style.item} key={index}>
                            <img src={item.img} />

                            <div className={style.overlay}>
                                <p className={style.title}>{item.name.length > 25 ? item.name.slice(0, 25) + '...' : item.name}</p>
                                <p className={style.price}>{item.priceFormated}</p>
                                <p className={style.description}>{item.description.length > 55 ? item.description.slice(0, 55) + '...' : item.description}</p>
                            </div>
                        </div>
                    </a>
                ))}

            </div>

            {visibleItems < items.length &&
                <div className={style.loadMore}>
                    <button onClick={handleLoadMore}>Load more</button>
                </div>
            }


        </div>
    );
}

export default StoreProduct
