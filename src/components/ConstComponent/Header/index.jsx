import avatar from '../../../assets/avatar.png'
import Fab from '@material-ui/core/Fab';

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

import PublishIcon from '@material-ui/icons/Publish';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from 'react';


const Header = () => {
    const [search, setSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const handleSearch = () => {
        setSearch(!search)
    }
    const handleSearchValue = () => {
        setSearchValue('')
        setSearch(!search)
    }
    return (
        <div className='fixed top-0 right-0 left-[200px] shadow-xl h-[60px]  bg-[#406882] text-white flex items-center justify-between px-4 z-10'>
            <div className='flex items-center w-[70%]'>
                <ArrowBackIcon className='rounded-full hover:bg-[#170f23] p-1 mx-1' style={{ fontSize: '40px' }} />
                <ArrowForwardIcon className='rounded-full hover:bg-[#170f23] p-1 mx-1' style={{ fontSize: '40px' }} />
                {
                    !search &&
                    <span className='bg-[#1A374D]  rounded-3xl px-2 flex items-center w-full '>
                        <SearchIcon />
                        <input type="text" className='bg-transparent w-full m-2'
                            onFocus={handleSearch}
                            onFocusCapture={handleSearch}
                            style={{ outline: 'none' }} placeholder='Nhập tên bài hát, nghệ sĩ, hoặc MV ...' />
                    </span>
                }
                {
                    search &&
                    <span className='bg-[#432275]  rounded-t-3xl px-2 flex items-center w-full relative'
                    >
                        <SearchIcon />
                        <input type="text" className='bg-transparent w-full m-2 text-white'
                            style={{ outline: 'none' }}
                            onChange={e => setSearchValue(e.target.value)}
                            value={searchValue}
                            placeholder='Nhập tên bài hát, nghệ sĩ, hoặc MV ...' />
                        <div className="w-full h-48 bg-[#432275] rounded-b-3xl absolute top-full left-0">
                            <div className="w-full h-[165px] px-5 py-3 scroll">
                                <h3 className="font-semibold text-white text-[15px] font-sans">Đề xuất cho bạn</h3>
                                <ul className="">
                                    <li>aaa</li>
                                    <li>aaa</li>
                                    <li>aaa</li>
                                    <li>aaa</li>
                                    <li>aaa</li>
                                    <li>aaa</li>
                                    <li>aaa</li>
                                    <li>aaa</li>
                                </ul>
                            </div>
                        </div>
                        {
                            (searchValue !== '') &&
                            <CloseIcon style={{ fontSize: '18px', cursor: 'pointer', color: '#B1D0E0' }}
                                onClick={handleSearchValue}
                            />
                        }
                    </span>
                }
            </div>
            <div className='flex items-center'>
                <PublishIcon className='rounded-full w-11 hover:bg-[#170f23] p-1 mx-2  ' style={{ fontSize: '40px' }} />
                <SettingsIcon className='rounded-full w-11 hover:bg-[#170f23] p-1 mx-2  ' style={{ fontSize: '40px' }} />
                <img src={avatar} alt="" className='rounded-full w-[40px] hover:bg-[#170f23] mx-2' />
            </div>
        </div>
    )
}
export default Header;