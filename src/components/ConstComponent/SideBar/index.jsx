import { useEffect, useState } from 'react';
import logo from '../../../assets/logo.png'
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
            path: '/music-video',
            icon: <MovieIcon className={classes.icon} />,
        },
    ]

    useEffect(() => {
        setActivePath(window.location.pathname);

    }, [window.location.pathname]);

    return (
        <div className="fixed top-0 bottom-0 left-0 w-[200px] shadow-xl bg-[#2a213a] text-white ">
            <img src={'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg'} alt="" className='w-full text-center px-7 py-3' />
            <div>
                {titlePath.map((item, index) => (
                    <div key={index} >
                        <Link to={item.path} className={clsx('flex items-center pl-2 py-3 hover:bg-[#40384e] cursor-pointer',{'bg-[#40384e]': activePath === item.path })}>
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