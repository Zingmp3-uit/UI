import React, { useState, useEffect } from 'react'
import ZingAPI from "../context/zing.context";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
const Album = () => {
    const api = new ZingAPI();
    const [itemArtists, setItemArtists] = useState([])
    const getapi = async () => {
        await api.search("Nhạc Việt").then(res => {
            const randomItemsTopSuggest = (res.data.data.topSuggest).slice(0, 4);
            setItemArtists(randomItemsTopSuggest);
            //console.log(res);
        });

        // await api.getChartHome().then(res => {
        //     setItemsHotSongs(res.data.data.weekChart.vn.items.slice(0, 15));
        //     //console.log(res);
        // });
    } 
    const [itemSongs, setItemSongs] = useState([
        {
            id: 1,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 1
        },
        {
            id: 2,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 2
        },
        {
            id: 3,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 3
        },
        {
            id: 4,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 4
        },
        {
            id: 5,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 5
        },
        {
            id: 6,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 6
        },
        {
            id: 7,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 7
        },
        {
            id: 8,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 8
        },
        {
            id: 9,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 9
        },
        {
            id: 10,
            name: "My everything",
            artist: "NCT U",
            album: "NCT RESONANCE Pt. 2 - The 2nd Album",
            time: "03:41",
            image_url: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/cover/8/a/0/5/8a05e1d07f1c88e7093eac159682a341.jpg",
            rate: 10
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
        },
        {
            id: 5,
            name_id: "4U - On Repeat",
            name: "Zing MP3",
            thumd: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/1/2/1/f/121fde6fe3898bc64cf04b716ddbe590.jpg"
        }
        
    ])
    return (
        <div>
            <div className="grid grid-cols-5 px-[40px]">
                <div className="col-span-1"></div>
                <div className="col-span-4">
                    <div className="py-[24px] px-[60px]">
                        <div>
                        {
                            itemSongs.map((item, index) => {
                                return (
                                    <div className="p-[10px] grid grid-cols-[3fr_16fr_16fr_3fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                        <div className="flex flex-row items-center justify-around">
                                            
                                            
                                        </div>
                                        <div className="flex flex-row">
                                            <div className="w-10 h-10 rounded overflow-hidden mr-2">
                                                <img src={item.image_url} alt="" />
                                            </div>
                                            <div>
                                                <h5 className="text-base hover:underline hover:text-[#7200a1] ">{item.name}</h5>
                                                <h6 className="text-xs text-white opacity-50">{item.artist}</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[14px] text-[#737373] font-medium">{item.album}</span>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div>
                                                <FavoriteRoundedIcon />
                                            </div>
                                            <span className="text-[14px] text-[#737373] font-medium">{item.time}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
            
            <div className="pt-[70px] pl-[60px] pr-[60px] ">
                    <div className="flex flex-row items-center">
                        <h2 className="text-[30px] font-bold leading-9 mr-[16px]">Nghệ sĩ tham gia</h2>
                        
                    </div>
                    <div className="flex flex-row my-6">
                        {
                            itemArtists.map((item, index) => {
                                return (
                                <div className="flex flex-col justify-center p-[16px] cursor-pointer">
                                    <div className="group  w-44 h-44 rounded-full overflow-hidden relative">
                                        <img className="w-full object-cover group-hover:scale-110 duration-500" src={item.image_url} alt="" />
                                        <div className="p-[8px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border rounded-full hidden group-hover:flex">
                                            <ShuffleRoundedIcon />
                                        </div>
                                    </div>
                                    <h5 className="mt-[16px] text-base text-center hover:underline hover:text-[#7200a1] ">{item.name}</h5>
                                    <h6 className="mt-[4px] text-base text-center ">{item.like} quan tâm</h6>
                                </div>  )
                            })
                        }  
                        
                    </div>
                </div>
                <div className="pt-[70px] pl-[60px] pr-[60px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <h4 className="text-[18px] font-bold leading-9 mr-[16px] ">Có thể bạn quan tâm</h4>
                        </div>
                        
                    </div>
                    <div className="flex flex-row">
                        {
                            itemPlaylists.map((item, index) => {
                                return (
                                    <div className="flex flex-col justify-center p-[16px] cursor-pointer">
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
                <div className="pt-[70px] pl-[60px] pr-[60px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <h4 className="text-[18px] font-bold leading-9 mr-[16px] ">Vpop</h4>
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
                                    <div className="flex flex-col justify-center p-[16px] cursor-pointer">
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
        </div>
    )
}

export default Album;