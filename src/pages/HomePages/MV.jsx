import { useEffect, useState } from "react";
import ZingAPI from "../../context/zing.context";
//mui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const api = new ZingAPI();

const MV = () => {
    const objSelectItem = [
        {
            index: 0,
            code: 'IWZ9Z08I'
        },
        {
            index: 1,
            code: 'IWZ9Z08O'
        },
        {
            index: 2,
            code: 'IWZ9Z08W'
        },
    ]
    const history = useNavigate();
    const [category, setCategory] = useState([]);
    const [mv, setMv] = useState([]);
    const [selectItem, setSelectItem] = useState(0);
    const [codeId, setCodeId] = useState(objSelectItem[0].code);

    // console.log(mv);
    useEffect(async () => {
        await api.getCategoryMV("IWZ9Z08I").then((data) => {
            setCategory(data.data.data.childs)
        })
        await api.getListMV(codeId, "1", "20").then((data) => {
            setMv(data.data.data.items)
        })
    }, [codeId])

    useEffect(async () => {
        let urlCodeId = objSelectItem.find(item => item.index === selectItem).code;
        history('/mv/' + urlCodeId)
    }, [selectItem])

    useEffect(async () => {
       setCodeId(window.location.pathname.split('/')[2])
    }, [window.location.pathname])

    const handleChangeSelectItem = (event, newValue) => {
        setSelectItem(newValue);
    };


    return (
        <div className="px-10 pt-5 ">
            <div className="flex mb-1">
                <p className="text-[30px] font-bold">MV </p>
                <span className="text-[30px] mx-2">|</span>
                <Tabs
                    value={selectItem}
                    onChange={handleChangeSelectItem}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="VIỆT NAM" />
                    <Tab label="US-UK" />
                    <Tab label="KPOP" />
                </Tabs>
            </div>
            <hr />
            <br />
            <span className="related">
                <span className=" rounded-[20px] bg-[#2a213a] py-1 px-3">
                    <QueueMusicIcon />
                    <span>Tất cả</span>
                </span>
                <div>
                    <p></p>
                </div>
            </span>
            <div className="grid grid-cols-3 mt-5 mx-8 ">
                {mv.map((item, index) => (
                    <div className='w-full m-2  bg-[#170f23] px-5' key={index}>
                        <div className=' relative'>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="100%"
                                width="100%"
                                image={item.thumbnailM}
                                title="Contemplative Reptile"
                                style={{ borderRadius: '5px' }}
                            />
                            <span className='bg-[rgba(0,0,0,0.5)] px-1 rounded-md absolute bottom-0 right-[10px] text-white'>5:30</span>
                        </div>
                        <CardContent className='grid grid-cols-7  bg-[#170f23] text-white'>
                            <CardMedia
                                component="img"
                                style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                                image={item.artist.cover}
                                className='col-span-1 cursor-pointer'
                            />
                            <div className='col-span-6'>
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
                ))}
            </div>
            <h1>MV</h1>
        </div>
    )
}

export default MV;