import React, { useState, useEffect } from 'react'
import ZingAPI from "../../context/zing.context";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';


const api = new ZingAPI();
const Personal = () => {
    const [itemArtists, setItemArtists] = useState([
        {
            id: 1,
            name: 'NCT',
            image_url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/avatars/9/e/e/e/9eee7e94d4e1530370067c2d7bac929f.jpg'
        },
        {
            id: 2,
            name: 'NCT 127',
            image_url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/avatars/0/9/4/5/094502d5cae906eb9be005979edff647.jpg'
        },
        {
            id: 3,
            name: 'NCT U',
            image_url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/avatars/7/7/773932d903569e1dc72b2c850e3a8b21_1461308953.jpg'
        },
        {
            id: 4,
            name: 'EXO',
            image_url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/avatars/a/8/5/d/a85df1e32e6d116a794edb107c26c117.jpg'
        }
    ])
    const [itemPlaylists, setItemPlaylists] = useState([
        {
            id: 1,
            name_id: "Playlist #1",
            name: "Tèo",
            thumd: "https://photo-playlist-zmp3.zadn.vn/s3/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rHDR9nlYQ431bHjq6s6eLWCMJhUPOgYN0G4QDaurwCBL0qxtcw5emyP17tOOiFn1596D80fbxXJ7mfpaJNExWvK2dE6ReFeKW5S9TPjrRXN15roWppLx547NI3LFDEzLb5PJDSxYjHIL5X8rZgTZ1O4L0w4CTRENriVMirXcu8OIbz9Xt2RX1WSNq_B9e7LJXvJ7fyasuOO7mbDpdI7WKaTM4wOTTU57nyE1SKsWebPJGLEXt_SmWq4L0FBECs2JKv00yiudO9D1q0QdcREWayE5H_EPiU0IbnEJSWynziSK4f0cpYNsWKB31ENVG&size=thumb/240_240"
        },
        {
            id: 2,
            name_id: "Playlist #2",
            name: "Kim Liên",
            thumd: "https://photo-playlist-zmp3.zadn.vn/s3/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rHDR9nlYQ431bHjq6s6eLWCMJhUPOgYN0G4QDaurwCBL0qxtcw5emyP17tOOiFn1596D80fbxXJ7mfpaJNExWvK2dE6ReFeKW5S9TPjrRXN15roWppLx547NI3LFDEzLb5PJDSxYjHIL5X8rZgTZ1O4L0w4CTRENriVMirXcu8OIbz9Xt2RX1WSNq_B9e7LJXvJ7fyasuOO7mbDpdI7WKaTM4wOTTU57nyE1SKsWebPJGLEXt_SmWq4L0FBECs2JKv00yiudO9D1q0QdcREWayE5H_EPiU0IbnEJSWynziSK4f0cpYNsWKB31ENVG&size=thumb/240_240"
        },
        {
            id: 3,
            name_id: "Playlist #3",
            name: "Keem",
            thumd: "https://photo-playlist-zmp3.zadn.vn/s3/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rHDR9nlYQ431bHjq6s6eLWCMJhUPOgYN0G4QDaurwCBL0qxtcw5emyP17tOOiFn1596D80fbxXJ7mfpaJNExWvK2dE6ReFeKW5S9TPjrRXN15roWppLx547NI3LFDEzLb5PJDSxYjHIL5X8rZgTZ1O4L0w4CTRENriVMirXcu8OIbz9Xt2RX1WSNq_B9e7LJXvJ7fyasuOO7mbDpdI7WKaTM4wOTTU57nyE1SKsWebPJGLEXt_SmWq4L0FBECs2JKv00yiudO9D1q0QdcREWayE5H_EPiU0IbnEJSWynziSK4f0cpYNsWKB31ENVG&size=thumb/240_240"
        },
        {
            id: 4,
            name_id: "4U - On Repeat",
            name: "Zing MP3",
            thumd: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/1/2/1/f/121fde6fe3898bc64cf04b716ddbe590.jpg"
        }
    ])
    const [itemSongs, setItemSongs] = useState([
        {
            id: 1,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 2,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 3,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 4,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 5,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 6,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 7,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 8,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 9,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        },
        {
            id: 10,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg"
        }
    ])
    const [itemAlbums, setItemAlbums] = useState([
        {
            id: 1,
            name: "1X1=1 (To Be One)",
            thumd: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/b/8/b82af64f22e1aa912b8849c6948bc705_1502097455.jpg"
        },
        {
            id: 2,
            name: "1X1=1 (To Be One)",
            thumd: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/b/8/b82af64f22e1aa912b8849c6948bc705_1502097455.jpg"
        },
        {
            id: 3,
            name: "1X1=1 (To Be One)",
            thumd: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/b/8/b82af64f22e1aa912b8849c6948bc705_1502097455.jpg"
        },
        {
            id: 4,
            name: "1X1=1 (To Be One)",
            thumd: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/b/8/b82af64f22e1aa912b8849c6948bc705_1502097455.jpg"
        }
    ])

    useEffect(async () => {
        await api.getChartHome().then((data) => {
            setItemSongs(data.data.data.RTChart.items)
            console.log(data.data)
        })
    }, [])



    return (
        <React.Fragment>
            <div className="w-full h-full">
                <div className="pt-[70px] pl-[60px] pr-[60px] ">
                    <div className="flex flex-row items-center">
                        <h2 className="text-[36px] font-bold leading-9 mr-[16px]">Thư viện</h2>
                        <div className="w-10 h-10 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                            <PlayArrowRoundedIcon />
                        </div>
                    </div>
                    <div className="flex flex-row my-6">
                        {
                            itemArtists.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-col justify-center p-[16px] cursor-pointer">
                                        <div className="group  w-44 h-44 rounded-full overflow-hidden relative">
                                            <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.image_url} alt="" />
                                            <div className="p-[8px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border rounded-full hidden group-hover:flex">
                                                <ShuffleRoundedIcon />
                                            </div>
                                        </div>
                                        <h5 className="mt-[16px] text-base text-center hover:underline hover:text-[#7200a1] ">{item.name}</h5>
                                    </div>)
                            })
                        }
                        <div className="flex flex-col justify-center p-[16px] cursor-pointer ">
                            <div className="flex items-center justify-center border w-44 h-44 rounded-full">
                                <MoreHorizIcon />
                            </div>
                            <h5 className="mt-[16px] text-center hover:underline hover:text-[#7200a1]">Xem tất cả</h5>
                        </div>
                    </div>
                </div>
                <div className="pt-[70px] pl-[60px] pr-[60px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <h4 className="text-[18px] font-bold leading-9 mr-[16px] ">PLAYLIST</h4>
                            <div className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-[#e8e8e8] bg-opacity-10" >
                                <AddRoundedIcon />
                            </div>
                        </div>
                        <div className="flex flex-row items-center cursor-pointer">
                            <h6 className="text-xs font-semibold text-[#737373] hover:text-[#c662ef]">TẤT CẢ</h6>
                            <div className="w-7 h-7 flex items-center justify-center cursor-pointer">
                                <ArrowForwardIosRoundedIcon />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        {
                            itemPlaylists.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-col pl-[32px] cursor-pointer first:pl-0 mt-4">
                                        <div className="group  w-52 h-52 rounded overflow-hidden relative">
                                            <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.thumd} alt="" />
                                            <div className="p-[8px] w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                                <CloseRoundedIcon />
                                                <div className=" w-12 h-12 flex items-center justify-center border rounded-full">
                                                    <PlayArrowRoundedIcon />
                                                </div>
                                                <MoreHorizIcon />
                                            </div>
                                        </div>
                                        <h5 className="mt-[16px] text-base hover:underline hover:text-[#7200a1] ">{item.name_id}</h5>
                                        <h6 className="text-xs text-white opacity-50">{item.name}</h6>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="pt-[24px] pl-[60px] pr-[60px] min-h-screen">
                    <div className="pb-[8px] border-b-[1px] border-[#e8e8e8] border-opacity-20">
                        <ul className="flex flex-row">
                            <li className="mr-10 pt-2 pb-2 cursor-pointer">
                                <a className="relative" href="">
                                    BÀI HÁT
                                    <span className="w-full h-0.5 block absolute bg-[#7200a1] mt-3"></span>
                                </a>

                            </li>
                            <li className="mr-10 pt-2 pb-2 cursor-pointer">
                                <a className="relative" href="">
                                    PODCAST
                                    <span className="w-full h-0.5 absolute bg-[#7200a1] mt-3 hidden"></span>
                                </a>
                            </li>
                            <li className="mr-10 pt-2 pb-2 cursor-pointer">
                                <a className="relative" href="">
                                    ALBUM
                                    <span className="w-full h-0.5 absolute bg-[#7200a1] mt-3 hidden"></span>
                                </a>
                            </li>
                            <li className="mr-10 pt-2 pb-2 cursor-pointer">
                                <a className="relative" href="">
                                    MV
                                    <span className="w-full h-0.5 absolute bg-[#7200a1] mt-3 hidden"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="">
                            <div className="my-4">
                                <button className="px-2.5 py-1 rounded-3xl text-[13px] bg-[#7200a1]">YÊU THÍCH</button>
                                <button className="px-2.5 py-1 border rounded-3xl text-[13px] hover:text-[#c662ef] hover:border-[#c662ef] ml-[16px]">ĐÃ TẢI LÊN</button>
                            </div>
                            <div>
                                <div className="p-[10px] grid grid-cols-[1fr_16fr_16fr_3fr] mt-4">
                                    <div></div>
                                    <div>
                                        <span className="text-[14px] text-[#737373] font-medium">BÀI HÁT</span>
                                    </div>
                                    <div>
                                        <span className="text-[14px] text-[#737373] font-medium">ALBUM</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[14px] text-[#737373] font-medium">THỜI GIAN</span>
                                    </div>
                                </div>
                                {
                                    itemSongs.map((item, index) => {
                                        return (
                                            <div key={index} className="p-[10px] grid grid-cols-[1fr_16fr_16fr_3fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                                <div>
                                                    <MusicNoteRoundedIcon />
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="w-10 h-10 rounded overflow-hidden mr-2">
                                                        <img src={item.thumbnail} alt="" />
                                                    </div>
                                                    <div>
                                                        <h5 className="text-base hover:underline hover:text-[#7200a1] ">{item.title}</h5>
                                                        <h6 className="text-xs text-white opacity-50">{item.artistsNames}</h6>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-[14px] text-[#737373] font-medium">{item.album.title}</span>
                                                </div>
                                                <div className="flex flex-row justify-between">
                                                    <div>
                                                        <FavoriteRoundedIcon />
                                                    </div>
                                                    <span className="text-[14px] text-[#737373] font-medium">{item.duration}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="hidden">
                            <div className="my-4">
                                <button className="px-2.5 py-1 rounded-3xl text-[13px] bg-[#7200a1]">TẬP MỚI</button>
                                <button className="px-2.5 py-1 border rounded-3xl text-[13px] hover:text-[#c662ef] hover:border-[#c662ef] ml-[16px]">TẬP ĐÃ LƯU</button>
                                <button className="px-2.5 py-1 border rounded-3xl text-[13px] hover:text-[#c662ef] hover:border-[#c662ef] ml-[16px]">CHƯƠNG TRÌNH</button>
                            </div>
                            <div>
                                <div className="w-full flex items-center justify-center">
                                    <img className="w-32 h-32" src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/episode-empty-1.png" alt="" />
                                </div>
                                <h5 className="mt-[16px] text-base text-center font-[Inter,sans-serif] font-medium text-[#e8e8e8] text-opacity-60">Không có tập mới</h5>
                            </div>
                        </div>
                        <div className="flex-row hidden">
                            {
                                itemAlbums.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-col justify-center p-[16px] cursor-pointer">
                                            <div className="group w-52 h-52 rounded overflow-hidden relative">
                                                <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.thumd} alt="" />
                                                <div className="p-[8px] w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                                    <FavoriteRoundedIcon />
                                                    <div className=" w-12 h-12 flex items-center justify-center border rounded-full">
                                                        <PlayArrowRoundedIcon />
                                                    </div>
                                                    <MoreHorizIcon />
                                                </div>
                                                <div className="absolute inset-0 bg-[#000000] bg-opacity-50 hidden  group-hover:block"></div>
                                            </div>
                                            <h5 className="mt-[16px] text-base hover:underline hover:text-[#7200a1] ">{item.name_id}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="mt-[24px] hidden">
                            <div className="w-full flex items-center justify-center">
                                <img className="w-32 h-32" src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-mv-dark.png" alt="" />
                            </div>
                            <h5 className="mt-[16px] text-base text-center font-[Inter,sans-serif] font-medium text-[#e8e8e8] text-opacity-60">Chưa có MV nào trong thư viện cá nhân</h5>
                            <div className="flex items-center justify-center mt-[16px]">
                                <a className="px-6 py-2 rounded-3xl bg-[#7200a1] text-[14px] font-normal no-underline" href="">KHÁM PHÁ NGAY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Personal;