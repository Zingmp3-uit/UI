import React from 'react'
//MUI
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

function ItemAlbum(props) {
    const albumsList = props.albumsList;
    const isSubtitleClickable = props.isSubtitleClickable;

    return (
    <div className='pt-[1.5%] grid grid-cols-4 gap-[4%]'>
    {
        albumsList.map((item, index) => {
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

                    <div className='pt-[2%] font-bold text-[12pt] truncate ... hover:text-[#B1D0E0] hover:cursor-pointer'>
                        {item.title}
                    </div>

                    {
                        isSubtitleClickable == true ?
                        <div className='pt-[2%] text-slate-400 font-semibold text-[11pt]'>
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
                        :
                        <div className='pt-[2%] text-slate-400 font-semibold text-[11pt]'>
                            {item.releaseDateText}
                        </div>
                    }
                </div>
            )
        })
    }     
    </div>
    )
}

export default ItemAlbum