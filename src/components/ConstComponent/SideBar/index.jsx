import logo from '../../../assets/logo.png'
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import AlbumIcon from '@material-ui/icons/Album';
import TimelineIcon from '@material-ui/icons/Timeline';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MovieIcon from '@material-ui/icons/Movie';


const SideBar = () => {


    return (
        <div className="fixed top-0 bottom-0 left-0 w-[200px] shadow-xl bg-[#170f23] text-white ">
            <img src={'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg'} alt="" className='w-[80px] text-center' />
            <div>
                <div className='flex items-center ml-2 my-3'>
                    <MusicVideoIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Cá nhân</p>
                </div>
                <div className='flex items-center ml-2 my-3'>
                    <AlbumIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Khám phá</p>
                </div>
                <div className='flex items-center ml-2 my-3'>
                    <TimelineIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Zing chart</p>
                </div>
            </div>
            <hr />
            <div>
                <div className='flex items-center ml-2 my-3'>
                    <MusicNoteIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Nhạc mới</p>
                </div>
                <div className='flex items-center ml-2 my-3'>
                    <EmojiSymbolsIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Thể loại</p>
                </div>
                <div className='flex items-center ml-2 my-3'>
                    <StarBorderIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>Top 100</p>
                </div>
                <div className='flex items-center ml-2 my-3'>
                    <MovieIcon style={{ fontSize: '30px' }} className='mx-2' />
                    <p className='text-[18px] font-semibold'>MV</p>
                </div>
            </div>
            <p>something here</p>
            <p>not code in component</p>
        </div>
    )
}
export default SideBar;