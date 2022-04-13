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
            <div className="w-full h-1/2 bg-cover bg-no-repeat bg-cover_nhac_viet">
            </div>

            <div className='absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col container mx-auto w-[90%] h-full'>
                <h1 className='text-white text-[16pt] font-bold'>        
                    Nổi Bật
                </h1>

                <div className='pt-[1.5%] grid grid-cols-4 gap-[4%]'> 
                {
                    itemHighlights.map((item, index) => {
                        return (
                            <div className='w-[100.5%] h-full'>
                                <div className='relative group rounded-[3%] overflow-hidden'>
                                    <img className='group-hover:scale-110 group-hover:brightness-50 duration-500 object-cover rounded-[3%]' src={item.thumb}>
                                    </img>

                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                                        <div className="p-[35%] items-center justify-center">
                                            <div className='pt-[18%] pl-[20%] h-12 w-12 border rounded-full'>
                                                <PlayArrowIcon></PlayArrowIcon>
                                            </div>
                                        </div>
                                        <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>                                       
                                    </div>                             
                                </div>

                                <div className='pt-[1.3%] font-bold text-[12pt]'>
                                    {item.title}
                                </div>

                                <div className='pt-[1.3%] text-zinc-500 font-semibold text-[10pt]'>
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