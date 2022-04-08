import React, { useState } from 'react';
import ZingAPI from '../../context/zing.context'


const Personal = () => {
    // const api = new ZingAPI()

    // const handle = async () => {
    //     api.getSong("ZOACFBBU")
    //         .then(res => console.log(res))

    //     // api.search(" đức phúc")
    //     //     .then(res => console.log(res))

    //     // api.getVideo("ZWABOE8A")
    //     //     .then(res => console.log(res))

    //     // api.getTop100()
    //     //     .then(res => console.log(res))
    // }
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
        <React.Fragment>
            <div className="w-full h-full bg-[#170f23] pl-[60px] pr-[60px]">
                <div className="text-center pt-2">
                    <h3 className="text-[13px] font-bold text-[#ffffff] text-opacity-50 tracking-widest hover:text-[#c662ef] cursor-pointer">ĐỐI TÁC ÂM NHẠC</h3>
                </div>
                <div className="flex flex-row flex-wrap justify-center align-center my-4">
                    {
                        musicPartners.map((musicPartner) => (
                            <div className="flex w-[116px] h-[65px] bg-white rounded-lg align-center justify-center mx-2 my-4">
                                <div className="flex text-center justify-center p-2">   
                                    <img className="object-scale-down w-auto h-auto" src={musicPartner.image_url} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
        // <div className='bg-[#170f23]'>

        //     <button onClick={handle} className=' '>get API</button>
        //     <video width="400" controls>
        //         <source
        //             src={"https://mcloud-bf-s7-mv-zmp3.zmdcdn.me/LVXWO5v-_FQ/40d0ff93add4448a1dc5/4c94cab8d6fd3fa366ec/720/Anh-O-Day-Ma.mp4?authen=exp=1649438018~acl=/LVXWO5v-_FQ/*~hmac=20a6c27a5801a3bdf315ca7f4b292349"}
        //             type="video/mp4"
        //         />
        //     </video>
        // </div>
    )
}

export default Personal;