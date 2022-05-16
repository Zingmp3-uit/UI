import React, { useState, useEffect } from 'react'
import ZingAPI from "../../context/zing.context";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
//import AlbumLoader from "../components/SkeletonLoader/AlbumLoader";
import ItemAlbum from '../../components/ItemAlbum/ItemAlbum';
import ItemArtists from '../../components/ItemArtists/ItemArtists';
const TopZing = () => {
    const api = new ZingAPI();
    const[itemsTop100AuMy, setItemsTop100AuMy] = useState([]);
    const[itemsTop100VietNam, setItemsTop100VietNam] = useState([]);
    const getapi = async () => {
        await api.getTop100().then(res => {
            //const randomItemsTop100 = ((res.data.data));
            //setItemsTop100Noibat(randomItemsTop100[0].items.slice(0,4));
            //console.log(res);
        });
        await api.getTop100().then(res => {
            const randomItemsTop100 = ((res.data));
            setItemsTop100VietNam(randomItemsTop100[1].items.slice(0,4));
            //console.log(itemsTop100Noibat);
        });
        await api.getTop100().then(res => {
            const randomItemsTop100AM = ((res.data));
            setItemsTop100AuMy(randomItemsTop100AM[3].items.slice(0,4));
            //console.log(itemsTop100Noibat);
        });
    }
    useEffect(async () => {
        getapi();
    }, []);
    return (
        <div>
        <div className="pt-[70px] pl-[60px] pr-[60px]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                    <h4 className="text-[18px] font-bold leading-9 mr-[16px] ">Nhạc Việt Nam</h4>
                </div>
                        
            </div>
            <div className="flex flex-row">
                <ItemAlbum 
                    albumsList={itemsTop100VietNam}
                    isSubtitleClickable={true}
                    >
                </ItemAlbum>
            </div>  
        </div>
        <div className="pt-[70px] pl-[60px] pr-[60px]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                    <h4 className="text-[18px] font-bold leading-9 mr-[16px] ">Nhạc Âu Mỹ</h4>
                </div>
                        
            </div>
            <div className="flex flex-row">
                <ItemAlbum 
                    albumsList={itemsTop100AuMy}
                    isSubtitleClickable={true}
                    >
                </ItemAlbum>
            </div>  
        </div>
        </div>
    )
    
}

export default TopZing;