import React, { useState, useEffect } from 'react'
import ZingAPI from "../context/zing.context";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
//import AlbumLoader from "../components/SkeletonLoader/AlbumLoader";
import ItemAlbum from '../components/ItemAlbum/ItemAlbum';
import ItemArtists from '../components/ItemArtists/ItemArtists';

import { useParams, useNavigate } from 'react-router-dom';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const Album = () => {
    const { alias, id } = useParams();
    const navigate = useNavigate();
    const api = new ZingAPI();
    const [album, setAlbum] = useState(null);
    const [itemsTopAlbum, setItemsTopAlbum] = useState([]);//
    const [itemsHotSongs, setItemsHotSongs] = useState([]);//

    const [itemsTopSuggest, setItemsTopSuggest] = useState([]);
    const [itemsTopSuggest1, setItemsTopSuggest1] = useState([]);
    const [artistAttend, setArtistAttend] = useState([]);


    useEffect(async () => {
        let infoAlbum = await api.getDetailPlaylist(id)
        console.log(infoAlbum);
        if (infoAlbum.data.aliasTitle === alias) {
            setItemsHotSongs(infoAlbum.data.song.items)
            setArtistAttend(infoAlbum.data.artists)

            await api.search("Nhạc Việt").then(res => {
                const randomItemsTopAlbum = (res.data.topSuggest).slice(0, 1);
                setItemsTopAlbum(randomItemsTopAlbum)

                const randomItemsTopSuggest = (res.data.topSuggest).slice(0, 4);
                setItemsTopSuggest(randomItemsTopSuggest);

                const randomItemsTopSuggest1 = (res.data.topSuggest).slice(5, 9);
                setItemsTopSuggest1(randomItemsTopSuggest1);


            });
        }
        else
            navigate('/')
    }, []);
    function convertDuration(duration) {
        var min = Math.floor(duration / 60);
        let res;
        min < 10 ? res = 0 + min.toString() : res = min.toString();
        var sec = duration - min * 60;
        sec < 10 ? res = res + ":" + 0 + sec.toString() : res = res + ":" + sec.toString();
        return res;
    }



    return (
        <div>
            <div className="grid grid-cols-8 px-[40px]">
                <div className="col-span-2">
                    {
                        itemsTopAlbum.map((item, index) => {
                            return (
                                <div className='w-full h-full mt-[10.5px]' key={index}>
                                    <div className='relative group rounded-[3%] overflow-hidden'>
                                        <img className='group-hover:scale-110 group-hover:brightness-50 duration-500 object-cover rounded-[3%]' src={item.thumbnailM}>
                                        </img>

                                        <div className="absolute  w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">

                                            <div className="w-12 h-12 flex items-center justify-center border rounded-full">
                                                <PlayArrowIcon></PlayArrowIcon>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='pt-[2%] text-center  font-bold text-[12pt] truncate ... hover:text-[#B1D0E0] hover:cursor-pointer'>
                                        {item.title}
                                    </div>



                                    <div className='pt-[2%] text-center text-slate-400 font-semibold text-[11pt]'>
                                        <a className='hover:text-[#B1D0E0] hover:underline hover:cursor-pointer' href={item.artists[0].alias}>
                                            {item.artists[0].spotlight == true ? item.artists[0].name + "★" : item.artists[0].name}
                                        </a>
                                        <a>, </a>
                                        <a className='hover:text-[#B1D0E0] hover:underline hover:cursor-pointer' href={item.artists[1].alias}>
                                            {item.artists[1].spotlight == true ? item.artists[1].name + "★" : item.artists[1].name}
                                        </a>
                                        <a>, </a>
                                        <a className='hover:text-[#B1D0E0] hover:underline hover:cursor-pointer' href={item.artists[2].alias}>
                                            {item.artists[2].spotlight == true ? item.artists[2].name + "★" : item.artists[2].name}
                                        </a>
                                        <a>...</a>
                                    </div>

                                    <div className='pt-[2%] text-slate-400 font-semibold text-[11pt]'>
                                        {item.releaseDateText}
                                    </div>
                                    <div className=' bg-[#6998AB] justify-center w-[60%] hover:bg-[#406882] rounded-full mt-[5%] ml-[20%]'>
                                        <div className='flex w-full h-full justify-center  items-center text-sm font-semibold truncate ...'>

                                            <PlayArrowIcon></PlayArrowIcon>
                                            <div className='w-[5px]'></div>

                                            PHÁT NGẪU NHIÊN
                                        </div>
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-span-6">
                    <div className="py-[10px] px-[60px]">
                        <div className='relative group h-[60px] flex w-full rounded-[5px]'>
                            <div className="h-full  mt-[10.5px] ml-[10.5px] mb-[10.5px]">
                                <h2 className="text-[10pt] font-semibold text-slate-400 truncate ...">Bài hát</h2>
                            </div>
                            <div className="h-full  mt-[10.5px] ml-[51%] mb-[10.5px]">
                                <h2 className="text-[10pt] font-semibold text-slate-400 truncate ...">Album</h2>
                            </div>
                            <div className="h-full  mt-[10.5px] ml-[30%] mb-[10.5px] mr-[45.5px]">
                                <h2 className="text-[10pt] font-semibold text-slate-400 truncate ...">Thời gian</h2>
                            </div>
                        </div>
                        <div>
                            {
                                itemsHotSongs.map((item, index) => {
                                    return (
                                        <div className='relative group h-[60px] hover:bg-[#406882] flex w-full rounded-[5px] items-center ' key={index}>
                                            <MusicNoteIcon />
                                            <img className='mt-[10.5px] ml-[10.5px] object-cover h-[65%] rounded-[5px] cursor-pointer group-hover:brightness-[60%]' src={item.thumbnailM} />
                                            <div className='h-full w-[50%] mt-[10.5px] ml-[10.5px] mb-[10.5px]'>
                                                <div className='text-[11pt] font-bold  truncate ...'>
                                                    {item.title}
                                                </div>

                                                <div className='text-[10pt] font-semibold text-slate-400 truncate ...'>
                                                    <a className='hover:underline hover:text-[#B1D0E0] cursor-pointer' href={item.artists[0].alias}>
                                                        {item.artists[0].spotlight == true ? item.artists[0].name + "★" : item.artists[0].name}
                                                    </a>
                                                    {
                                                        item.artists.length == 1 ? ""
                                                            :
                                                            <>
                                                                <a>, </a>
                                                                {
                                                                    item.artists.length == 2 ?
                                                                        <a className='hover:underline hover:text-[#B1D0E0] cursor-pointer' href={item.artists[1].alias}>
                                                                            {item.artists[1].spotlight == true ? item.artists[1].name + "★" : item.artists[1].name}
                                                                        </a>
                                                                        :
                                                                        <>
                                                                            <a className='hover:underline hover:text-[#B1D0E0] cursor-pointer' href={item.artists[1].alias}>
                                                                                {item.artists[1].spotlight == true ? item.artists[1].name + "★" : item.artists[1].name}
                                                                            </a>

                                                                            <a>,...</a>
                                                                        </>
                                                                }
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            <div className="h-full  mt-[10.5px] mb-[10.5px]">
                                                <h2 className="text-[10pt] font-semibold text-slate-400 truncate ...">{item.title}</h2>

                                            </div>

                                            <div className="absolute right-[45.5px] top-[50%] translate-y-[-50%] translate-x-[100%] flex-row font-semibold text-[10pt] text-slate-400">
                                                {
                                                    convertDuration(item.duration)
                                                }
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
                <div className="flex flex-row ">
                    <ItemArtists
                        artistList={artistAttend}
                    >
                    </ItemArtists>
                </div>

            </div>
            <div className="pt-[70px] pl-[60px] pr-[60px]">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center">
                        <h4 className="text-[18px] font-bold leading-9 mr-[16px] ">Có thể bạn quan tâm</h4>
                    </div>

                </div>
                <div className="flex flex-row">
                    <ItemAlbum
                        albumsList={itemsTopSuggest}
                        isSubtitleClickable={true}
                    >
                    </ItemAlbum>
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
                    <ItemAlbum
                        albumsList={itemsTopSuggest1}
                        isSubtitleClickable={true}
                    >
                    </ItemAlbum>
                </div>
            </div>
        </div>
    )
}

export default Album;