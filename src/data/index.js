import { getDict } from "../services/dict";
import { routes } from "../config/routes";
import logo from '../assets/logo.png'

export const news = () => {
    return [
        // {
        //     title: getDict("news_item1_title"),
        //     date: getDict("news_item1_date"),
        //     img: logo,
        //     content: getDict("news_item1_content"),
        // },
        // {
        //     title: getDict("news_item2_title"),
        //     date: getDict("news_item2_date"),
        //     img: logo,
        //     content: getDict("news_item2_content"),
        // }
    ];
};

// news check lại . chưa xóa dict

export const pharagraphs = () => {
    return [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/10143620-500x500.jpg",
            title: getDict("pharagraph_item1_title"),
            subTitle: getDict("pharagraph_item1_subTitle"),
            reverse: false,
            url: routes.about_academy
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/10143659.jpg",
            title: getDict("pharagraph_item2_title"),
            subTitle: getDict("pharagraph_item2_subTitle"),
            reverse: true,
            url: routes.about_product
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/aiko様-500x500.jpg",
            title: getDict("pharagraph_item3_title"),
            subTitle: getDict("pharagraph_item3_subTitle"),
            reverse: false,
            url: ""
        }
    ]
}

export const courseProduct = () => {
    return [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2021/01/c58d3ef034ba53863327adf4365297563_4620693218548729117_210113_20.jpg",
            // textCenter: getDict("courseProduct_item1_textCenter"),
            textBelow: getDict("courseProduct_item1_textBelow"),
            url: ""
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/110143683-scaled.jpg",
            // textCenter: getDict("courseProduct_item2_textCenter"),
            textBelow: getDict("courseProduct_item2_textBelow"),
            url: routes.product
        },
    ]
}

