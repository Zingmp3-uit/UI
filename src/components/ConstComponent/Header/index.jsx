import avatar from '../../../assets/avatar.png'
import Fab from '@material-ui/core/Fab';

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import PublishIcon from '@material-ui/icons/Publish';
import SettingsIcon from '@material-ui/icons/Settings';


const Header = () => {


    return (
        <div className='fixed top-0 right-0 left-[200px] shadow-xl h-[60px]  bg-[#b39ed1] text-white flex items-center justify-between px-4 z-10'>
            <div className='flex items-center'>
                <ArrowBackIcon className='rounded-full hover:bg-[#170f23] p-1 mx-1' style={{ fontSize: '40px' }} />
                <ArrowForwardIcon className='rounded-full hover:bg-[#170f23] p-1 mx-1' style={{ fontSize: '40px' }} />
                <span className='bg-[#2f2739] py-1 rounded-3xl px-2'>
                    <SearchIcon />
                    <input type="text" className='bg-transparent w-[600px] m-2' style={{ outline: 'none' }} placeholder='Nhập tên bài hát, nghệ sĩ, hoặc MV ...' />
                </span>
            </div>
            <div className='flex items-center'>
                <PublishIcon className='rounded-full w-11 hover:bg-[#170f23] p-1 mx-2 border border-2 border-[#170f23]' style={{ fontSize: '40px' }} />
                <SettingsIcon className='rounded-full w-11 hover:bg-[#170f23] p-1 mx-2 border border-2 border-[#170f23]' style={{ fontSize: '40px' }} />
                <img src={avatar} alt="" className='rounded-full w-[40px] hover:bg-[#170f23] mx-2' />
            </div>
        </div>
    )
}
export default Header;