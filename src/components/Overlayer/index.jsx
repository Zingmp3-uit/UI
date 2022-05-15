import React, { useState } from 'react';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

const OverLayer = () => {
    const [musicPartners, setMusicPartners] = useState([
        {
            id: 1,
            name: "YG Entertainment",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png"
        },
        {
            id: 2,
            name: "SONY MUSIC",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png"
        },
        {
            id: 3,
            name: "FUGA",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png"
        },
        {
            id: 4,
            name: "The Orchard",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"
        },
        {
            id: 5,
            name: "Kakao-M",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/Kakao-M.png"
        },
        {
            id: 6,
            name: "Beggers",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png"
        },
        {
            id: 7,
            name: "MosterCat",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png"
        },
        {
            id: 8,
            name: "Empire",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png"
        },
        {
            id: 9,
            name: "SM Entertainment",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png"
        },
        {
            id: 10,
            name: "Universal",
            image_url: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png"
        },
    ])
    return (
        <div className="flex align-center justify-center w-full h-full bg-black bg-opacity-80 absolute top-0 left-0 right-0 bottom-0 hidden">
            <div className="mt-[25%] mx-[25%] translate-y-[-50%]">
                <div className="bg-[#432275] rounded-lg px-4">
                    <div className="flex flex-row align-center justify-between text-center pt-4">
                        <h3 className="flex-1 text-[16px] font-bold text-[#ffffff] text-opacity-50 tracking-[.25em]">ĐỐI TÁC ÂM NHẠC</h3>
                        <div>
                            <ClearRoundedIcon style={{
                                cursor: "pointer",
                            }} />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center align-center my-4">
                    {
                        musicPartners.map((musicPartner) => (
                            <div className="flex w-[112px] h-[63px] bg-white rounded-lg align-center justify-center mx-2 my-4">
                                <div className="flex text-center justify-center p-2">   
                                    <img className="object-scale-down w-auto h-auto" src={musicPartner.image_url} alt="" />
                                </div>
                            </div>
                            ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OverLayer;