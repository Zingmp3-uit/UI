import { useEffect, useState } from 'react';
import logo from '../../../assets/Muzzi_Logo_Full.svg'
import { Link } from 'react-router-dom';
import clsx from 'clsx';
//mui
import { makeStyles } from '@material-ui/core/styles';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import AlbumIcon from '@material-ui/icons/Album';
import TimelineIcon from '@material-ui/icons/Timeline';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MovieIcon from '@material-ui/icons/Movie';

const useStyle = makeStyles(theme => ({
    icon: {
        fontSize: '25px',
        margin: '0 8px'
    },
}));


const SideBar = () => {
    const classes = useStyle(); // how to assign UseStyle
    const [activePath, setActivePath] = useState('');
    const titlePath = [
        {
            title: 'Cá nhân',
            path: '/personal',
            icon: <MusicVideoIcon className={classes.icon} />,
        },
        {
            title: 'Khám phá',
            path: '/',
            icon: <AlbumIcon className={classes.icon} />,
        },
        {
            title: 'Zing Chart',
            path: '/zing-chart',
            icon: <TimelineIcon className={classes.icon} />,
        },
        {
            title: 'Nhạc mới',
            path: '/new-music',
            icon: <MusicNoteIcon className={classes.icon} />,
        },
        {
            title: 'Thể loại',
            path: '/category',
            icon: <EmojiSymbolsIcon className={classes.icon} />,
        },
        {
            title: 'Top 100',
            path: '/top-zing',
            icon: <StarBorderIcon className={classes.icon} />,
        },
        {
            title: 'MV',
            path: '/mv',
            icon: <MovieIcon className={classes.icon} />,
        },
    ]

    useEffect(() => {
        setActivePath('/'+window.location.pathname.split('/')[1]);

    }, [window.location.pathname]);

    return (
        <div className="fixed top-0 bottom-0 left-0 w-[200px] shadow-xl bg-[#406882] text-white ">
            <img src={'https://svgshare.com/i/gSG.svg?fbclid=IwAR0XkB3pYh0JSAF95X9jlWHCa1EaG26WPjG8T0eQnKcRF_8jW1nJS73Bm0E'} alt="" className='w-full text-center px-7 py-3' />
            <div>
                {titlePath.map((item, index) => (
                    <div key={index} >
                        <Link to={item.path} className={clsx('flex items-center pl-2 py-3 hover:bg-[#1A374D] cursor-pointer',{'bg-[#1A374D]': activePath === item.path })}>
                            {item.icon}
                            <p className='text-[18px] font-semibold'>{item.title}</p>
                        </Link>
                        {index == 2 ? <hr className='w-[80%] my-2' /> : null}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SideBar;