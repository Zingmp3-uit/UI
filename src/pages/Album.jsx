import React, { useState, useEffect,useContext } from 'react'
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

import { useParams, useNavigate, Link } from 'react-router-dom';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { MusicContext } from '../App'


const Album = () => {
    const { createInfoAudio } = useContext(MusicContext)
    const { alias, id } = useParams();
    const navigate = useNavigate();
    const api = new ZingAPI();
    const [album, setAlbum] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState(null);

    const [itemsHotSongs, setItemsHotSongs] = useState([]);//

    const [itemsTopSuggest, setItemsTopSuggest] = useState([]);
    const [itemsTopSuggest1, setItemsTopSuggest1] = useState([]);
    const [artistAttend, setArtistAttend] = useState([]);


    useEffect(async () => {
        let infoAlbum = await api.getDetailPlaylist(id)
        console.log(infoAlbum);
        if (infoAlbum.data.aliasTitle === alias) {
            setThumbnail(infoAlbum.data.thumbnailM);
            setTitle(infoAlbum.data.title);
            setAlbum(infoAlbum.data);
            setItemsHotSongs(infoAlbum.data.song.items)
            setArtistAttend(infoAlbum.data.artists)

            await api.search("Nhạc Việt").then(res => {
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
                    <div className='w-full h-full mt-7'>
                        <img className='group-hover:scale-110 group-hover:brightness-50 duration-500 object-cover rounded-[3%]' src={thumbnail} />
                        <p className='pt-[2%] text-center  font-bold text-xl hover:text-[#B1D0E0] hover:cursor-pointer'>
                            {title}
                        </p>
                        <div className='text-center'>
                            {
                                artistAttend.map((artist, j) => {
                                    if (j == artistAttend.length - 1)
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
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="py-[10px] px-[60px]">
                        <div className='relative group h-[60px] flex w-full rounded-[5px]'>
                            <div className="h-full  mt-[10.5px] ml-[10.5px] ">
                                <h2 className="text-[10pt] font-semibold text-slate-400 truncate ...">Bài hát</h2>
                            </div>
                            <div className="h-full  mt-[10.5px] ml-[51%] ">
                                <h2 className="text-[10pt] font-semibold text-slate-400 truncate ...">Album</h2>
                            </div>
                            <div className="h-full  mt-[10.5px] ml-[30%]  mr-[45.5px]">
                                <h2 className="text-[10pt] font-semibold text-slate-400 truncate ...">Thời gian</h2>
                            </div>
                        </div>
                        <div>
                            {
                                itemsHotSongs.map((item, index) => {
                                    return (
                                        <div className='relative group h-[60px] hover:bg-[#406882] flex w-full rounded-[5px] items-center ' key={index}>
                                            <MusicNoteIcon />
                                            <img className=' ml-2 mr-2 object-cover h-[65%] rounded-[5px] cursor-pointer group-hover:brightness-[60%]' src={item.thumbnailM} />
                                            <div className=' w-[50%]'>
                                                <div className='text-[11pt] font-bold cursor-pointer hover:text-[rgb(204,116,191)]' onClick={() => createInfoAudio(item.encodeId)}>
                                                    {item.title}
                                                </div>
                                                <div className='text-[10pt] font-semibold text-slate-400'>
                                                    {item.artists.map((artist, j) => {
                                                        if (j < 3) {

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
                                                        }
                                                        else
                                                            return null
                                                    })}
                                                </div>
                                            </div>
                                            <div className="">
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