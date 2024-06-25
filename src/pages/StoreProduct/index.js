import { getDict } from '../../services/dict';
import style from './index.module.scss'
import React, { useEffect, useState } from 'react';
import { routes } from '../../config/routes';
import banner from '../../assets/banner/bannerStoreProduct.jpg'
import { ApiService } from '../../services/ApiService'
import { productServiceUrl, baseUrl, categoryServiceUrl } from '../../config/link';
import Pagination from '../../components/Pagination';
function StoreProduct() {
    const apiService = new ApiService(baseUrl);
    const itemsPerPageOptions = [10, 20, 30, 'All'];
    const languageEnum = { VN: 'VN', EN: 'EN', SK: 'SK', JP: 'JP' }
    const [language, setLanguage] = useState(languageEnum.VN)
    const [categorySelected, setCategorySelected] = useState('-1')
    const [keySearch, setKeySearch] = useState("")
    const [filter, setFilter] = useState('');
    // api
    const [itemsFormated, setItemsFormated] = useState([]);
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

            // const repeatTimes = 19;
            // const repeatedItems = Array.from({ length: repeatTimes }, () => formattedResponse).flat();

            // setItemsFormated(repeatedItems);
            setItemsFormated(formattedResponse)
            // setItemsFormated([])
        } else if (language === languageEnum.SK) {
            let formattedResponse = products.map(item => {
                if (item.languageSK.enable) {
                    if (categorySelected > 0 && categorySelected == item.categoryId) {
                        return {
                            id: item.id,
                            name: item.languageSK.name,
                            price: formatCurrency(item.languageSK.price, 'ko-KR', 'KRW'),
                            img: item.coverImg,
                            description: item.languageSK.description,
                            categoryId: item.categoryId
                        };
                    } else if (categorySelected == (-1)) {
                        return {
                            id: item.id,
                            name: item.languageSK.name,
                            priceFormated: formatCurrency(item.languageSK.price, 'ko-KR', 'KRW'),
                            price: item.languageSK.price,
                            img: item.coverImg,
                            description: item.languageSK.description,
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
            setItemsFormated(formattedResponse)
        } else if (language === languageEnum.JP) {
            let formattedResponse = products.map(item => {
                if (item.languageJP.enable) {
                    if (categorySelected > 0 && categorySelected == item.categoryId) {
                        return {
                            id: item.id,
                            name: item.languageJP.name,
                            price: formatCurrency(item.languageJP.price, 'ja-JP', 'JPY'),
                            img: item.coverImg,
                            description: item.languageJP.description,
                            categoryId: item.categoryId
                        };
                    } else if (categorySelected == (-1)) {
                        return {
                            id: item.id,
                            name: item.languageJP.name,
                            priceFormated: formatCurrency(item.languageJP.price, 'ja-JP', 'JPY'),
                            price: item.languageJP.price,
                            img: item.coverImg,
                            description: item.languageJP.description,
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
            setItemsFormated(formattedResponse)
        } else if (language === languageEnum.EN) {
            let formattedResponse = products.map(item => {
                if (item.languageEN.enable) {
                    if (categorySelected > 0 && categorySelected == item.categoryId) {
                        return {
                            id: item.id,
                            name: item.languageEN.name,
                            price: formatCurrency(item.languageEN.price, 'en-US', 'USD'),
                            img: item.coverImg,
                            description: item.languageEN.description,
                            categoryId: item.categoryId
                        };
                    } else if (categorySelected == (-1)) {
                        return {
                            id: item.id,
                            name: item.languageJP.name,
                            priceFormated: formatCurrency(item.languageEN.price, 'en-US', 'USD'),
                            price: item.languageEN.price,
                            img: item.coverImg,
                            description: item.languageEN.description,
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
            setItemsFormated(formattedResponse)
        }


    }, [products, language, categorySelected, keySearch, filter])

    console.log(itemsFormated.length)
    // page 
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;

    useEffect(() => {
        const newStartIndex = currentPage * itemsPerPage;
        const newEndIndex = Math.min(newStartIndex + itemsPerPage, itemsFormated.length);
        setItems(itemsFormated.slice(newStartIndex, newEndIndex));

    }, [currentPage, itemsPerPage, itemsFormated]);

    useEffect(() => {
        setTotalPages(Math.ceil(itemsFormated.length / itemsPerPage));
    }, [itemsFormated])

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

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
                    <img src={banner}></img>
                </div>
                {/* <div className={style.bannerText}>
                    <div className={style.text}>
                        <p className={style.title}>個人情報保護方針</p>
                    </div>
                </div> */}
            </div>

            {
                products.length > 0 &&
                <div>


                    <div className={style.productFilter}>
                        <div className={style.filter}>
                            <select
                                value={categorySelected}
                                onChange={(e) => setCategorySelected(e.target.value)}>

                                <option value={-1}>{getDict("store_product_category")}</option>

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
                                <option value={""}>{getDict("store_product_arrange")}</option>
                                <option value={"increase"}>{getDict("store_product_arrange_increase")}</option>
                                <option value={"decrease"}>{getDict("store_product_arrange_decrease")}</option>
                            </select>
                        </div>

                        <div className={style.search}>
                            <input placeholder='Tìm kiếm' value={keySearch} onChange={(e) => setKeySearch(e.target.value)}></input>
                        </div>
                    </div>

                    <div className={style.products}>

                        {items.map((item, index) => (

                            <a href={`${routes.productDetail}?id=${item.id}`}>
                                <div className={style.item} key={index}>
                                    <img src={item.img} />

                                    <div className={style.overlay}>
                                        {/* <p className={style.title}>{item.name.length > 25 ? item.name.slice(0, 25) + '...' : item.name}</p> */}
                                        <p className={style.title}>{item.name}</p>
                                        <p className={style.price}>{item.priceFormated}</p>
                                        <p className={style.description}>{item.description.length > 55 ? item.description.slice(0, 55) + '...' : item.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}

                    </div>

                    {items.length < itemsFormated.length &&
                        <div className={style.pagination}>
                            <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
                        </div>
                    }

                </div>
            }

            {
                items.length == 0 &&
                <div className={style.emptyItem}>
                    <p>{getDict("store_product_noProductAvailable")}</p>
                </div>
            }



        </div>
    );
}

export default StoreProduct
