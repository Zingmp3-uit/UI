import React, { useEffect, useState, useContext  } from 'react';
import ZingAPI from '../../context/zing.context'

import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Sector, Cell } from 'recharts';
import { MusicContext } from '../../App'
import { Link } from 'react-router-dom';

const api = new ZingAPI();

const Discover = () => {
    // const api = new ZingAPI()

    // const handle = async () => {
    //     api.getSong("ZOACFBBU")
    //         .then(res => console.log(res))

    //     // api.search(" đức phúc")
    //     //     .then(res => console.log(res))

    //     // api.getVideo("ZWABOE8A")
    //     //     .then(res => console.log(res))

    //     // api.getTop100()
    //     //     .then(res => console.log(res))
    // }
    const { createInfoAudio } = useContext(MusicContext)
    const [musicPartners, setMusicPartners] = useState([
        {
            id: 1,
            name: "YG Entertainment",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png"
        },
        {
            id: 2,
            name: "SONY MUSIC",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png"
        },
        {
            id: 3,
            name: "FUGA",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png"
        },
        {
            id: 4,
            name: "The Orchard",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"
        },
        {
            id: 5,
            name: "Kakao-M",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/Kakao-M.png"
        },
        {
            id: 6,
            name: "Beggers",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png"
        },
        {
            id: 7,
            name: "MosterCat",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png"
        },
        {
            id: 8,
            name: "Empire",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png"
        },
        {
            id: 9,
            name: "SM Entertainment",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png"
        },
        {
            id: 10,
            name: "Universal",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png"
        },
    ])
    const [slides, setSlides] = useState([
        {
            id: 1,
            image_url: 'https://photo-zmp3.zmdcdn.me/banner/3/f/7/f/3f7f11cb91990884c295701c4248fa34.jpg'
        },
        {
            id: 2,
            image_url: 'https://photo-zmp3.zmdcdn.me/banner/3/e/8/b/3e8b2fdf0f8d5437a6c05781567caebe.jpg'
        },
        {
            id: 3,
            image_url: 'https://photo-zmp3.zmdcdn.me/banner/b/8/9/3/b893f42366066f2c2549a1d090b8c2ba.jpg'
        },
        // {
        //     id: 4,
        //     image_url:'https://photo-zmp3.zmdcdn.me/banner/b/3/1/8/b318e7a90eed15b303b379fcc67cd337.jpg'
        // },
        // {
        //     id: 5,
        //     image_url:'https://photo-zmp3.zmdcdn.me/banner/a/e/7/a/ae7adb63960b03e41965cebdf85eaca1.jpg'
        // },
        // {
        //     id: 6,
        //     image_url:'https://photo-zmp3.zmdcdn.me/banner/e/7/2/f/e72f96a3722f618f8e4f77564c485de7.jpg'
        // },
    ])
    const [recommends, setRecommends] = useState([
        {
            id: 1,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/7/c/5/e7c572fb69f4093eb4bd444c192cf101.jpg',
            name: 'Bolero Nổi Bật 2021',
            singers: [
                'Mạnh Quỳnh', 'Phi Nhung', 'Tố My'
            ]
        },
        {
            id: 2,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/f/6/8/8f68fc697ef488169ece1a37fd55755b.jpg',
            name: 'Bolero Nổi Bật 2021',
            singers: [
                'Mạnh Quỳnh', 'Phi Nhung', 'Tố My'
            ]
        },
        {
            id: 3,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/2/4/a/324a4ab3eb3444ba9d7b288bf677aed9.jpg',
            name: 'Trữ Tình Hải Ngoại',
            singers: [
                'Quang Lê', 'Như Quỳnh', 'Phi Nhung'
            ]
        },
        {
            id: 4,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg',
            name: 'Bolero Hay Nhất',
            singers: [
                'Phi Nhung', 'Mạnh Quỳnh', 'Như Quỳnh'
            ]
        },
        {
            id: 5,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/9/6/c/c96c1a8cc8122753341321f977dddb9d.jpg',
            name: 'Những Bài Hát Hay Về Miền',
            singers: [
                'Cẩm Ly', 'Quốc Đại', 'Khưu Huy Vũ'
            ]
        },
    ])
    const [recommendstoday, setRecommendsToday] = useState([
        {
            id: 1,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/0/5/c/f05c599832086a0a60f1105db362619f.jpg',
            title: 'Nhạc Trẻ Gây Nghiện',
            sub_title: 'Giai điệu nghe một lần là không thể quên của V-Pop'
        },
        {
            id: 2,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/3/8/b/f38b644157befefcd23e88420237b6bd.jpg',
            title: 'K-Pop: Hits Quốc Dân',
            sub_title: 'Những bản Hits K-Pop trở thành biểu tượng \'quốc dân\''
        },
        {
            id: 3,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/9/a/1/59a188fea8b6fead76a8f8cbd19a6d50.jpg',
            title: 'Indie Việt',
            sub_title: 'Nghe đi nghe lại những ca khúc Indie Việt nổi bật nhất'
        },
        {
            id: 4,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/c/8/5/bc851d955b666a5fd2ce87463dbdbb4a.jpgfc',
            title: 'Phượt Cùng Rap Việt',
            sub_title: 'Lên ga nào Homie... Đã có Rap chất ngất trên mọi hành trình!'
        },
        {
            id: 5,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/a/7/a/1a7ad5c426a524a836c0360026be85c4.jpg',
            title: 'Nhà Nhà Nghe Gì?',
            sub_title: 'Va vào những giai điệu nhà nhà đều nghe'
        },
    ])
    const [xonescorner, setXonesCorner] = useState([
        {
            id: 1,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/7/c/367cee352d39a6c7e27b124a9864a4ed.jpg',
            title: 'USUK May Day',
            sub_title: 'Những bài hát USUK thịnh hành nhất tháng 5 này'
        },
        {
            id: 2,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/3/9/9/039959ff9510df34f2a671273272e08c.jpg',
            title: 'Essential V-Pop',
            sub_title: 'Nhạc Việt đang hot nhà nhà đều nghe, bạn cũng phải nghe'
        },
        {
            id: 3,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/0/c/530c2d4dcc27d4958efac6517d6fac00.jpg',
            title: 'K-HipHop',
            sub_title: 'Chất với âm nhạc HipHop xứ Hàn cho sáng chủ nhật'
        },
        {
            id: 4,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/a/a/1/2aa195f2fa633f0be0ef45ae15ccbcbc.jpg',
            title: 'Nghỉ Lễ Nghe Gì',
            sub_title: 'Playlist XONE dành riêng  cho các hoạt động ngày lễ của bạn'
        },
        {
            id: 5,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/9/d/8/69d83afdf2e21aa6ef2ef976f1ba1718.jpg',
            title: 'Be Happy, It\'s Holiday',
            sub_title: 'Âm nhạc cùng XONE thêm phấn khởi cho sáng nghỉ lễ'
        },
    ])
    const [newSongs, setNewSongs] = useState([
        {
            id: 1,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/d/9/5/ad9598b685c82fa9441041c24fa8040a.jpg',
            title: 'V-Pop Tháng 5/2022',
            singers: [
                'Đông Nhi', 'Chillies', 'K-ICM'
            ]
        },
        {
            id: 2,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/1/7/a/e17a114b6f1861322d51248e658b81ca.jpg',
            title: 'US-UK Tháng 5/2022',
            singers: [
                'Justin Bieber', 'Sam Smith', 'Khalid'
            ]
        },
        {
            id: 3,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/7/c/3/37c305a02b125b54010b6f72fb21cdd3.jpg',
            title: 'K-Pop Tháng 5/2022',
            singers: [
                'VERIVERY', 'Moonbyul', 'Jessi'
            ]
        },
        {
            id: 4,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/c/3/5/4c35eedc2dbe902de074a8b8f145eb80.jpg',
            title: 'C-Pop Tháng 5/2022',
            singers: [
                '西彬 / Tây Bân', '小蓝背心 / Tiểu Lam Bối Tâm', '金渔 / Kim Ngư'
            ]
        },
        {
            id: 5,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/6/1/0/f610e0c8091d6adc52a7c6c4c47134a1.jpg',
            title: 'Indie Việt Tháng 5/2022',
            singers: [
                'Madihu', 'Trang', 'The Flob'
            ]
        },
    ])
    const [top100, setTop100] = useState([
        {
            id: 1,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/f/7/6/cf76de6283cfa98ec85a301addb676e5.jpg',
            title: 'Top 100 Bài Hát Nhạc Trẻ Hay',
            singers: [
                'Hồng Thanh', 'DJ Mie', 'Đinh Tùng Huy'
            ]
        },
        {
            id: 2,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg',
            title: 'Top 100 Pop Âu Mỹ Hay Nhất',
            singers: [
                'Adele', 'The Kid LAROI', 'Justin Bieber'
            ]
        },
        {
            id: 3,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg',
            title: 'Top 100 Nhạc',
            singers: [
                'Alan Walker', 'K-391', 'Emelie Hollow'
            ]
        },
        {
            id: 4,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/e/7/f8e7c3b24c84778dbf8734c76e129cd3.jpg',
            title: 'Top 100 Nhạc Trữ Tình Hay',
            singers: [
                'Lưu Ánh Loan', 'Phi Nhung', 'Như Quỳnh'
            ]
        },
        {
            id: 5,
            image_url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/c/5/e/5c5e3ae3ab47643af0074d90033d7ded.jpg',
            title: 'Top 100 Nhạc Hàn Quốc Hay',
            singers: [
                'BIGBANG', 'EXO', 'NCT'
            ]
        },
    ])
    const [datas, setDatas] = useState(
        [
            {
                time: '20:00',
                top1: 4000,
                top2: 2400,
                top3: 2400,
            },
            {
                time: '22:00',
                top1: 3000,
                top2: 1398,
                top3: 2210,
            },
            {
                time: '00:00',
                top1: 2000,
                top2: 9800,
                top3: 4290,
            },
            {
                time: '02:00',
                top1: 2780,
                top2: 3908,
                top3: 2000,
            },
            {
                time: '04:00',
                top1: 1890,
                top2: 4800,
                top3: 2181,
            },
            {
                time: '06:00',
                top1: 2390,
                top2: 3800,
                top3: 2500,
            },
            {
                time: '08:00',
                top1: 3490,
                top2: 4300,
                top3: 2100,
            },
            {
                time: '10:00',
                top1: 3490,
                top2: 4300,
                top3: 2100,
            },
            {
                time: '12:00',
                top1: 3490,
                top2: 4300,
                top3: 2100,
            },
            {
                time: '14:00',
                top1: 3490,
                top2: 4300,
                top3: 2100,
            },
            {
                time: '16:00',
                top1: 3490,
                top2: 4300,
                top3: 2100,
            },
            {
                time: '18:00',
                top1: 3490,
                top2: 4300,
                top3: 2100,
            },
        ]
    )
    const [itemSongs, setItemSongs] = useState([])
    const [chartMenus, setChartMenus] = useState([
        {
            id: 1,
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg'
        },
        {
            id: 2,
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg'
        },
        {
            id: 3,
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg'
        },
    ])
    const [singers, setSingers] = useState([
        {
            id: 1,
            name: 'karik',
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png'
        },
        {
            id: 2,
            name: 'trinh-thanh-binh',
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png'
        },
        {
            id: 3,
            name: 'erik',
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png'
        },
        {
            id: 4,
            name: 'jack',
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png'
        },
        {
            id: 5,
            name: 'mr-siro',
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png'
        },
        {
            id: 6,
            name: 'onlyc',
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png'
        },
        {
            id: 7,
            name: 'justatee',
            image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png'
        },
        // {
        //     id: 8,
        //     name: 'huong-ly',
        //     image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png'
        // },
        // {
        //     id: 9,
        //     name: 'chi-dan',
        //     image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png'
        // },
        // {
        //     id: 10,
        //     name: 'hoa-minzy',
        //     image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png'
        // },
        // {
        //     id: 11,
        //     name: 'duc-phuc',
        //     image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png'
        // },
    ])
    const [showDatas, setShowDatas] = useState([])


    useEffect(async () => {
        await api.getHome(1).then((data) => {
            setSlides(data.data.data.items[0].items)
            setRecommends(data.data.data.items[3].items)
            setRecommendsToday(data.data.data.items[4].items)
            setXonesCorner(data.data.data.items[5].items)
            // console.log(data.data.data);
        })
    }, [])

    useEffect(async () => {
        await api.getTop100().then((data) => {
            setTop100(data.data.data[0].items)
            // console.log(data.data.data)
        })
    }, [])

    useEffect(async () => {
        await api.getChartHome().then((data) => {
            setItemSongs(data.data.data.RTChart.items)
            console.log(data.data.data)
            let top3 = []
            for (var i = 0; i < 3; i++) {
                top3.push(data.data.data.RTChart.items[i].encodeId)
            }

            let a = []
            for (var i = 0; i < 24; i++) {
                if (i % 2 == 0) {
                    a.push({
                        hour: data.data.data.RTChart.chart.items[`${top3[0]}`][i].hour + ":00",
                        'top1': data.data.data.RTChart.chart.items[`${top3[0]}`][i].counter,
                        'top2': data.data.data.RTChart.chart.items[`${top3[1]}`][i].counter,
                        'top3': data.data.data.RTChart.chart.items[`${top3[2]}`][i].counter,
                    })
                }
            }
            setShowDatas(a)

            // console(data.data.data.RTChart.chart.items)
        })
    }, [])
    

    return (
        <React.Fragment>
            <div className="px-[60px] py-8">
                <div className="flex flex-row overflow-hidden">
                    {
                        slides.map((slide, index) => {

                            return (
                                <div key={index} className="flex flex-col pl-[32px] cursor-pointer first:pl-0 mt-4">
                                    <div key={index} className="flex w-[373px] h-[210px] bg-white rounded-lg overflow-hidden">
                                        <img className="w-full object-cover" src={slide.banner} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="px-[60px]">
                <h3 className="text-xl text-white font-black">Có Thể Bạn Muốn Nghe</h3>
                <div className="flex flex-row overflow-hidden">
                    {
                        recommends.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col pl-[32px] cursor-pointer first:pl-0 mt-4">
                                    <div className="group  w-52 h-52 rounded overflow-hidden relative">
                                        <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.thumbnail} alt="" />
                                        <div className="p-[8px] w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                            <FavoriteIcon />
                                            <div className=" w-12 h-12 flex items-center justify-center border rounded-full">
                                                <PlayArrowRoundedIcon />
                                            </div>
                                            <MoreHorizIcon />
                                        </div>
                                    </div>
                                    <h6 className="text-base font-black text-white mt-[8px] hover:text-[#7200a1]  overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>{item.title}</h6>
                                    {/* <span className="text-base text-[#797979]">
                                        {
                                            item.artists.map((artist, index) => {
                                                return (
                                                    <a className="text-[14px] text-[#797979] font-semibold no-underline hover:underline hover:text-[#7200a1] text-opacity-80" key={index}>{artist.name} </a>
                                                )
                                            })
                                        }
                                    </span> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="px-[60px] py-[24px]">
                <h3 className="text-xl text-white font-black">Lựa Chọn Hôm Nay</h3>
                <div className="flex flex-row">
                    {
                        recommendstoday.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col pl-[32px] first:pl-0 mt-4">
                                    <div className="group  w-52 h-52 rounded overflow-hidden relative cursor-pointer">
                                        <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.thumbnail} alt="" />
                                        <div className="p-[8px] w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                            <FavoriteIcon />
                                            <div className=" w-12 h-12 flex items-center justify-center border rounded-full">
                                                <PlayArrowRoundedIcon />
                                            </div>
                                            <MoreHorizIcon />
                                        </div>
                                    </div>
                                    <h6 className="text-base font-black text-white mt-[8px] hover:text-[#7200a1] cursor-pointer">{item.title}</h6>
                                    <span className="text-[14px] text-[#797979] font-semibold no-underline text-opacity-80  overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "2" }} key={index}>{item.sortDescription}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="px-[60px] py-[24px]">
                <h3 className="text-xl text-white font-black">XONE's CORNER</h3>
                <div className="flex flex-row">
                    {
                        xonescorner.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col pl-[32px] first:pl-0 mt-4">
                                    <div className="group  w-52 h-52 rounded overflow-hidden relative cursor-pointer">
                                        <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.thumbnail} alt="" />
                                        <div className="p-[8px] w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                            <FavoriteIcon />
                                            <div className=" w-12 h-12 flex items-center justify-center border rounded-full">
                                                <PlayArrowRoundedIcon />
                                            </div>
                                            <MoreHorizIcon />
                                        </div>
                                    </div>
                                    <h6 className="text-base font-black text-white mt-[8px] hover:text-[#7200a1] cursor-pointer">{item.title}</h6>
                                    <span className="text-[14px] text-[#797979] font-semibold no-underline text-opacity-80" key={index}>{item.sortDescription}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="px-[60px] py-[24px]">
                <h3 className="text-xl text-white font-black">Nhạc Mới Mỗi Ngày</h3>
                <div className="flex flex-row">
                    {
                        newSongs.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col pl-[32px] first:pl-0 mt-4 cursor-pointer">
                                    <div className="group  w-52 h-52 rounded overflow-hidden relative">
                                        <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.image_url} alt="" />
                                        <div className="p-[8px] w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                            <FavoriteIcon />
                                            <div className=" w-12 h-12 flex items-center justify-center border rounded-full">
                                                <PlayArrowRoundedIcon />
                                            </div>
                                            <MoreHorizIcon />
                                        </div>
                                    </div>
                                    <h6 className="text-base font-black text-white mt-[8px] hover:text-[#7200a1]">{item.title}</h6>
                                    <span className="text-base text-[#797979] overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>
                                        {
                                            // item.singers.map((singer, index) => {
                                            //     return (
                                            //         <div className="inline">
                                            //             <a className="text-[14px] text-[#797979] font-semibold no-underline hover:underline hover:text-[#7200a1] text-opacity-80" key={index}>{singer} </a>
                                            //         </div>
                                            //     )
                                            // })
                                            // item.singers.map((singer, j) => {
                                            //     if (j == item.singers.length - 1)
                                            //         return (
                                            //             <Link to={'/' + singer.alias} className="text-[#B1D0E0] text-[12px] hover:text-[rgb(204,116,191)]">{singer}</Link>
                                            //         )
                                            //     else
                                            //         return (
                                            //             <>
                                            //                 <Link to={'/' + singer.alias} className="text-[#B1D0E0] text-[12px] hover:text-[rgb(204,116,191)]">{singer}</Link>
                                            //                 <span> ,</span>
                                            //             </>
                                            //         )
                                            // })
                                        }
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="relative mx-[60px] rounded-xl overflow-hidden h-[415px]">
                <img className="w-full object-cover" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.6.14/static/media/bg-chart.fd766403.jpg" alt="" />
                <div className="absolute inset-0 pl-[60px] pr-[60px] overflow-hidden bg-gradient-to-b from-[#740091] to-[#2d1a4c] opacity-90 ">
                    <div className="flex flex-row items-center my-4">
                        <h2 className="text-[40px] font-bold leading-10 mr-[16px]">#zingchart</h2>
                        <div className="w-10 h-10 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                            <PlayArrowRoundedIcon />
                        </div>
                    </div>
                    <div className="grid grid-cols-[40%_60%] items-start">
                        <div className="pr-8">
                            <div>
                                {
                                    itemSongs.map((item, index) => {
                                        if (index < 3) {
                                            return (
                                                <div key={index} className="p-[10px] grid grid-cols-[1fr_5fr_1fr] items-center bg-[#ffffff] mt-2 bg-opacity-10">
                                                    <div className="flex flex-row items-center justify-around">
                                                        {(index === 0) &&
                                                            <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #4a90e2', 'color': 'rgba(0,0,0,0)' }}>{index + 1}</span>
                                                        }
                                                        {(index === 1) &&
                                                            <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #50e3c2', 'color': 'rgba(0,0,0,0)' }}>{index + 1}</span>
                                                        }
                                                        {(index === 2) &&
                                                            <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #e35050', 'color': 'rgba(0,0,0,0)' }}>{index + 1}</span>
                                                        }
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <div className="w-14 h-14 rounded overflow-hidden mr-2">
                                                            <img src={item.thumbnailM} alt="" />
                                                        </div>
                                                        <div className="flex flex-col  justify-center">
                                                            <h5 className="text-sm overflow-hidden cursor-pointer hover:text-[rgb(204,116,191)]" onClick={() => createInfoAudio(item.encodeId)}>{item.title}</h5>
                                                            <span className="text-base text-[#797979] overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>
                                                                {
                                                                    item.artists.map((artist, j) => {
                                                                        if (j == item.artists.length - 1)
                                                                            return (
                                                                                <Link to={'/' + artist.alias} className="text-[#B1D0E0] text-[12px] hover:text-[rgb(204,116,191)]">{artist.name}</Link>
                                                                            )
                                                                        else
                                                                            return (
                                                                                <>
                                                                                    <Link to={'/' + artist.alias} className="text-[#B1D0E0] text-[12px] hover:text-[rgb(204,116,191)]">{artist.name}</Link>
                                                                                    <span> ,</span>
                                                                                </>
                                                                            )
                                                                    })
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row justify-between">
                                                        <span className="text-[14px] text-white font-bold">10%</span>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className="my-6 text-center">
                                <button className="px-6 py-2 border rounded-3xl">Xem tất cả</button>
                            </div>
                        </div>
                        <div className="flex items-end justify-center">
                            <LineChart
                                width={600}
                                height={325}
                                data={showDatas}
                            >
                                <XAxis dataKey="hour" />
                                {/* <Tooltip /> */}
                                <CartesianGrid stroke="#737373" strokeOpacity={0.2} strokeDasharray={"3 3"} />
                                <Line type="monotone" dataKey="top1" stroke="rgb(74, 144, 226)" yAxisId={0} />
                                <Line type="monotone" dataKey="top2" stroke="rgb(39, 189, 156)" yAxisId={1} />
                                <Line type="monotone" dataKey="top3" stroke="rgb(227, 80, 80)" yAxisId={2} />
                            </LineChart>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center align-center my-4">
                {
                    chartMenus.map((chartMenu, index) => {
                        return (
                            <div key={index} className="flex w-[373px] h-[107px] bg-white rounded-lg align-center justify-center mx-2 my-4 overflow-hidden group cursor-pointer ">
                                <img src={chartMenu.image} alt="" className="group-hover:scale-110 duration-500" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-7 justify-center align-center my-4 overflow-hidden px-[60px] ">
                {
                    singers.map((singer, index) => {
                        return (
                            <div key={index} className="">
                                <img className="w-[145px] h-[173px]" src={singer.image} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="px-[60px] py-[24px]">
                <h3 className="text-xl text-white font-black">Top 100</h3>
                <div className="flex flex-row overflow-hidden">
                    {
                        top100.map((item, index) => {
                            return (
                                <div className="flex flex-col pl-[32px] first:pl-0 mt-4 cursor-pointer">
                                    <div className="group  w-52 h-52 rounded overflow-hidden relative">
                                        <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.thumbnail} alt="" />
                                        <div className="p-[8px] w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                            <FavoriteIcon />
                                            <div className=" w-12 h-12 flex items-center justify-center border rounded-full">
                                                <PlayArrowRoundedIcon />
                                            </div>
                                            <MoreHorizIcon />
                                        </div>
                                    </div>
                                    <h6 className="text-base font-black text-white mt-[8px] hover:text-[#7200a1]">{item.title}</h6>
                                    {/* <span className="text-base">
                                        {
                                            item.artists.map((artist, index) => {
                                                return (
                                                    <div className="inline">
                                                        <a className="text-[14px] text-[#797979] font-semibold no-underline hover:underline hover:text-[#7200a1] text-opacity-80" key={index}>{artist}</a>
                                                        <span className="text-[#797979] text-opacity-80">, </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </span> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full h-full  pl-[60px] pr-[60px]">
                <div className="text-center pt-2">
                    <h3 className="text-[13px] font-bold text-[#ffffff] text-opacity-50 tracking-widest hover:text-[#c662ef] cursor-pointer">ĐỐI TÁC ÂM NHẠC</h3>
                </div>
                <div className="flex flex-row flex-wrap justify-center align-center my-4">
                    {
                        musicPartners.map((musicPartner) => (
                            <div className="flex w-[116px] h-[65px] bg-white rounded-lg align-center justify-center mx-2 my-4">
                                <div className="flex text-center justify-center p-2">
                                    <img className="object-scale-down w-auto h-auto" src={musicPartner.image_url} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
        // <div className='bg-[#170f23]'>

        //     <button onClick={handle} className=' '>get API</button>
        //     <video width="400" controls>
        //         <source
        //             src={"https://mcloud-bf-s7-mv-zmp3.zmdcdn.me/LVXWO5v-_FQ/40d0ff93add4448a1dc5/4c94cab8d6fd3fa366ec/720/Anh-O-Day-Ma.mp4?authen=exp=1649438018~acl=/LVXWO5v-_FQ/*~hmac=20a6c27a5801a3bdf315ca7f4b292349"}
        //             type="video/mp4"
        //         />
        //     </video>
        // </div>
    )
}

export default Discover;