import { useState } from 'react'
import logo from '../../assets/logo.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';



const ItemVideo = ({ props }) => {
    const { recommendMV } = props

    return (
        <div>
            <p className='px-9 font-bold text-[30px] my-6'>Các bài hát liên quan</p>
            <div className='grid grid-cols-4 px-9'>
                {
                    recommendMV.map((item, index) => (
                        <div className='w-full m-2  bg-[#170f23] px-5' key={index}>
                            <div className=' relative'>
                                <a href={'/music-video/' + item.encodeId}>
                                    <CardMedia
                                        component="img"
                                        alt="Click to see MV"
                                        height="100%"
                                        width="100%"
                                        image={item.thumbnailM}
                                        title="Contemplative Reptile"
                                        style={{ borderRadius: '5px' }}
                                    />
                                </a>
                                <span className='bg-[rgba(0,0,0,0.5)] px-1 rounded-md absolute bottom-0 right-[10px] text-white'>5:30</span>
                            </div>
                            <CardContent className='grid grid-cols-7  bg-[#170f23] text-white'>
                                <CardMedia
                                    component="img"
                                    style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                                    image={item.artist.cover}
                                    className='col-span-1 cursor-pointer'
                                />
                                <div className='col-span-6 ml-2'>
                                    <p style={{ fontSize: '17px', margin: '0' }} className='cursor-pointer hover:text-[rgb(204,116,191)]'>
                                        {item.title}
                                    </p>
                                    <p style={{ fontSize: '15px' }} className='text-sky-900		 cursor-pointer hover:text-[rgb(204,116,191)]'>
                                        {item.artists.map((artist, i) => (
                                            <span className='text-sky-900 cursor-pointer hover:text-[rgb(204,116,191)]'>
                                                <Link to='' >{artist.name}</Link>
                                                {i !== item.artists.length - 1 ? <span className='text-sky-900 cursor-pointer hover:text-[rgb(204,116,191)] mr-[5px]'>,</span> : null}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </CardContent>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemVideo;