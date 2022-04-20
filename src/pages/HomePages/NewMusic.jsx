import ZingAPI from "../../context/zing.context";
import logo from '../../assets/logo.png'
import { useState, useEffect } from "react";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import clsx from "clsx";


const api = new ZingAPI();

const NewMusic = () => {
    const [listMusic, setListMusic] = useState([]);

    useEffect(() => {
        api.getNewReleaseChart().then((data) => {
            setListMusic(data.data.data.items)
        })
    }, [])
    const formatTime = (time) => {
        let p = (time / 60 - 1).toFixed();
        let s = time - p * 60
        return `${p} : ${s}`
    }
    return (
        <div className="pt-10 mx-20">
            <div className="my-4 flex items-center">
                <p className="text-[30px] font-semibold mr-3">Mới phát hành</p>
                <PlayCircleFilledIcon style={{ background: 'rgb(116, 53, 100)', width: '40px', height: '40px' }} className='rounded-full' />
            </div>
            {listMusic.map((item, i) => (
                <div key={i}>
                    <div className=" px-4 rounded-sm grid grid-cols-7 cursor-pointer items-center">
                        <div className="flex items-center col-span-3">
                            <p
                                className={clsx("font-bold text-[50px] mr-2",
                                    { "text-cyan-600": i === 0 },
                                    { "text-lime-600": i === 1 },
                                    { "text-rose-600": i === 2 }
                                )}
                            >{i + 1}</p>
                            <p className="font-bold text-[50px] mr-2">-</p>
                            <div className="flex items-center">
                                <img src={item.thumbnailM} alt="" className="h-[50px] w-[50px] mx-2" />
                                <div>
                                    <p className="font-semibold text-[17px]">{item.title|| 'title'}</p>
                                    <p className="text-[#B1D0E0] text-[12px]">{item.artistsNames}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-[#B1D0E0] text-[15px] col-span-3">{item.album?.title || "hieu"}</p>
                        <p className=" text-[15px] col-span-1 text-right">{formatTime(item.duration)}</p>
                    </div>
                    <hr style={{ borderTop: '1px solid #695785' }} />
                </div>
            ))}
        </div>
    )
}

export default NewMusic;