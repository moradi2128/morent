import { v4 as uuidv4 } from 'uuid';
// === Image ==
import bgAds from "./assets/images/ads/bg.png"
import bgAds_1 from "./assets/images/ads/bg_1.png"

import Avatar from "./assets/images/pic.png"
import Avatar2 from "./assets/images/Profill.png"

import car from "./assets/images/car.png"
import car1 from "./assets/images/car-1.png"
import car2 from "./assets/images/Car-2.png"
import car3 from "./assets/images/Car-3.png"
import car4 from "./assets/images/Car-4.png"
import car5 from "./assets/images/Car-5.png"
import car6 from "./assets/images/Car-6.png"
import car7 from "./assets/images/Car-7.png"
import car8 from "./assets/images/Car-8.png"
import car9 from "./assets/images/Car-9.png"
import { CalendarDaysIcon, ChartBarIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, CreditCardIcon, HomeIcon, InformationCircleIcon, RectangleStackIcon } from '@heroicons/react/24/outline';
// === ads ===
export const adsData = [
    {
        id: uuidv4(),
        title: "بهترین بستر برای اجاره خودرو",
        description: "سهولت در اجاره خودرو با خیال راحت و قابل اعتماد. البته با قیمت پایین",
        btnTittle: "خودرو اجاره ای",
        bgImage: bgAds,
        bgColor: "#54A6FF",
        alt: "best car",
        colorBtn: "primary",
        href: "/",
    },
    {
        id: uuidv4(),
        title: "روشی آسان برای اجاره ماشین با قیمت پایین",
        description: "ارائه خدمات اجاره خودرو ارزان و امکانات امن و راحت.",
        btnTittle: "خودرو اجاره ای",
        bgImage: bgAds_1,
        alt: "best car",
        bgColor: "#3563E9",
        colorBtn: "secondary",
        href: "/",
        btnStyle: {
            backgroundColor: "#54A6FF"
        },
    },
]
export const productData = [
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["اسپورت", "SUV"]
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: "Koenigsegg",
        type: "sport",
        price: "1900000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car1,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["MPV", "سدان"],
        isLicked: true
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car2,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["MPV", "سدان"],
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car3,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["MPV", "سدان"],
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car4,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["MPV", "سدان"],
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car5,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["MPV", "سدان"],
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car6,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["MPV", "سدان"],
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car7,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["MPV", "سدان"],
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car8,
        tankVolume: 90,
        capacity: 6,
        manual: "manual",
        filter: ["کوپه", "سدان"],
    },
    {
        id: uuidv4(),
        slug:uuidv4().slice(-8),
        title: " Nissan GT - R",
        type: "sport",
        price: "1500000",
        newPrice: "1300000",
        priceUnit: "day",
        btnTittle: "اکنون اجاره کنید",
        alt: "best car",
        bgImage: car9,
        tankVolume: 90,
        capacity: 6,
        manual: "manual"
    },

]

