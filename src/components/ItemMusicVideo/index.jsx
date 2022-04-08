import Switch from '@material-ui/core/Switch';
import logo from '../../assets/logo.png'
import style from './ItemMusicVideo.module.css'
import clsx from 'clsx';
import React, { useState,useEffect } from 'react';
import ZingAPI from "../../context/zing.context";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';
import CustomSwitch from '../CustomSwitch';
import { Link } from 'react-router-dom';

const api = new ZingAPI();

const ItemMusicVideo = ({ props }) => {
    const { recommendMV} = props

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

            <SimpleBar style={{ height: '440px', color: '#ffff' }}>
                <div className=''>
                    {recommendMV.map((item, index) => (
                        <div className='flex  items-center	my-2 cursor-pointer' key={index}>
                            <a href={'/music-video/' + item.encodeId} key={index} >
                                <img src={item.thumbnailM} alt="" className=' w-[120px] rounded-xl mr-2' />
                            </a>
                            <div>
                                <p>{item.title}</p>
                                <p className='text-[13px] text-sky-900'>{item.artistsNames}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SimpleBar>


        </>

    )
}


export default ItemMusicVideo;