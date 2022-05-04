
import React, { useEffect, useState } from 'react'
//API
import ZingAPI from "../context/zing.context";
//MUI
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PeopleIcon from '@material-ui/icons/People';
//Components
import ItemAlbum from '../components/ItemAlbum/ItemAlbum';
import SingerLoader from '../components/SkeletonLoader/SingerLoader';
//Others
import { useParams } from "react-router-dom";

const Singer = () => {
    const param = useParams();

    const api = new ZingAPI();

    const[info, setInfo] = useState([]);

    const[songs, setSongs] = useState([]);

    const[singles_EPs, setSingles_EPs] = useState([]);

    const[albums, setAlbums] = useState([]);

    const[MVs, setMVs] = useState([]);

    const getapi = async () => {
        await api.getArtist(param.alias).then(res => {
            console.log(res);
            setInfo(res.data.data);
        });

        await api.getArtist(param.alias).then(res => {
            var sections = res.data.data.sections;

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
    }, []);

    function abbreviateNumber(value) {
        var newValue = value;
        if (value >= 1000) {
            var suffixes = ["", "K", "M", "B","T"];
            var suffixNum = Math.floor( (""+value).length/3 );
            var shortValue = '';
            for (var precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
                var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
                if (dotLessShortValue.length <= 2) { break; }
            }
            if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
            newValue = shortValue+suffixes[suffixNum];
        }
        return newValue;
    }

    function displaySections() {
        return(
            <div>
                <div>
                </div>

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

                <div>
                {
                    MVs.map((item, index) => {
                        return(
                            <div>
                                "MV"
                                {item.title}
                            </div>
                        )
                    })                      
                }
                </div>                                
            </div>
        )

    }

    return (
        <div className='relative w-full h-screen'>
            <div className='relative w-full h-1/2 bg-[#406882]'>
                <img className='absolute w-full h-full object-cover mix-blend-multiply blur-xl' src={info.thumbnailM}></img>

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
                                <div className='absolute top-[15%] w-[47.5%] h-[70%] bg-[#6998AB] rounded-full'>
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
                                <img className='absolute h-full object-cover rounded-[5px]' src={singles_EPs[0].thumbnailM}>
                                </img>

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

            <div>
            {
                displaySections()
            }    
            </div>
        </div>

    )
}

export default Singer;