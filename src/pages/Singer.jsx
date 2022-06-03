
import React, { useEffect, useState, useContext } from 'react'
//API
import ZingAPI from "../context/zing.context";
//MUI
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PeopleIcon from '@material-ui/icons/People';
//Components
import ItemAlbum from '../components/ItemAlbum/ItemAlbum';
import SingerLoader from '../components/SkeletonLoader/SingerLoader';
import ItemMVArtist from '../components/ItemMVArtist/ItemMVArtist';
import { MusicContext } from '../App';
//Others
import { useParams } from "react-router-dom";

const Singer = () => {
    const param = useParams();

    const api = new ZingAPI();

    const [info, setInfo] = useState([]);

    const [songs, setSongs] = useState([]);

    const [singles_EPs, setSingles_EPs] = useState([]);

    const [albums, setAlbums] = useState([]);

    const [MVs, setMVs] = useState([]);

    const { createInfoAudio } = useContext(MusicContext);

    const getapi = async () => {
        await api.getArtist(param.alias).then(res => {
            console.log(res);
            setInfo(res.data);
        });

        await api.getArtist(param.alias).then(res => {
            var sections = res.data.sections;

            setSongs(sections[0].items);

            for (var i = 1; i < sections.length; i++) {
                if (sections[i].title == "Single & EP") {
                    setSingles_EPs(sections[i].items.slice(0, 4));
                }

                if (sections[i].title == "Album") {
                    setAlbums(sections[i].items.slice(0, 4));
                }

                if (sections[i].title == "MV") {
                    setMVs(sections[i].items.slice(0, 3));
                }
            }
        });
    }

    useEffect(async () => {
        getapi();
    }, [window.location.href]);

    function abbreviateNumber(value) {
        var newValue = value;
        if (value >= 1000) {
            var suffixes = ["", "K", "M", "B", "T"];
            var suffixNum = Math.floor(("" + value).length / 3);
            var shortValue = '';
            for (var precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
                var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
                if (dotLessShortValue.length <= 2) { break; }
            }
            if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
            newValue = shortValue + suffixes[suffixNum];
        }
        return newValue;
    }

    function convertDuration(duration) {
        var min = Math.floor(duration / 60);
        let res;
        min < 10 ? res = 0 + min.toString() : res = min.toString();
        var sec = duration - min * 60;
        sec < 10 ? res = res + ":" + 0 + sec.toString() : res = res + ":" + sec.toString();
        return res;
    }

    var randomSongNum = Math.floor(Math.random() * songs.length);

    var randomEncodeId;

    for (var i = 0; i < songs.length; i++) {
        if (randomSongNum == i) {
            randomEncodeId = songs[i].encodeId;
        }
    }

    function convertSingleToSong(singleTitle) {
        if (singles_EPs.length != 0) {
            for (var i = 0; i < songs.length; i++) {
                if (singleTitle.includes(songs[i].title)) {
                    createInfoAudio(songs[i].encodeId);
                }
            }
        }
    }

    function playPlaylist() {
        createInfoAudio(songs[Math.floor(Math.random() * songs.length)].encodeId);
    }

    function displaySections() {
        return (
            <div className='absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col container mx-auto w-[90%] h-full'>
                {
                    songs.length == 0 ? ""
                    :
                    <div className='pt-[5%]'>
                        <h1 className='text-white text-[16pt] font-bold'>
                            Bài Hát Nổi Bật
                        </h1>
                        <div className='relative mt-[1.5%] w-full h-[250px]'>
                            <div className='absolute w-[250px] h-full'>
                                <img className='w-full h-full scale-[90%] rounded-[3%] hover:brightness-50 cursor-pointer' src={songs[randomSongNum].thumbnailM} onClick={() => createInfoAudio(randomEncodeId)}>
                                </img>
                            </div>

                            <div className='absolute right-0 w-[70%] h-full overflow-auto ...'>
                                <div className='absolute w-full h-full grid grid-cols-1 gap-y-0'>
                                {
                                    songs.map((item, index) => {
                                        return(
                                            <div className='relative group h-[62.5px] hover:bg-[#406882] flex w-full rounded-[5px] cursor-pointer' key={index} onClick={() => createInfoAudio(item.encodeId)}>
                                                <img className='mt-[10.5px] ml-[10.5px] object-cover h-[65%] rounded-[5px] cursor-pointer group-hover:brightness-[60%]' src={item.thumbnailM}>
                                                </img>

                                                <div className="absolute left-[30px] top-[50%] translate-y-[-50%] translate-x-[-50%] hidden group-hover:flex hover:brightness-[90%] flex-row justify-around items-center">
                                                    <PlayArrowIcon></PlayArrowIcon>
                                                </div>

                                                <div className='h-full w-[50%] mt-[10.5px] ml-[10.5px] mb-[10.5px]'>
                                                    <div className='text-[11pt] font-bold  truncate ...'>
                                                        {item.title}
                                                    </div>

                                                    <div className='text-[10pt] font-semibold text-slate-400 truncate ...'>
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

                                                <div className="absolute right-[45.5px] top-[50%] translate-y-[-50%] translate-x-[100%] flex-row font-semibold text-[10pt] text-slate-400">
                                                {
                                                    convertDuration(item.duration)
                                                }
                                                </div>                                            
                                            </div>
                                        )
                                    })
                                }                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                }

                <div className='pt-[3%]'>
                    {
                        singles_EPs.length == 0 ? ""
                        :
                        <h1 className='text-white text-[16pt] font-bold'>
                            Single & EP
                        </h1>
                    }

                    <ItemAlbum
                        albumsList={singles_EPs}
                        isSubtitleClickable={false}
                    >
                    </ItemAlbum>                    
                </div>

                <div className='pt-[3%]'>
                    {
                        albums.length == 0 ? ""
                            :
                            <h1 className='text-white text-[16pt] font-bold'>
                                Album
                            </h1>
                    }

                    <ItemAlbum
                        albumsList={albums}
                        isSubtitleClickable={false}
                    >
                    </ItemAlbum>
                </div>

                <div className='pt-[3%]'>
                    {
                        MVs.length == 0 ? ""
                            :
                            <h1 className='text-white text-[16pt] font-bold'>
                                MV
                            </h1>
                    }

                    <ItemMVArtist
                        mvsList={MVs}
                    >
                    </ItemMVArtist>
                </div>

                <div>
                    <div className='w-full h-[200px]'>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div className='relative w-full h-screen mb-4'>
            <div className='relative w-full h-1/2 bg-[#406882]'>
                <img className='absolute w-full h-full object-cover mix-blend-multiply blur-xs' src={info.thumbnailM}></img>

                <div className='w-[90%] h-[8%] mx-auto'>
                </div>

                {
                    info.length == 0 ? <SingerLoader></SingerLoader>
                        :
                        <div className='relative w-[90%] h-[83%] mx-auto'>
                            <div className='absolute w-[65%] h-full'>
                                <div className='text-4xl font-black truncate ...'>
                                    {info.name}
                                </div>

                                <div className='h-[10px]'></div>

                                <div className='text-base font-semibold line-clamp-2'>
                                    {info.sortBiography}
                                </div>

                                <div className='h-[5px]'></div>

                                <div className='relative w-[70%] h-1/4 overflow-hidden'>
                                    <div className='absolute top-[15%] w-[47.5%] h-[70%] bg-[#6998AB] hover:bg-[#406882] active:bg-[#1A374D] cursor-pointer rounded-full' onClick={playPlaylist}>
                                        <div className='flex w-full h-full justify-center items-center text-sm font-semibold truncate ...'>
                                            <PlayArrowIcon></PlayArrowIcon>

                                            <div className='w-[5px]'></div>

                                            PHÁT NHẠC
                                        </div>
                                    </div>

                                    <div className='absolute right-[0%] top-[15%] w-[47.5%] h-[70%]'>
                                        <div className='flex w-full h-full justify-center items-center text-sm font-semibold truncate ...'>
                                            <PeopleIcon></PeopleIcon>

                                            <div className='w-[5px]'></div>

                                            {abbreviateNumber(info.follow)} NGƯỜI QUAN TÂM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img className='absolute right-0 h-full object-cover rounded-full' src={info.thumbnailM}>
                            </img>

                            {
                                singles_EPs.length == 0 ? ""
                                    :
                                    <div className='absolute bottom-0 h-[28%] w-[60%] overflow-hidden'>
                                        <div className='group cursor-pointer' onClick={() => convertSingleToSong(singles_EPs[0].title)}>
                                            <img className='absolute h-full object-cover rounded-[5px] group-hover:brightness-50' src={singles_EPs[0].thumbnailM}>
                                            </img>

                                            <div className='absolute top-[50%] left-[30px] translate-y-[-50%] translate-x-[-50%] hidden group-hover:flex hover:brightness-[90%] cursor-pointer flex-row justify-around items-center'>
                                                <PlayArrowIcon></PlayArrowIcon>
                                            </div>
                                        </div>

                                        <div className='absolute right-0 h-full w-[85%]'>
                                            <div className='absolute w-full text-[8pt] font-bold truncate ...'>
                                                MỚI NHẤT
                                            </div>

                                            <div className='absolute w-full top-[32%] text-[12pt] font-bold truncate ...'>
                                                {singles_EPs[0].title}
                                            </div>

                                            <div className='absolute w-full bottom-0 text-[8pt] font-bold text-slate-300 truncate ...'>
                                                {singles_EPs[0].releaseDate}
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                }
            </div>

            <div className='w-[90%] h-full mx-auto'>
            {
                displaySections()
            }
            </div>
        </div>

    )
}

export default Singer;