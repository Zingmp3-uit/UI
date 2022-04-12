import React, { useState } from 'react'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const Category = () => {
    const[itemHighlights, setItemHighlights] = useState([
        {
            id: 1,
            title: "V-Pop 2022 Nghe Gì?",
            artists: "Hoàng Thùy Linh, AMEE, ERIK★...",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/1/c/4/31c4e51e9541df4b259c52c384335f21.jpg"
        },
        {
            id: 2,
            title: "Today's V-Pop Hits",
            artists: "MIN★, ERIK★, Hoàng Thùy Linh...",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/a/d/d/6add2c7faa4509922a4e8b4090fb83c0.jpg"
        },
        {
            id: 3,
            title: "Đỉnh Cao Trending",
            artists: "ERIK★, Jack, Hoàng Dũng...",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/5/e/6/55e6a6d866da0d1badf7b07de95af598.jpg"
        },
        {
            id: 4,
            title: "Women Of V-Pop",
            artists: "Hoàng Thùy Linh, Tóc Tiên, Đông Nhi...",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/d/6/9/6d691744b3560de085223bc0bae8f72f.jpg"
        },
    ])

    return (
        <div className='relative w-full h-screen'>
            <div className="w-full h-[290px] bg-cover bg-no-repeat bg-cover_nhac_viet">
            </div>

            <div className='absolute top-[540px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col container mx-auto w-[946px] h-full'>
                <h1 className='text-white text-[20px] font-bold'>        
                    Nổi Bật
                </h1>

                <div className='pt-[15px] grid grid-cols-4 gap-[34px]'> 
                {
                    itemHighlights.map((item, index) => {
                        return (
                            <div className='w-[211px] h-full'>
                                <div className='relative group w-[211px] h-[211px] rounded-[6px] overflow-hidden'>
                                    <img className='group-hover:scale-110 group-hover:brightness-50 duration-500 object-cover rounded-[6px]' src={item.thumb}>
                                    </img>

                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                                        <div className="p-8 items-center justify-center">
                                            <div className='pt-[10px] pl-[10px] h-[50px] w-[50px] border rounded-full'>
                                                <PlayArrowIcon></PlayArrowIcon>
                                            </div>
                                        </div>
                                        <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>                                       
                                    </div>                             
                                </div>

                                <div className='pt-[4px] font-bold text-[16px]'>
                                    {item.title}
                                </div>

                                <div className='pt-[4px] text-zinc-500 font-semibold text-[14px]'>
                                    {item.artists}
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