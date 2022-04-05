
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import avatar from '../../../assets/avatar.png'






const PlayMusic = () => {


    return (
        <div className='fixed bottom-0 right-0 left-0 bg-[rgb(226, 50, 50)]'>
            <div className='w-full'>
                <div>
                    <img src={avatar} alt="" />
                    <div>
                        <p>name music</p>
                        <p>name singer</p>
                    </div>
                </div>
                <div className='text-black bg-black' style={{ color: 'black' }}>
                    <AudioPlayer
                        autoPlay
                        src={'https://vnso-zn-23-tf-mp3-s1-m-zmp3.zadn.vn/ea859fb645f2acacf5e3/2153293163773944052?authen=exp=1649319583~acl=/ea859fb645f2acacf5e3/*~hmac=178f8c944edd204ec6aff0f783bc6d10&fs=MTY0OTE0NjmUsIC4MzMyMHx3ZWJWNHwxMTMdUngMTYxLjY2LjEwMA'}
                        onPlay={e => console.log("onPlay")}
                        style={{ color: 'black', backgroundColor: 'black' }}
                        // other props here
                        showSkipControls={true}
                    />
                </div>
            </div>
        </div>
    )
}
export default PlayMusic;