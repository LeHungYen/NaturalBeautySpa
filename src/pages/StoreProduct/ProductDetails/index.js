import style from './index.module.scss'
import React from 'react';
import { useRef } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { routes } from '../../../config/routes';
function ProductDetail() {
    const items = [
        {
            name: "Marimove 365 face mask (7 pieces)",
            price: "¥2,420 ",
            imgs: [
                "https://baseec-img-mng.akamaized.net/images/item/origin/9898ff19b437f645573af78f11c6c317.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
                "https://baseec-img-mng.akamaized.net/images/item/origin/0bfdc4fa144b7490496eee30d989f157.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
                "https://baseec-img-mng.akamaized.net/images/item/origin/5d0195d991aeabf345a41536c991a1cc.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
                "https://baseec-img-mng.akamaized.net/images/item/origin/483021cb8d4e4616141fc8e6f9de8542.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
                "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal"
            ],
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/abd520c6054e76998012734e5173d3c0.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `A 3D three-dimensional approach to each layer of the skin with three types of hyaluronic acid and ceramide.
            A dense, long-lasting moisturizing mask that uses Benliese, which is gentle on the skin and has high water absorption and moisturizing properties.`,
            detail: "7 pieces included"
        },
        {
            name: "Marimove Mini EGF Serum (48ml)",
            price: "¥6,380 ",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/0bfdc4fa144b7490496eee30d989f157.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `"EGF Skin Serum" is a high-performance serum for everyone who takes their beauty seriously.
            Contains EGF and 4 types of stem cell extracts to moisturize the skin and improve skin texture, leaving your skin moisturized and glossy.
            The thick, rich texture brings comfort to the skin and is extremely comfortable to use. Incorporate it into your daily beauty routine and experience a new beginning for glowing skin.

            [4 stem cell extracts]
            Apple fruit cultured cell extract, Rhododendron ferrugineum leaf cultured cell extract, grape fruit cell extract, Argania spinosa callus cultured extract
            (48ml)
            `
        },
        {
            name: "Marimove Mini Moisturizing Cream (35g)",
            price: "¥5,280",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/5d0195d991aeabf345a41536c991a1cc.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `Intensive Moisturizing Cream" is a moisturizing cream that is a luxurious blend of highly functional beauty ingredients including Falcolex BX46.
            Seven plant extracts and Falcolex BX46 are in perfect harmony and spread comfortably on the skin without stickiness,
            making it ideal for after-sun care.`
        },
        {
            name: "Marimove Omashan",
            price: "¥3,080",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/483021cb8d4e4616141fc8e6f9de8542.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `A gentle shampoo made with mainly plant ingredients that
            can be used by people of all ages, from children to the elderly.
            Fragrance-free, color-free, hypoallergenic, weakly acidic`
        },
        {
            name: "Marimove wax",
            price: "¥6,600",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/abd520c6054e76998012734e5173d3c0.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `Make waxing simpler...mà remove wax can be used on all parts of the body, from face, body, VIO to men's beards!
            This wax is easy to use on your own at home.`
        },
        {
            name: "Marimove Premium BC (Bio Cellulose Mask) 25ml x 5 sheets",
            price: "¥5,280",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/bff61325810a46c607511c4864f45409.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `A high-adhesion, high-penetration facial sheet mask using biocellulose, a new gel-like material similar to Nata de Coco .
            The biofiber with a 3D net cross structure allows it to adhere tightly to the uneven parts of your face,
            allowing the beauty ingredients to penetrate into every corner of the stratum corneum.`
        },
        {
            name: "Marimove UV milk protector (sunscreen)",
            price: "¥4,180",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `The non-chemical additive-free formula does not leave a white cast.
            It can be safely used by people with sensitive skin and children.
            It is waterproof and does not require repainting.
            
            [8 ingredients free]
            Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
            petroleum surfactant free, alcohol free, UV absorber free
            
            [7 naturally derived anti-inflammatory ingredients]
            Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
        },
        ////////////////
        {
            name: "Marimove UV milk protector (sunscreen)",
            price: "¥4,180",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `The non-chemical additive-free formula does not leave a white cast.
            It can be safely used by people with sensitive skin and children.
            It is waterproof and does not require repainting.
            
            [8 ingredients free]
            Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
            petroleum surfactant free, alcohol free, UV absorber free
            
            [7 naturally derived anti-inflammatory ingredients]
            Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
        },
        {
            name: "Marimove UV milk protector (sunscreen)",
            price: "¥4,180",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `The non-chemical additive-free formula does not leave a white cast.
            It can be safely used by people with sensitive skin and children.
            It is waterproof and does not require repainting.
            
            [8 ingredients free]
            Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
            petroleum surfactant free, alcohol free, UV absorber free
            
            [7 naturally derived anti-inflammatory ingredients]
            Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
        },
        {
            name: "Marimove UV milk protector (sunscreen)",
            price: "¥4,180",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `The non-chemical additive-free formula does not leave a white cast.
            It can be safely used by people with sensitive skin and children.
            It is waterproof and does not require repainting.
            
            [8 ingredients free]
            Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
            petroleum surfactant free, alcohol free, UV absorber free
            
            [7 naturally derived anti-inflammatory ingredients]
            Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
        },
        {
            name: "Marimove UV milk protector (sunscreen)",
            price: "¥4,180",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `The non-chemical additive-free formula does not leave a white cast.
            It can be safely used by people with sensitive skin and children.
            It is waterproof and does not require repainting.
            
            [8 ingredients free]
            Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
            petroleum surfactant free, alcohol free, UV absorber free
            
            [7 naturally derived anti-inflammatory ingredients]
            Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
        },
        {
            name: "Marimove UV milk protector (sunscreen)",
            price: "¥4,180",
            img: "https://baseec-img-mng.akamaized.net/images/item/origin/1eac6370a31c941591f4816ea17e86c3.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
            description: `The non-chemical additive-free formula does not leave a white cast.
            It can be safely used by people with sensitive skin and children.
            It is waterproof and does not require repainting.
            
            [8 ingredients free]
            Paraben free, synthetic fragrance free, mineral oil free, coloring free, tar pigment free,
            petroleum surfactant free, alcohol free, UV absorber free
            
            [7 naturally derived anti-inflammatory ingredients]
            Centella asiatica extract , Scutellaria root extract, Japanese knotweed root extract, licorice root extract, tea leaf extract, rosemary leaf extract, chamomile flower extract`
        },
    ]

    const carouselRef = useRef(null);

    function handleNext() {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 230; // Điều chỉnh giá trị scrollLeft tùy thuộc vào kích thước mỗi mục trong carousel
        }
    }

    function handlePrev() {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 230; // Điều chỉnh giá trị scrollLeft tùy thuộc vào kích thước mỗi mục trong carousel
        }
    }


    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://baseec-img-mng.akamaized.net/images/user/logo/180c45ea74bbc6b53b7b0088b9a8ba71.png?imformat=generic&q=90&im=Resize,width=2048,aspect=fit,type=downsize"></img>
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
                        <div className={style.mainImg}>
                            <img src={items[0].imgs[0]} />
                        </div>

                        <div className={style.listImg}>
                            <ul>
                                {items[0].imgs.map((img, index) => (
                                    <li key={index}><img src={img} /></li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className={style.infor}>
                        <div className={style.name}>
                            <p>{items[0].name}</p>
                        </div>

                        <div className={style.price}>
                            <p>{items[0].price} <span>tax included</span></p>
                        </div>

                        <div className={style.description}>

                            {items[0].description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    <p>{line}</p>
                                </React.Fragment>
                            ))}
                        </div>

                        <div className={style.description}>
                            <p>{items[0].detail} </p>
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
                        <div className={style.carouselItem} key={index}>
                            <img src={item.img} />
                            <p className={style.title}>{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</p>
                            <p className={style.price}>{item.price}</p>
                        </div>
                    ))}
                </div>
                <button className={style.btnPrev} onClick={() => handlePrev()}><GrPrevious className={style.icon} /></button>
                <button className={style.btnNext} onClick={() => handleNext()}><GrNext className={style.icon} /></button>
            </div>

            <a href={routes.storeProduct}>
                <button className={style.returnProductList}>Return to product list</button>
            </a>
        </div>
    );
}

export default ProductDetail
