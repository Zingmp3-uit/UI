import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
//mui
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import AlbumIcon from '@material-ui/icons/Album';
import TimelineIcon from '@material-ui/icons/Timeline';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MovieIcon from '@material-ui/icons/Movie';


const SideBar = () => {


    return (
        <div className="fixed top-0 bottom-0 left-0 w-[200px] shadow-xl bg-[#2a213a] text-white ">
            <img src={'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg'} alt="" className='w-full text-center px-7 py-3' />
            <div>
                <Link to='' className='flex items-center pl-2 py-3 hover:bg-[#170f23] cursor-pointer	'>
                    <MusicVideoIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Cá nhân</p>
                </Link>
                <Link to='' className='flex items-center pl-2 py-3 hover:bg-[#170f23] cursor-pointer	'>
                    <AlbumIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Khám phá</p>
                </Link>
                <Link to='' className='flex items-center pl-2 py-3 hover:bg-[#170f23] cursor-pointer	'>
                    <TimelineIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Zing chart</p>
                </Link>
            </div>
            <hr className='w-[80%] my-2' />
            <div>
                <Link to='' className='flex items-center pl-2 py-3 hover:bg-[#170f23] cursor-pointer	'>
                    <MusicNoteIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Nhạc mới</p>
                </Link>
                <Link to='' className='flex items-center pl-2 py-3 hover:bg-[#170f23] cursor-pointer	'>
                    <EmojiSymbolsIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Thể loại</p>
                </Link>
                <Link to='' className='flex items-center pl-2 py-3 hover:bg-[#170f23] cursor-pointer	'>
                    <StarBorderIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Top 100</p>
                </Link>
                <Link to='/music-video' className='flex items-center pl-2 py-3 hover:bg-[#170f23] cursor-pointer	'>
                    <MovieIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>MV</p>
                </Link>
            </div>
        </div>
    )
}
export default SideBar;