export const menu = () => {
    return [
        {
            titleArea: {
                title: getDict("menu_item1_titleArea_title"),
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_10477565_M-830x300.jpg",
                sub: {
                    subTitle: getDict("menu_item1_titleArea_sub_subTitle"),
                    description: [
                        getDict("menu_item1_titleArea_sub_discription_item1"),
                        getDict("menu_item1_titleArea_sub_discription_item2")
                    ]
                },
            },
            dataList: {
                title: getDict("menu_item1_dataList_title"),
                item: [
                    getDict("menu_item1_dataList_item1"),
                    getDict("menu_item1_dataList_item2"),
                    getDict("menu_item1_dataList_item3"),
                    getDict("menu_item1_dataList_item4"),
                    getDict("menu_item1_dataList_item5"),
                    getDict("menu_item1_dataList_item6"),
                ],
            },
            contentList: [
                {
                    title: getDict("menu_item1_contentList_item1_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_49944902_M-1024x682.jpg",
                    subText: getDict("menu_item1_contentList_item1_subText")
                },

                {
                    title: getDict("menu_item1_contentList_item2_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_58605939_M-e1603855032637-1024x735.jpg",
                    subText: getDict("menu_item1_contentList_item2_subText")
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: getDict("menu_item1_priceList_item_item1_title"),
                        sub: getDict("menu_item1_priceList_item_item1_sub")
                    },
                    {
                        title: getDict("menu_item1_priceList_item_item2_title"),
                        sub: getDict("menu_item1_priceList_item_item2_sub")
                    }
                ],
                description: [
                    getDict("menu_item1_priceList_description_item1"),
                    getDict("menu_item1_priceList_description_item2")
                ]
            },
            url: `${routes.menu}?key=0`
        },

        {
            titleArea: {
                title: getDict("menu_item2_titleArea_title"),
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_45689954_M-830x300.jpg",
                sub: {
                    subTitle: getDict("menu_item2_titleArea_sub_subTitle"),
                    description: [
                        getDict("menu_item2_titleArea_sub_discription_item1"),
                        getDict("menu_item2_titleArea_sub_discription_item2")
                    ]
                }
            },
            dataList: {
                title: getDict("menu_item2_dataList_title"),
                item: [
                    getDict("menu_item2_dataList_item1"),
                    getDict("menu_item2_dataList_item2"),
                    getDict("menu_item2_dataList_item3"),
                    getDict("menu_item2_dataList_item4"),
                    getDict("menu_item2_dataList_item5"),
                    getDict("menu_item2_dataList_item6"),
                ]
            },

            contentList: [
                {
                    title: getDict("menu_item2_contentList_item1_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_36915997_M-e1603261001757-1024x775.jpg",
                    subText: getDict("menu_item2_contentList_item1_subText")
                },
                {
                    title: getDict("menu_item2_contentList_item2_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_67645853_M-1024x682.jpg",
                    subText: getDict("menu_item2_contentList_item2_subText")
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: getDict("menu_item2_priceList_item_item1_title"),
                        sub: getDict("menu_item2_priceList_item_item1_sub")
                    },
                    {
                        title: getDict("menu_item2_priceList_item_item2_title"),
                        sub: getDict("menu_item2_priceList_item_item2_sub")
                    }
                ],
                description: [
                    getDict("menu_item2_priceList_description_item1"),
                    getDict("menu_item2_priceList_description_item2"),
                    getDict("menu_item2_priceList_description_item3")
                ]
            },
            url: `${routes.menu}?key=1`
        },

        {
            titleArea: {
                title: getDict("menu_item3_titleArea_title"),
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_55082057_M-830x300.jpg",
                sub: {
                    subTitle: getDict("menu_item3_titleArea_sub_subTitle"),
                    description: [
                        getDict("menu_item3_titleArea_sub_discription_item1"),
                        getDict("menu_item3_titleArea_sub_discription_item2")
                    ]
                }
            },
            dataList: {
                title: getDict("menu_item3_dataList_title"),
                item: [
                    getDict("menu_item3_dataList_item1"),
                    getDict("menu_item3_dataList_item2"),
                    getDict("menu_item3_dataList_item3"),
                    getDict("menu_item3_dataList_item4"),
                    getDict("menu_item3_dataList_item5"),
                    getDict("menu_item3_dataList_item6")
                ]
            },

            contentList: [
                {
                    title: getDict("menu_item3_contentList_item1_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_23234665_M-e1603262909278-1024x794.jpg",
                    subText: getDict("menu_item3_contentList_item1_subText")
                },
                {
                    title: getDict("menu_item3_contentList_item2_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_68668743_M-1024x682.jpg",
                    subText: getDict("menu_item3_contentList_item2_subText")
                }
            ],

            priceList: {
                title: "",
                item: [
                    {
                        title: getDict("menu_item3_priceList_item_item1_title"),
                        sub: getDict("menu_item3_priceList_item_item1_sub")
                    },
                    {
                        title: getDict("menu_item3_priceList_item_item2_title"),
                        sub: getDict("menu_item3_priceList_item_item2_sub")
                    },
                    {
                        title: getDict("menu_item3_priceList_item_item3_title"),
                        sub: getDict("menu_item3_priceList_item_item3_sub")
                    },
                    {
                        title: getDict("menu_item3_priceList_item_item4_title"),
                        sub: getDict("menu_item3_priceList_item_item4_sub")
                    },
                    {
                        title: getDict("menu_item3_priceList_item_item5_title"),
                        sub: getDict("menu_item3_priceList_item_item5_sub")
                    },
                    {
                        title: getDict("menu_item3_priceList_item_item6_title"),
                        sub: getDict("menu_item3_priceList_item_item6_sub")
                    },
                    {
                        title: getDict("menu_item3_priceList_item_item7_title"),
                        sub: getDict("menu_item3_priceList_item_item7_sub")
                    }
                ],
                description: [
                    getDict("menu_item3_priceList_description_item1"),
                    getDict("menu_item3_priceList_description_item2"),
                    getDict("menu_item3_priceList_description_item3")
                ]
            },
            url: `${routes.menu}?key=2`
        },
        {
            titleArea: {
                title: getDict("menu_item4_titleArea_title"),
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_62874708_M-830x300.jpg",
                sub: {
                    subTitle: getDict("menu_item4_titleArea_sub_subTitle"),
                    description: [
                        getDict("menu_item4_titleArea_sub_discription_item1"),
                        getDict("menu_item4_titleArea_sub_discription_item2"),
                    ]
                }
            },
            dataList: {
                title: getDict("menu_item4_dataList_title"),
                item: [
                    getDict("menu_item4_dataList_item1"),
                    getDict("menu_item4_dataList_item2"),
                    getDict("menu_item4_dataList_item3"),
                    getDict("menu_item4_dataList_item4"),
                    getDict("menu_item4_dataList_item5"),
                    getDict("menu_item4_dataList_item6"),
                    getDict("menu_item4_dataList_item7"),
                ]
            },

            contentList: [
                {
                    title: getDict("menu_item4_contentList_item1_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_68105924_M-1024x682.jpg",
                    subText: getDict("menu_item4_contentList_item1_subText")
                },
                {
                    title: getDict("menu_item4_contentList_item2_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_55580351_M-1024x682.jpg",
                    subText: getDict("menu_item4_contentList_item2_subText")
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: getDict("menu_item4_priceList_item_item1_title"),
                        sub: getDict("menu_item4_priceList_item_item1_sub")
                    },
                    {
                        title: getDict("menu_item4_priceList_item_item2_title"),
                        sub: getDict("menu_item4_priceList_item_item2_sub")
                    },
                    {
                        title: getDict("menu_item4_priceList_item_item3_title"),
                        sub: getDict("menu_item4_priceList_item_item3_sub")
                    },
                    {
                        title: getDict("menu_item4_priceList_item_item4_title"),
                        sub: getDict("menu_item4_priceList_item_item4_sub")
                    },
                    // {
                    //     title: getDict("menu_item4_priceList_item_item5_title"),
                    //     sub: getDict("menu_item4_priceList_item_item5_sub")
                    // }
                ],
                description: [
                    getDict("menu_item4_priceList_description_item1"),
                    getDict("menu_item4_priceList_description_item2"),
                    getDict("menu_item4_priceList_description_item3")
                ]
            },
            url: `${routes.menu}?key=3`
        },
        {
            titleArea: {
                title: getDict("menu_item5_titleArea_title"),
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_65800245_M-830x300.jpg",
                sub: {
                    subTitle: getDict("menu_item5_titleArea_sub_subTitle"),
                    description: [
                        getDict("menu_item5_titleArea_sub_discription_item1"),
                        getDict("menu_item5_titleArea_sub_discription_item2")
                    ]
                }
            },
            dataList: {
                title: getDict("menu_item5_dataList_title"),
                item: [
                    getDict("menu_item5_dataList_item1"),
                    getDict("menu_item5_dataList_item2"),
                    getDict("menu_item5_dataList_item3"),
                    getDict("menu_item5_dataList_item4"),
                    getDict("menu_item5_dataList_item5"),
                    getDict("menu_item5_dataList_item6"),
                ]
            },

            contentList: [
                {
                    title: getDict("menu_item5_contentList_item1_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_62120472_M-1024x682.jpg",
                    subText: getDict("menu_item5_contentList_item1_subText")
                },
                {
                    title: getDict("menu_item5_contentList_item2_title"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_59619485_M-1024x683.jpg",
                    subText: getDict("menu_item5_contentList_item2_subText")
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: getDict("menu_item5_priceList_item_item1_title"),
                        sub: getDict("menu_item5_priceList_item_item1_sub")
                    },
                    {
                        title: getDict("menu_item5_priceList_item_item2_title"),
                        sub: getDict("menu_item5_priceList_item_item2_sub")
                    },
                    {
                        title: getDict("menu_item5_priceList_item_item3_title"),
                        sub: getDict("menu_item5_priceList_item_item3_sub")
                    },
                    {
                        title: getDict("menu_item5_priceList_item_item4_title"),
                        sub: getDict("menu_item5_priceList_item_item4_sub")
                    },
                    {
                        title: getDict("menu_item5_priceList_item_item5_title"),
                        sub: getDict("menu_item5_priceList_item_item5_sub")
                    }
                ],
                description: [
                    getDict("menu_item5_priceList_description_item1"),
                    getDict("menu_item5_priceList_description_item2"),
                    getDict("menu_item5_priceList_description_item3")
                ]
            },
            url: `${routes.menu}?key=4`
        },
        {
            titleArea: {
                title: getDict("menu_item6_titleArea_title"),
                img: "https://mareve.co.jp/wp-content/uploads/2021/02/1pixta_54718016_M-830x300.jpg",
                sub: {
                    subTitle: getDict("menu_item6_titleArea_sub_subTitle"),
                    description: [
                        getDict("menu_item6_titleArea_sub_discription_item1"),
                        getDict("menu_item6_titleArea_sub_discription_item2"),
                        getDict("menu_item6_titleArea_sub_discription_item3")
                    ]
                }
            },
            dataList: {
                title: "",
                item: [

                ]
            },

            contentList: [
                {
                    title: "",
                    img: "",
                    subText: ""
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: getDict("menu_item6_priceList_item_item1_title"),
                        sub: getDict("menu_item6_priceList_item_item1_sub")
                    },
                    {
                        title: getDict("menu_item6_priceList_item_item2_title"),
                        sub: getDict("menu_item6_priceList_item_item2_sub")
                    },
                    {
                        title: getDict("menu_item6_priceList_item_item3_title"),
                        sub: getDict("menu_item6_priceList_item_item3_sub")
                    },
                    {
                        title: getDict("menu_item6_priceList_item_item4_title"),
                        sub: getDict("menu_item6_priceList_item_item4_sub")
                    },
                ],
                description: [
                    getDict("menu_item6_priceList_description_item1"),
                    getDict("menu_item6_priceList_description_item2"),
                    getDict("menu_item6_priceList_description_item3")
                ]
            },
            url: `${routes.menu}?key=5`
        },
        {
            titleArea: {
                title: getDict("menu_item7_titleArea_title"),
                img: "https://mareve.co.jp/wp-content/uploads/2021/06/kids_L-830x300.jpg",
                sub: {
                    subTitle: getDict("menu_item7_titleArea_sub_subTitle"),
                    description: [
                        getDict("menu_item7_titleArea_sub_discription_item1"),
                        getDict("menu_item7_titleArea_sub_discription_item2"),
                        getDict("menu_item7_titleArea_sub_discription_item3")
                    ]
                }
            },
            dataList: {
                title: "",
                item: [

                ]
            },

            contentList: [
                {
                    title: "",
                    img: "",
                    subText: ""
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: getDict("menu_item7_priceList_item_item1_title"),
                        sub: getDict("menu_item7_priceList_item_item1_sub")
                    },
                    {
                        title: getDict("menu_item7_priceList_item_item2_title"),
                        sub: getDict("menu_item7_priceList_item_item2_sub")
                    },
                    {
                        title: getDict("menu_item7_priceList_item_item3_title"),
                        sub: getDict("menu_item7_priceList_item_item3_sub")
                    }
                ],
                description: [
                    getDict("menu_item7_priceList_description_item1"),
                    getDict("menu_item7_priceList_description_item2"),
                    getDict("menu_item7_priceList_description_item3"),
                    getDict("menu_item7_priceList_description_item4")
                ]
            },
            url: `${routes.menu}?key=6`
        }
    ]
}