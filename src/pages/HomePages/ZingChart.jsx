import React, { useState, useEffect } from 'react'
import ZingAPI from "../../context/zing.context";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Sector, Cell } from 'recharts';

const api = new ZingAPI();

const ZingChart = () => {
    const [itemVNSongs, setItemVNSongs] = useState([])
    const [itemWeekVNSongs, setItemWeekVNSongs] = useState([])
    const [itemWeekUSSongs, setItemWeekUSSongs] = useState([])
    const [itemWeekKoreaSongs, setItemWeekKoreaSongs] = useState([])
    const [show, setShow] = useState(false)
    const [datas, setDatas] = useState([])
    const [showDatas, setShowDatas] = useState([])
    // const [top3, setTop3] = useState([])
    // console.log(datas)
    // // datas.map(data => console.log(data))
    useEffect(async () => {
        await api.getChartHome().then((data) => {
            setItemVNSongs(data.data.data.RTChart.items)
            // setDatas(data.data.data.RTChart.chart.items)
            setItemWeekVNSongs(data.data.data.weekChart.vn.items)
            setItemWeekUSSongs(data.data.data.weekChart.us.items)
            let top3 = []
            for( var i=0; i< 3; i++)
            {
                top3.push(data.data.data.RTChart.items[i].encodeId)
            }
            
            let a = []
            for (var i = 0; i < 24; i++) {
                if(i % 2 == 0){
                    a.push({
                        hour: data.data.data.RTChart.chart.items[`${top3[0]}`][i].hour + ":00",
                        'top1': data.data.data.RTChart.chart.items[`${top3[0]}`][i].counter,
                        'top2': data.data.data.RTChart.chart.items[`${top3[1]}`][i].counter,
                        'top3': data.data.data.RTChart.chart.items[`${top3[2]}`][i].counter,
                    })
                }
            }
            setDatas(a)
        })
    }, [])


    const handleShow = () => {
        setShow(!show)
    }
    return (
        <React.Fragment>
            <div className="w-full h-full bg-[#170f23]">
                <div className="relative">
                    <img className="w-full object-cover" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.6.14/static/media/bg-chart.fd766403.jpg" alt="" />
                    <div className="absolute inset-0 bg-[#170f23] bg-opacity-95 pt-[70px] pl-[60px] pr-[60px]">
                        <div className="flex flex-row items-center">
                            <h2 className="text-[40px] font-bold leading-10 mr-[16px]">#zingchart</h2>
                            <div className="w-10 h-10 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                                <PlayArrowRoundedIcon />
                            </div>
                        </div>
                        <div className="mt-[32px]">
                            <LineChart
                                width={1156}
                                height={400}
                                data={datas}
                            >
                                <XAxis dataKey="hour" />
                                {/* <Tooltip /> */}
                                <CartesianGrid stroke="#737373" strokeOpacity={0.2} strokeDasharray={"3 3"} />
                                <Line type="monotone" dataKey="top1" stroke="rgb(74, 144, 226)" yAxisId={0} />
                                <Line type="monotone" dataKey="top2" stroke="rgb(39, 189, 156)" yAxisId={1} />
                                <Line type="monotone" dataKey="top3" stroke="rgb(227, 80, 80)" yAxisId={2} />
                            </LineChart>
                        </div>
                    </div>
                </div>
                <div className="py-[24px] px-[60px]">
                    <div>
                        {
                            itemVNSongs.map((item, index) => {
                                if (index < 10) {
                                    return (
                                        <div key={index} className="p-[10px] grid grid-cols-[3fr_16fr_16fr_3fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                            <div className="flex flex-row items-center justify-around">
                                                {(index === 0) &&
                                                    <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #4a90e2', 'color': 'rgba(0,0,0,0)' }}>1</span>
                                                }
                                                {(index === 1) &&
                                                    <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #50e3c2', 'color': 'rgba(0,0,0,0)' }}>2</span>
                                                }
                                                {(index === 2) &&
                                                    <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #e35050', 'color': 'rgba(0,0,0,0)' }}>3</span>
                                                }
                                                {(index !== 0) && (index !== 1) && (index !== 2) &&
                                                    <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #ffffff', 'color': 'rgba(0,0,0,0)', 'opacity': '0.7' }}>{index + 1}</span>
                                                }
                                                <div>
                                                    <RemoveRoundedIcon />
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <div className="w-10 h-10 rounded overflow-hidden mr-2">
                                                    <img src={item.thumbnailM} alt="" />
                                                </div>
                                                <div>
                                                    <h5 className="text-base hover:underline hover:text-[#7200a1] ">{item.title}</h5>
                                                    <h6 className="text-xs text-white opacity-50">{item.artistsNames}</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-[14px] text-[#737373] font-medium">{item.album.title}</span>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <div>
                                                    <FavoriteRoundedIcon />
                                                </div>
                                                <span className="text-[14px] text-[#737373] font-medium">{item.duration}</span>
                                            </div>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        show &&
                                        <div key={index} className="p-[10px] grid grid-cols-[3fr_16fr_16fr_3fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                            <div className="flex flex-row items-center justify-around">
                                                {(index === 0) &&
                                                    <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #4a90e2', 'color': 'rgba(0,0,0,0)' }}>1</span>
                                                }
                                                {(index === 1) &&
                                                    <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #50e3c2', 'color': 'rgba(0,0,0,0)' }}>2</span>
                                                }
                                                {(index === 2) &&
                                                    <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #e35050', 'color': 'rgba(0,0,0,0)' }}>3</span>
                                                }
                                                {(index !== 0) && (index !== 1) && (index !== 2) &&
                                                    <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #ffffff', 'color': 'rgba(0,0,0,0)', 'opacity': '0.7' }}>{index + 1}</span>
                                                }
                                                <div>
                                                    <RemoveRoundedIcon />
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <div className="w-10 h-10 rounded overflow-hidden mr-2">
                                                    <img src={item.thumbnailM} alt="" />
                                                </div>
                                                <div>
                                                    <h5 className="text-base hover:underline hover:text-[#7200a1] ">{item.title}</h5>
                                                    <h6 className="text-xs text-white opacity-50">{item.artistsNames}</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-[14px] text-[#737373] font-medium">{item.album.title}</span>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <div>
                                                    <FavoriteRoundedIcon />
                                                </div>
                                                <span className="text-[14px] text-[#737373] font-medium">{item.duration}</span>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="my-6 text-center">
                        <button className="px-6 py-2 border rounded-3xl" onClick={handleShow}>Xem top 100</button>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full object-cover" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.6.14/static/media/week-chart-bg.edf332e5.jpg" alt="" />
                    <div className="absolute inset-0 bg-[#201335] bg-opacity-90  pt-[36px] pl-[60px] pr-[60px]">
                        <h2 className="text-[40px] font-bold leading-10 mr-[16px]">Bảng Xếp Hạng Tuần</h2>
                        <div className="grid grid-cols-[13fr_1fr_13fr_1fr_13fr] mt-6">
                            <div className="px-6 pt-6 bg-white bg-opacity-5 rounded-2xl ">
                                <div className="flex flex-row items-center ml-6 mb-4">
                                    <h4 className="text-[24px] font-bold leading-9 mr-[8px]">Việt Nam</h4>
                                    <div className="w-7 h-7 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                                        <PlayArrowRoundedIcon />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            itemWeekVNSongs.map((item, index) => {
                                                if (index < 4) {
                                                    return (
                                                        <div key={index} className="p-[10px] grid grid-cols-[1fr_4fr_1fr] items-center">
                                                            <div className="flex flex-row items-center justify-around">
                                                                <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #ffffff', 'color': 'rgba(0,0,0,0)', 'opacity': '0.7' }}>{index + 1}</span>
                                                                <div>
                                                                    <RemoveRoundedIcon style={{ fontSize: "14px" }} />
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-[10fr_1fr_39fr]">
                                                                <div className="w-10 h-10 rounded overflow-hidden mr-2">
                                                                    <img src={item.thumbnail} alt="" />
                                                                </div>
                                                                <div></div>
                                                                <div>
                                                                    <h5 className="text-sm hover:underline hover:text-[#7200a1] overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>{item.title}</h5>
                                                                    <h6 className="text-xs text-white opacity-50 overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>{item.artistsNames}</h6>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row justify-between">
                                                                <span className="text-[14px] text-[#737373] font-medium">{item.duration}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="my-6 text-center">
                                        <button className="px-6 py-2 border rounded-3xl">Xem tất cả</button>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div className="px-6 pt-6 bg-white bg-opacity-5 rounded-2xl">
                                <div className="flex flex-row items-center">
                                    <h4 className="text-[24px] font-bold leading-9 mr-[8px]">US-UK</h4>
                                    <div className="w-7 h-7 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                                        <PlayArrowRoundedIcon />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            itemWeekUSSongs.map((item, index) => {
                                                if (index < 4) {
                                                    return (
                                                        <div key={index} className="p-[10px] grid grid-cols-[1fr_4fr_1fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                                            <div className="flex flex-row items-center justify-around">
                                                                <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #ffffff', 'color': 'rgba(0,0,0,0)', 'opacity': '0.7' }}>{index + 1}</span>
                                                                <div>
                                                                    <RemoveRoundedIcon style={{ fontSize: "14px" }} />
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-[10fr_1fr_39fr]">
                                                                <div className="w-10 h-10 rounded overflow-hidden mr-2">
                                                                    <img src={item.thumbnail} alt="" />
                                                                </div>
                                                                <div></div>
                                                                <div>
                                                                    <h5 className="text-sm hover:underline hover:text-[#7200a1] overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>{item.title}</h5>
                                                                    <h6 className="text-xs text-white opacity-50 overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>{item.artistsNames}</h6>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row justify-between">
                                                                <span className="text-[14px] text-[#737373] font-medium">{item.duration}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="my-6 text-center">
                                        <button className="px-6 py-2 border rounded-3xl">Xem tất cả</button>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div className="px-6 pt-6 bg-white bg-opacity-5 rounded-2xl">
                                <div className="flex flex-row items-center">
                                    <h4 className="text-[24px] font-bold leading-9 mr-[8px]">K-Pop</h4>
                                    <div className="w-7 h-7 flex items-center justify-center bg-[#7200a1] rounded-full cursor-pointer hover:brightness-90">
                                        <PlayArrowRoundedIcon />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            itemWeekKoreaSongs.map((item, index) => {
                                                if (index < 4) {
                                                    return (
                                                        <div key={index} className="p-[10px] grid grid-cols-[1fr_4fr_1fr] items-center border-t-[0.5px] border-[#e8e8e8] border-opacity-5">
                                                            <div className="flex flex-row items-center justify-around">
                                                                <span className="font-sans text-3xl font-bold" style={{ '-webkit-text-stroke': '1px #ffffff', 'color': 'rgba(0,0,0,0)', 'opacity': '0.7' }}>{index + 1}</span>
                                                                <div >
                                                                    <RemoveRoundedIcon style={{ fontSize: "14px" }} />
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-[10fr_1fr_39fr]">
                                                                <div className="w-10 h-10 rounded overflow-hidden mr-2">
                                                                    <img src={item.thumbnail} alt="" />
                                                                </div>
                                                                <div></div>
                                                                <div>
                                                                    <h5 className="text-sm hover:underline hover:text-[#7200a1] overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>{item.title}</h5>
                                                                    <h6 className="text-xs text-white opacity-50 overflow-hidden" style={{ "display": "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "1" }}>{item.artistsNames}</h6>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row justify-between">
                                                                <span className="text-[14px] text-[#737373] font-medium">{item.duration}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="my-6 text-center">
                                        <button className="px-6 py-2 border rounded-3xl">Xem tất cả</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ZingChart;
