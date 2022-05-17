import React from 'react'
//MUI
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

function ItemArtists(props) {
    const artistList = props.artistList;
    //const isSubtitleClickable = props.isSubtitleClickable;

    return (
        <div className='pt-[1.5%] grid grid-cols-4 gap-[4%]'>
            {
                artistList.map((item, index) => {
                    return (
                        <div className='w-full h-full'>
                            <div className='relative group rounded-[3%] overflow-hidden'>
                                <img className='group-hover:scale-110 group-hover:brightness-50 duration-500 object-cover rounded-full' src={item.thumbnailM}>
                                </img>

                                <div className="absolute p-[8px] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">

                                    <div className="w-12 h-12 flex items-center justify-center border rounded-full">
                                        <ShuffleRoundedIcon></ShuffleRoundedIcon>
                                    </div>

                                </div>
                            </div>

                            <div className='pt-[2%] font-bold text-[12pt] text-center  truncate ... hover:text-[#B1D0E0] hover:cursor-pointer'>
                                {item.name}
                            </div>
                            <div className='pt-[2%] font-bold text-[9pt] text-center  truncate ... hover:text-[#B1D0E0] hover:cursor-pointer'>
                                {(item.totalFollow % 1000) + 'K quan tâm'}
                            </div>
                            <div className=' bg-[#6998AB] justify-center w-[60%] hover:bg-[#406882] rounded-full mt-[10%] ml-[20%]'>
                                <div className='flex w-full h-full justify-center  items-center text-sm font-semibold py-2'>
                                    Quan tâm
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemArtists