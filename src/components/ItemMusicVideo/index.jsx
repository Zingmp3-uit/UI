import Switch from '@material-ui/core/Switch';
import logo from '../../assets/logo.png'
import style from './ItemMusicVideo.module.css'
import clsx from 'clsx';
import React, { useState } from 'react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';
import CustomSwitch from '../CustomSwitch';


const ItemMusicVideo = ({setIdVideo,idVideo}) => {

    const [itemMusic, setItemMusic] = useState([
        {
            id_avatar_url: 'j5A461KptQ0',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: '7uRvS3tfyOE',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: '7MpCtnKYv9c',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: '0t8FomXzakE',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: 'D--95BHAA5I',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: '0t8FomXzakE',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: 'Gw4nYIMJ3VM',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
    ])
  
    return (
        <>
            <div className='flex justify-between'>
                <p className='flex items-center'>Danh sách phát</p>
                <div className='flex items-center'>
                    <p>Tự động phát</p>
                    <div>
                        <CustomSwitch
                            defaultChecked
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </div>
                </div>
            </div>

            <SimpleBar style={{ height: '420px', color: '#ffff' }}>

                <div className='grid grid-cols-5'>
                    {itemMusic.map((item, index) => (
                        <>
                            <div className={clsx('col-span-2 p-1', style.item)} key={index} onClick={()=>setIdVideo(item.id_avatar_url)}>
                                <img src={`https://img.youtube.com/vi/${item.id_avatar_url}/sddefault.jpg`} alt="" className='h-full w-full rounded-xl' />
                            </div>
                            <div className={clsx('col-span-3 p-1 flex flex-col justify-center')}>
                                <p>{item.name}</p>
                                <p>{item.singer}</p>
                            </div>
                        </>
                    ))}
                </div>
            </SimpleBar>


        </>

    )
}


export default ItemMusicVideo;