export const footerMenuData = [
    {
        id: uuidv4(),
        title: "درباره ما",
        children: [
            {
                title: "چگونه کار می کند",
                href: "/"
            },
            {
                title: "ویژه",
                href: "/"
            },
            {
                title: "شراکت",
                href: "/"
            },
            {
                title: "رابطه تجاری",
                href: "/"
            },
        ]

    },
    {
        id: uuidv4(),
        title: "انجمن",
        children: [
            {
                title: "مناسبت ها",
                href: "/"
            },
            {
                title: "وبلاگ",
                href: "/"
            },
            {
                title: "پادکست",
                href: "/"
            },
            {
                title: "یک دوست را دعوت کن",
                href: "/"
            },
        ]

    },
    {
        id: uuidv4(),
        title: "شبکه های اجتماعی",
        children: [
            {
                title: "اینستاگرام",
                href: "/"
            },
            {
                title: "توییتر",
                href: "/"
            },
            {
                title: "شراکت",
                href: "/"
            },
            {
                title: "فیس بوک",
                href: "/"
            },
        ]

    },
]
export const categoryData = [
    {
        id: uuidv4(), title: "نوع", isChecked: false, subcategory: [
            {
                id: uuidv4(),
                label: "اسپورت",
                isChecked: true,
                length: 10
            },
            {
                id: uuidv4(),
                isChecked: false,
                label: "SUV",
                length: 12
            },
            {
                id: uuidv4(),
                isChecked: false,
                label: "MPV",
                length: 16
            },
            {
                id: uuidv4(),
                label: "سدان",
                isChecked: false,
                length: 10
            },
            {
                id: uuidv4(),
                label: "کوپه",
                isChecked: false,
                length: 14
            },
            {
                id: uuidv4(),
                label: "هاچ بک",
                isChecked: false,
                length: 14
            },
        ],

    },
    {
        id: uuidv4(), title: "ظرفیت", isChecked: false, subcategory: [
            {
                id: uuidv4(),
                label: "2 نفر",
                isChecked: true,
                length: 10
            },
            {
                id: uuidv4(),
                name: "4 نفر",
                isChecked: false,
                length: 12
            },
            {
                id: uuidv4(),
                name: "6 نفر",
                isChecked: false,
                length: 16
            },
            {
                id: uuidv4(),
                name: "8 نفر یا بیشتر",
                isChecked: false,
                length: 10
            },
        ],
    }
]
export const commentData = {
    commets: [
        {
            id: 11,
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
            postId: 22,
            rating: 2,
            date: "1401 اریبهشت 23",
            user: {
                id: 68,
                username: "محمدرضا مرادی",
                avatar: Avatar,
                post: "برنامه نویس فرانت اند"
            }
        },
        {
            id: 121,
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
            postId: 23,
            rating: 4,
            date: "1401 اریبهشت 23",
            user: {
                id: 628,
                username: "آرزو آفاق",
                avatar: Avatar2,
                post: "برنامه نویس بک اند"

            }
        },
        {
            id: 131,
            comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
            postId: 24,
            rating: 5,
            date: "1401 اریبهشت 23",
            user: {
                id: 684,
                username: "محمدرضا مرادی",
                avatar: Avatar,
                post: "CEO at Taplife"
            }
        },
    ],
    "total": 340,
    "skip": 0,
    "limit": 10
}


export const menuDrawerData = [
    {
        id: 1234,
        title:"منوی اصلی",
        children: [
            {
                id: 0,
                name: "داشبورد",
                href: "/dashboard",
                icon: <HomeIcon />
            },
            {
                id: 12,
                name: "اجاره ماشین",
                href: "/dashboard/carrent",
                icon: <RectangleStackIcon />
            },
            {
                id: 20,
                name: "انالیز",
                href: "/dashboard/insight",
                icon: <ChartBarIcon />
            },
            {
                id: 30,
                name: "بازپرداخت",
                href: "/dashboard/reimburse",
                icon: <CreditCardIcon />
            },
            {
                id: 35,
                name: "صندوق ورودی",
                href: "/dashboard/index",
                icon: <ChatBubbleLeftEllipsisIcon />
            },
            {
                id: 40,
                name: "تقویم",
                href: "/dashboard/calender",
                icon: <CalendarDaysIcon />
            },
        ]
    },
    {
        id: 234,
        title: "اولویت ها",
        children: [
            {
                id: 640,
                name: "تنظیمات",
                href: "/dashboard/setting",
                icon: <Cog6ToothIcon />
            },
            {
                id: 650,
                name: "راهنمایی",
                href: "/dashboard/help",
                icon: <InformationCircleIcon />
            },
            // {
            //     id: 6260,
            //     name: "حسابداری",
            //     href: "/accounting",
            //     type: "notification",
            //     icon: <UilFilesLandscapes />
            // },

        ]
    }
]