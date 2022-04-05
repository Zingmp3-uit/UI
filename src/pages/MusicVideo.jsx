import avatar from '../assets/avatar.png'
import { useState } from 'react'
// mui, npm package
import Switch from '@material-ui/core/Switch';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import YouTube from 'react-youtube';
// component child
import ItemMusicVideo from '../components/ItemMusicVideo';
import ItemVideo from '../components/ItemVideo'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const MusicVideo = () => {
    const [idVideo, setIdVideo] = useState('j5A461KptQ0')



    return (
        <div style={{ backgroundColor: '#170f23' }}>
            <div className='flex justify-between w-full p-5 '>
                <div className='flex items-center'>
                    <img src={avatar} alt="" height='100px' className='rounded-full w-12' />
                    <div className='mx-2'>
                        <p>Túp lều vàng</p>
                        <p>Nguyễn đình vũ</p>
                    </div>
                    <span className='border-solid border-2 rounded-full border-zinc-700 p-2 mx-2'>
                        <FavoriteBorderIcon />
                    </span>
                    <span className='border-solid border-2 rounded-full border-zinc-700 p-2 mx-2'>
                        <MusicNoteIcon />
                    </span>
                    <span className='border-solid border-2 rounded-full border-zinc-700 p-2 mx-2'>
                        <MoreHorizIcon />
                    </span>
                </div>
                <div className='flex items-center'>
                    <span className='border-solid border-2 rounded-full border-zinc-700 p-2'>
                        <CloseIcon />
                    </span>
                </div>
            </div>
            <div className='p-4 '>
                <div className='grid grid-cols-4 h-full'>
                    <div className='col-span-3 p-4 h-[500px]'>
                        <iframe
                            style={{ borderRadius: '10px' }}
                            className='h-full w-full'
                            src={`https://www.youtube.com/embed/${idVideo}?autoplay=1&enablejsapi=0&modestbranding=1&rel=0`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                    <div className='col-span-1 p-2  w-full h-[500px]'>
                        <ItemMusicVideo idVideo={idVideo} setIdVideo={setIdVideo} />
                    </div>
                </div>
            </div>
            <div>
                <ItemVideo />
            </div>
            <br />
            <div>
                <AudioPlayer
                    autoPlay
                    src={'https://vnso-zn-23-tf-mp3-s1-m-zmp3.zadn.vn/ea859fb645f2acacf5e3/2153293163773944052?authen=exp=1649319583~acl=/ea859fb645f2acacf5e3/*~hmac=178f8c944edd204ec6aff0f783bc6d10&fs=MTY0OTE0NjmUsIC4MzMyMHx3ZWJWNHwxMTMdUngMTYxLjY2LjEwMA'}
                    onPlay={e => console.log("onPlay")}
                // other props here
                />
            </div>
            <div>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
            </div>

        </div>
    )
}

export default MusicVideo;