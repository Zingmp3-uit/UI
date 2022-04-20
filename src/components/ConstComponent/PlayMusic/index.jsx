
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import avatar from '../../../assets/avatar.png'






const PlayMusic = () => {


    return (
        <div className='fixed bottom-0 right-0 left-0 border-t-[0.5px] border-[#2a213a]  bg-[#406882] z-10 h-[80px]'>
            <div className='w-full max-w-full	grid grid-cols-4'>
                <div className='flex items-center col-span-1 ml-3'>
                    <img src={avatar} alt="" className='w-[50px] h-[50px] rounded-full mr-3 rotate '/>
                    <div>
                        <p>name music</p>
                        <p>name singer</p>
                    </div>
                </div>
                <div className=' col-span-2' >
                    <AudioPlayer
                        autoPlay
                        // src={'https://vnso-zn-23-tf-mp3-s1-m-zmp3.zadn.vn/ea859fb645f2acacf5e3/2153293163773944052?authen=exp=1649319583~acl=/ea859fb645f2acacf5e3/*~hmac=178f8c944edd204ec6aff0f783bc6d10&fs=MTY0OTE0NjmUsIC4MzMyMHx3ZWJWNHwxMTMdUngMTYxLjY2LjEwMA'}
                        src={"https://mp3-s1-zmp3.zmdcdn.me/b36802b4ccf325ad7ce2/1729810351076897325?authen=exp=1649437949~acl=/b36802b4ccf325ad7ce2/*~hmac=e976fca3be7eb8562746582078eb39c3&fs=MTY0OTI2NTE0OTA2MHx3ZWJWNnwxMDM0NTQ2MDk5fDExNi4xMTEdUngMTAdUngMTE3"}
                        onPlay={e => console.log("onPlay")}
                        style={{  backgroundColor: '#406882' ,width:'100%'}}
                        // other props here
                        showSkipControls={true}
                    />
                </div>
                <div className='col-span-1'>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
export default PlayMusic;