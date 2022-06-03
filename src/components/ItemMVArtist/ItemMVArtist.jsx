import React from 'react';
//MUI
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function ItemMVArtist(props) {
    const mvsList = props.mvsList;

    return (
    <div className='pt-[1.5%] grid grid-cols-3 gap-[4%]'>
    {
        mvsList.map((item, index) => {
            return (
                <div className='w-full h-full'>
                    <div className='relative group rounded-[10px] overflow-hidden cursor-pointer'>
                        <a href={"/music-video/" + item.encodeId}>
                            <img className='group-hover:scale-110 group-hover:brightness-50 duration-500 object-cover rounded-[10px]' src={item.thumbnailM}> 
                            </img>

                            <div className="absolute p-[8px] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:flex flex-row justify-around items-center">
                                <div className="w-12 h-12 flex items-center justify-center border rounded-full">
                                    <PlayArrowIcon></PlayArrowIcon>
                                </div>                                                                
                            </div>  
                        </a>                         
                    </div>
                    <div className='pt-[2%] font-bold text-[12pt] truncate ... hover:text-[#B1D0E0] hover:cursor-pointer'>
                        <a href={"/music-video/" + item.encodeId}>
                            {item.title}
                        </a>
                    </div>

                    <div className='pt-[2%] text-slate-400 font-semibold text-[11pt]'>
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
            )
        })
    }     
    </div>
    )
}

export default ItemMVArtist