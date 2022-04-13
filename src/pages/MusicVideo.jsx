import ZingAPI from "../context/zing.context";
import avatar from '../assets/avatar.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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

const api = new ZingAPI();


const MusicVideo = () => {
    const [dataMV, setDataMV] = useState('')
    const [recommendMV, setRecommendMV] = useState([])
    const [urlVideo, setUrlVideo] = useState('')

    useEffect(async () => {
        await api.getVideo(window.location.pathname.split('/')[2]).then((data) => {
            let list = data.data.data
            console.log(list, list.streaming.mp4['720p']);
            setDataMV(list)
            setRecommendMV(list.recommends)
            setUrlVideo(list.streaming.mp4['720p'])
        })
    }, [window.location.href])


    return (
        <div style={{ backgroundColor: '#170f23' }}>
            <div className='flex justify-between w-full p-5 px-10 '>
                <div className='flex items-center'>
                    <img src={dataMV.artist?.thumbnail} alt="" className='rounded-full h-[60px] w-[60px] ' />
                    <div className='mx-2'>
                        <p className="text-[20px] font-semibold">{dataMV.title}</p>
                        <p className='text-[13px]'>
                            {dataMV.artists ? dataMV.artists.map((artist, i) => (
                                <span key={i} className='text-sky-900 cursor-pointer hover:text-[rgb(204,116,191)]'>
                                    <Link to='' >{artist.name}</Link>
                                    {i !== dataMV.artists.length - 1 ? <span className='text-sky-900 cursor-pointer hover:text-[rgb(204,116,191)] mr-[5px]'>,</span> : null}
                                </span>
                            )) : null}
                        </p>
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
            <div className='px-4 '>
                <div className='grid grid-cols-4 h-full'>
                    <div className='col-span-3 p-4 h-[500px]'>
                        <iframe
                            width="400" height="315"
                            className='h-full w-full border-[1px] border-slate-500'
                            src={urlVideo}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <div className='col-span-1 p-2  w-full h-[500px]'>
                        <ItemMusicVideo props={{ recommendMV }} />
                    </div>
                </div>
            </div>
            <div>
                <ItemVideo props={{ recommendMV }} />
            </div>
        </div>
    )
}

export default MusicVideo;