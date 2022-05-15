import React from 'react'
import SkeletonLoading2 from '../../assets/skeleton_loading_2.png';

function SingerLoader() {
  return (
    <div className='relative w-[90%] h-[83%] mx-auto'>
        <div className='absolute w-[65%] h-full'>
            <div className='h-[10%] w-[30%] bg-[#6998AB] rounded-full animate-pulse'>
            </div>
            
            <div className='h-[10px]'></div>

            <div className='h-[5%] w-full bg-[#6998AB] rounded-full animate-pulse'>
            </div>

            <div className='mt-[5px] h-[5%] w-[80%] bg-[#6998AB] rounded-full animate-pulse'>
            </div>

            <div className='h-[5px]'></div>
            
            <div className='relative w-[70%] h-1/4 overflow-hidden'>
                <div className='absolute top-[15%] w-[47.5%] h-[70%] bg-[#6998AB] rounded-full animate-pulse'>
                </div>
            </div>                     
        </div>

        <img className='absolute right-0 h-full object-cover rounded-full animate-pulse' src={SkeletonLoading2}>
        </img>                      
    </div>                 
  )
}

export default SingerLoader