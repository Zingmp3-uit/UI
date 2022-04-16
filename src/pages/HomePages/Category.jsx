import React, { useEffect, useState } from 'react'
//API
import ZingAPI from "../../context/zing.context";
//MUI
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const Category = () => {
    const api = new ZingAPI();

    const[itemsTopSuggest, setItemsTopSuggest] = useState([]);

    const getapi = async () => {
        api.search("Nhạc Việt").then(res => {
            const randomItemsTopSuggest = shuffle(res.data.data.topSuggest).slice(0, 4);
            setItemsTopSuggest(randomItemsTopSuggest);
            console.log(randomItemsTopSuggest);
        })
    } 

    function shuffle (arr) {
        var j, x, index;
        for (index = arr.length - 1; index > 0; index--) {
            j = Math.floor(Math.random() * (index + 1));
            x = arr[index];
            arr[index] = arr[j];
            arr[j] = x;
        }
        return arr;
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

                <div className='pt-[1.5%] grid grid-cols-4 gap-[4%]'> 
                {
                    itemsTopSuggest.map((item, index) => {
                        return (
                            <div className='w-[100.5%] h-full'>
                                <div className='relative group rounded-[3%] overflow-hidden'>
                                    <img className='group-hover:scale-110 group-hover:brightness-50 duration-500 object-cover rounded-[3%]' src={item.thumbnailM}>
                                    </img>

                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                                        <div className="p-[40%] items-center justify-center">
                                            <div className='pt-[18%] pl-[20%] h-12 w-12 border rounded-full'>
                                                <PlayArrowIcon></PlayArrowIcon>
                                            </div>
                                        </div>
                                        <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>                                       
                                    </div>                             
                                </div>

                                <div className='pt-[2%] font-bold text-[12pt] hover:text-[#c662ef] hover:cursor-pointer'>
                                    {item.title}
                                </div>

                                <div className='pt-[2%] text-zinc-500 font-semibold text-[11pt]'>
                                {
                                    (item.artists[0].spotlight == true ? item.artists[0].name + "★" : item.artists[0].name) + ", " + (item.artists[1].spotlight == true ? item.artists[1].name + "★" : item.artists[1].name) + ", " + (item.artists[2].spotlight == true ? item.artists[2].name + "★" : item.artists[2].name) + "..."
                                }
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Category;