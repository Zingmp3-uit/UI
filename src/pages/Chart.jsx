import React, { useState } from 'react'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';


const Chart = () => {
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
    
    return (
        <div>
            <div className="w-full h-full bg-[#170f23]">
                <div className="relative">
                    <img className="w-full object-cover" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.6.14/static/media/bg-chart.fd766403.jpg" alt="" />
                    <div className="absolute inset-0 bg-[#170f23] bg-opacity-95 pt-[70px] pl-[60px] pr-[60px]">
                        <div className="flex flex-row items-center">
                            <h2 className="text-[40px] font-bold leading-10 mr-[16px]">#zingchart</h2>
                            <div className="w-10 h-10 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                                <PlayArrowRoundedIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[24px] px-[60px]">
                    <div>
                        {
                            itemSongs.map((item, index) => {
                                return (
                                    <div className="p-[10px] grid grid-cols-[3fr_16fr_16fr_3fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                        <div className="flex flex-row items-center justify-around">
                                            <span className="font-sans text-3xl font-bold">{item.rate}</span>
                                            <div>
                                                <RemoveRoundedIcon />
                                            </div>
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
                    <div className="my-6 text-center">
                        <button className="px-6 py-2 border rounded-3xl">Xem top 100</button>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full object-cover" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.6.14/static/media/week-chart-bg.edf332e5.jpg" alt="" />
                    <div className="absolute inset-0 bg-[#201335] bg-opacity-90  pt-[36px] pl-[60px] pr-[60px]">
                        <h2 className="text-[40px] font-bold leading-10 mr-[16px]">Bảng Xếp Hạng Tuần</h2>
                        <div className="grid grid-cols-[13fr_1fr_13fr_1fr_13fr] mt-6">
                            <div className="px-6 pt-6 bg-white bg-opacity-5 rounded-2xl ">
                                <div className="flex flex-row items-center ml-6 mb-4">
                                    <h4 className="text-[24px] font-bold leading-9 mr-[8px]">Việt Nam</h4>
                                    <div className="w-7 h-7 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                                        <PlayArrowRoundedIcon />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    {
                                    itemSongs.map((item, index) => {
                                        if(index < 4){
                                            return (
                                                <div className="p-[10px] grid grid-cols-[1fr_3fr_1fr] items-center">
                                                    <div className="flex flex-row items-center justify-around">
                                                        <span className="font-sans text-3xl font-bold">{item.rate}</span>
                                                        <div>
                                                            <RemoveRoundedIcon />
                                                        </div>
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
                                                    <div className="flex flex-row justify-between">
                                                        <span className="text-[14px] text-[#737373] font-medium">{item.time}</span>
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
                            </div>
                            <div></div>
                            <div className="px-6 pt-6 bg-white bg-opacity-5 rounded-2xl">
                                <div className="flex flex-row items-center">
                                    <h4 className="text-[24px] font-bold leading-9 mr-[8px]">US-UK</h4>
                                    <div className="w-7 h-7 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                                        <PlayArrowRoundedIcon />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    {
                                    itemSongs.map((item, index) => {
                                        if(index < 4){
                                            return (
                                                <div className="p-[10px] grid grid-cols-[1fr_3fr_1fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                                    <div className="flex flex-row items-center justify-around">
                                                        <span className="font-sans text-3xl font-bold">{item.rate}</span>
                                                        <div>
                                                            <RemoveRoundedIcon />
                                                        </div>
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
                                                    <div className="flex flex-row justify-between">
                                                        <span className="text-[14px] text-[#737373] font-medium">{item.time}</span>
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
                            </div>
                            <div></div>
                            <div className="px-6 pt-6 bg-white bg-opacity-5 rounded-2xl">
                                <div className="flex flex-row items-center">
                                    <h4 className="text-[24px] font-bold leading-9 mr-[8px]">K-Pop</h4>
                                    <div className="w-7 h-7 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                                        <PlayArrowRoundedIcon />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    {
                                    itemSongs.map((item, index) => {
                                        if(index < 4){
                                            return (
                                                <div className="p-[10px] grid grid-cols-[1fr_3fr_1fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                                    <div className="flex flex-row items-center justify-around">
                                                        <span className="font-sans text-3xl font-bold">{item.rate}</span>
                                                        <div>
                                                            <RemoveRoundedIcon />
                                                        </div>
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
                                                    <div className="flex flex-row justify-between">
                                                        <span className="text-[14px] text-[#737373] font-medium">{item.time}</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart;
