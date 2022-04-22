import React, { useEffect, useState } from 'react'
//API
import ZingAPI from "../../context/zing.context";
//MUI
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
//Components
import AlbumLoader from "../../components/SkeletonLoader/AlbumLoader";
import SongLoader from "../../components/SkeletonLoader/SongLoader";

const Category = () => {
    const api = new ZingAPI();

    const[itemsTopSuggest, setItemsTopSuggest] = useState([]);

    const[itemsHotSongs, setItemsHotSongs] = useState([]);

    const getapi = async () => {
        await api.search("Nhạc Việt").then(res => {
            const randomItemsTopSuggest = shuffle(res.data.data.topSuggest).slice(0, 4);
            setItemsTopSuggest(randomItemsTopSuggest);
            console.log(res);
        });

        await api.getChartHome().then(res => {
            setItemsHotSongs(res.data.data.weekChart.vn.items.slice(0, 15));
            console.log(res);
        });
    } 

    function shuffle(arr) {
        var j, x, index;
        for (index = arr.length - 1; index > 0; index--) {
            j = Math.floor(Math.random() * (index + 1));
            x = arr[index];
            arr[index] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    function convertDuration(duration) {
        var min = Math.floor(duration / 60);
        let res;
        min < 10 ? res = 0 + min.toString() : res = min.toString();
        var sec = duration - min * 60;
        sec < 10 ? res = res + ":" + 0 + sec.toString() : res = res + ":" + sec.toString();
        return res;
    }

    useEffect(async () => {
        getapi();
    }, []);

    return (
        <div className='relative w-full h-screen'>
            <div className="w-full h-1/2 bg-cover bg-no-repeat bg-cover_nhac_viet">
            </div>

            <div className='absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col container mx-auto w-[90%] h-full'>
                <h1 className='text-white text-[16pt] font-bold'>        
                    Nổi Bật
                </h1>
                                                       
                {
                    itemsTopSuggest.length == 0 || itemsHotSongs.length == 0 ?
                    <div>
                        <div className='pt-[1.5%] grid grid-cols-4 gap-[4%]'> 
                            <AlbumLoader></AlbumLoader>
                            <AlbumLoader></AlbumLoader>
                            <AlbumLoader></AlbumLoader>
                            <AlbumLoader></AlbumLoader>                 
                        </div>

                        <div className='pt-[30%]'>
                            <h1 className='text-white text-[16pt] font-bold'>        
                                Nghe Nhiều Trong Tuần
                            </h1>

                            <div className='pt-[3%] grid grid-cols-3 grid-rows-5 gap-y-[15%] gap-x-[3%]'> 
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                                <SongLoader></SongLoader>
                            </div>

                            <div className='pt-[18%]'>
                            </div>     
                        </div>                   

                    </div>
                    :
                    <div>
                        <div className='pt-[1.5%] grid grid-cols-4 gap-[4%]'>
                        {
                            itemsTopSuggest.map((item, index) => {
                                return (
                                    <div className='w-full h-full'>
                                        <div className='relative group rounded-[3%] overflow-hidden'>
                                            <img className='group-hover:scale-110 group-hover:brightness-50 duration-500 object-cover rounded-[3%]' src={item.thumbnailM}>
                                            </img>

                                            <div className="absolute p-[8px] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                                                <div className="w-12 h-12 flex items-center justify-center border rounded-full">
                                                    <PlayArrowIcon></PlayArrowIcon>
                                                </div>
                                                <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>                                       
                                            </div>                             
                                        </div>

                                        <div className='pt-[2%] font-bold text-[12pt] hover:text-[#B1D0E0] hover:cursor-pointer'>
                                            {item.title}
                                        </div>

                                        <div className='pt-[2%] text-slate-400 font-semibold text-[11pt]'>
                                            <a className='hover:text-[#B1D0E0] hover:underline hover:cursor-pointer'>
                                                {item.artists[0].spotlight == true ? item.artists[0].name + "★" : item.artists[0].name} 
                                            </a>
                                            <a>, </a>
                                            <a className='hover:text-[#B1D0E0] hover:underline hover:cursor-pointer'>
                                                {item.artists[1].spotlight == true ? item.artists[1].name + "★" : item.artists[1].name}
                                            </a>
                                            <a>, </a>
                                            <a className='hover:text-[#B1D0E0] hover:underline hover:cursor-pointer'>
                                                {item.artists[2].spotlight == true ? item.artists[2].name + "★" : item.artists[2].name}
                                            </a>
                                            <a>...</a>
                                        </div>
                                    </div>
                                )
                            })
                        }     
                        </div>

                        <div className='pt-[5%]'>
                            <h1 className='text-white text-[16pt] font-bold'>        
                                Nghe Nhiều Trong Tuần
                            </h1>

                            <div className='pt-[3%] w-full h-full grid grid-cols-3 grid-rows-5 gap-y-[15%] gap-x-[3%]'>
                            {
                                itemsHotSongs.map((item, index) => {
                                    return(
                                        <div className='relative group h-[60px] hover:bg-[#406882] flex w-full rounded-[5px]'>
                                            <img className='mt-[10.5px] ml-[10.5px] object-cover h-[65%] rounded-[5px] cursor-pointer group-hover:brightness-[60%]' src={item.thumbnailM}>
                                            </img>

                                            <div className="absolute left-[30px] top-[50%] translate-y-[-50%] translate-x-[-50%] hidden group-hover:flex hover:brightness-[90%] cursor-pointer flex-row justify-around items-center">
                                                <PlayArrowIcon></PlayArrowIcon>
                                            </div>

                                            <div className='h-full w-[50%] mt-[10.5px] ml-[10.5px] mb-[10.5px]'>
                                                <div className='text-[11pt] font-bold  truncate ...'>
                                                    {item.title}
                                                </div>

                                                <div className='text-[10pt] font-semibold text-slate-400 truncate ...'>
                                                    <a className='hover:underline hover:text-[#B1D0E0] cursor-pointer'>
                                                    {item.artists[0].spotlight == true ? item.artists[0].name + "★" : item.artists[0].name}
                                                    </a>
                                                    {
                                                        item.artists.length == 1 ? ""
                                                        :
                                                        <>
                                                        <a>, </a>
                                                        <a className='hover:underline hover:text-[#B1D0E0] cursor-pointer'>
                                                        {item.artists[1].spotlight == true ? item.artists[1].name + "★" : item.artists[1].name}
                                                        </a>
                                                        </>
                                                    }
                                                </div>
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

                            <div className='pt-[18%]'>
                            </div>    
                        </div>                                            
                    </div>
                }                               
            </div>
        </div>
    )
}

export default Category;