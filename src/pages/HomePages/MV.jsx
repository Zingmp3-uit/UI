import { useState } from "react";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const MV = () => {

    const [item, setItem] = useState([1, 2, 3, 4, 5]);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bg-[#170f23] px-10 pt-5">
            <div className="flex mb-1">
                <p className="text-[30px] font-bold">MV </p>
                <span className="text-[30px] mx-2">|</span>
                <Tabs
                    value={value}
                    onChange={handleChange}
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
            <div className="grid grid-cols-3 mt-5 mx-8 ">
                {item.map((item, index) => (
                    <div className='w-full m-2  bg-[#170f23] px-5' >
                        <div className=' relative'>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="100%"
                                width="100%"
                                image="https://i.ytimg.com/vi/esECWv9Jwfs/maxresdefault.jpg"
                                title="Contemplative Reptile"
                                style={{ borderRadius: '5px' }}
                            />
                            <span className='bg-[rgba(0,0,0,0.5)] px-1 rounded-md absolute bottom-0 right-[10px] text-white'>5:30</span>
                        </div>
                        <CardContent className='grid grid-cols-5  bg-[#170f23] text-white'>
                            <CardMedia
                                component="img"
                                style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                                image="https://i.ytimg.com/vi/esECWv9Jwfs/maxresdefault.jpg"
                                className='col-span-1 cursor-pointer'
                            />
                            <div className='col-span-4'>
                                <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: '17px', margin: '0' }} className='cursor-pointer hover:text-[rgb(204,116,191)]'>
                                    name singer hieu hieu hieu
                                </Typography>
                                <p gutterBottom variant="h5" component="h2" style={{ fontSize: '15px' }} className='text-sky-900		 cursor-pointer hover:text-[rgb(204,116,191)]'>
                                    name mv
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