import { useState, useEffect, useCallback, useContext } from 'react';
import avatar from '../../../assets/avatar.png'
import ZingAPI from "../../../context/zing.context";

import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PublishIcon from '@material-ui/icons/Publish';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MovieIcon from '@material-ui/icons/Movie';
import debounce from 'lodash.debounce';
import { MusicContext } from '../../../App'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { createInfoAudio } = useContext(MusicContext)
    const api = new ZingAPI();

    const [text, setText] = useState('');

    const [artists, setArtists] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [videos, setVideos] = useState([]);

    const handleSearch = async (content) => {
        if (content && content.length > 2) {


            let list = (await api.search(String(content))).data
            console.log(list);

            setArtists(list.artists);
            setPlaylists(list.playlists);
            setSongs(list.songs);
            setVideos(list.videos);



        }
    }
    const changeHandler = async (e) => {
        console.warn('searching...: ', e.target.value);
        let content = e.target.value;
        if (content && content.length > 2) {
            let list = (await api.search(String(content))).data
            console.log(list);

            setArtists(list.artists);
            setPlaylists(list.playlists);
            setSongs(list.songs);
            setVideos(list.videos);
        }
        else if (content.length === 0) {
            setArtists([]);
            setPlaylists([]);
            setSongs([]);
            setVideos([]);
        }
    };
    const debouncedChangeContent = useCallback(
        debounce(changeHandler, 1000)
        , []);

    useEffect(() => {
        setText('');

        setArtists([]);
        setPlaylists([]);
        setSongs([]);
        setVideos([]);
    }, [window.location.href])


    return (
        <div className='fixed top-0 right-0 left-[200px] shadow-xl h-[60px]  bg-[#406882] text-white flex items-center justify-between px-4 z-10'>
            <div className='flex items-center w-[70%]'>
                <ArrowBackIcon className='rounded-full hover:bg-[#1A374D] p-1 mx-1' style={{ fontSize: '40px' }} />
                <ArrowForwardIcon className='rounded-full hover:bg-[#1A374D] p-1 mx-1' style={{ fontSize: '40px' }} />
                <div className='w-full relative group'>
                    <div className='bg-[#1A374D]  rounded-3xl px-2 flex items-center group-focus-within:rounded-b-sm group-focus-within:bg-[#5596c9]'>
                        <SearchIcon />
                        <input
                            type="text"
                            className='bg-transparent w-full m-2'
                            style={{ outline: 'none' }}
                            placeholder='Nhập tên bài hát, nghệ sĩ, hoặc MV ...'
                            value={text}
                            onChange={e => setText(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    debouncedChangeContent(e)
                                }
                            }}
                        />
                        <div className='w-full absolute top-10 right-0 left-0 bg-[#1A374D]  hidden  group-focus-within:block group-focus-within:bg-[#5596c9]'>
                            <p className='my-2 mx-2 text-lg font-semibold cursor-pointer'>Các kết quả phù hợp</p>
                            {artists && artists.length > 0 ?
                                artists.map((artist, index) => {
                                    if (artist.thumbnailM.indexOf('default') === -1 && index < 2) {
                                        return (
                                            <Link to={'/' + artist.alias} className='flex items-center justify-between my-1 hover:bg-[#406882] py-1'>
                                                <div className='flex items-center'>
                                                    <img src={artist.thumbnailM} alt="" className='w-8 rounded-full mx-2' />
                                                    <span>{artist.name}</span>
                                                </div>
                                                <AccountCircleIcon className='w-8 mx-2' />
                                            </Link>
                                        )
                                    }
                                    else
                                        return null;
                                })
                                : null
                            }
                            {playlists.map((playlist, index) => {
                                if (playlist.thumbnailM.indexOf('default') === -1 && index < 2) {
                                    return (
                                        <Link to={'../' + playlist.link.split('.html')[0]} className='flex items-center justify-between my-1 hover:bg-[#406882] py-1'>
                                            <div className='flex items-center'>
                                                <img src={playlist.thumbnailM} alt="" className='w-8 rounded-sm mx-2' />
                                                <span>{playlist.title}</span>
                                            </div>
                                            <AlbumIcon className='w-8 mx-2' />
                                        </Link>
                                    )
                                }
                                else
                                    return null;
                            })}
                            {songs.map((song, index) => {
                                if (song.thumbnailM.indexOf('default') === -1 && index < 3) {
                                    return (
                                        <div onClick={()=> createInfoAudio(song.encodeId)} className='flex items-center justify-between my-1 hover:bg-[#406882] py-1 cursor-pointer'>
                                            <div className='flex items-center'>
                                                <img src={song.thumbnailM} alt="" className='w-8 rounded-sm mx-2' />
                                                <span>{song.title}</span>
                                            </div>
                                            <MusicNoteIcon className='w-8 mx-2' />
                                        </div>
                                    )
                                }
                                else
                                    return null;
                            })}
                            {videos.map((video, index) => {
                                if (video.thumbnailM.indexOf('default') === -1 && index < 3) {
                                    return (
                                        <Link to={'/music-video/'+ video.encodeId} className='flex items-center justify-between my-1 hover:bg-[#406882] py-1'>
                                            <div className='flex items-center'>
                                                <img src={video.thumbnailM} alt="" className='w-8 rounded-sm mx-2' />
                                                <span>{video.title}</span>
                                            </div>
                                            <MovieIcon className='w-8 mx-2' />
                                        </Link>
                                    )
                                }
                                else
                                    return null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <PublishIcon className='rounded-full w-11 hover:bg-[#1A374D] p-1 mx-2  ' style={{ fontSize: '40px' }} />
                <SettingsIcon className='rounded-full w-11 hover:bg-[#1A374D] p-1 mx-2  ' style={{ fontSize: '40px' }} />
                <img src={avatar} alt="" className='rounded-full w-[40px] hover:bg-[#1A374D] mx-2' />
            </div>
        </div>
    )
}
export default Header;