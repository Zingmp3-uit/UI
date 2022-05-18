import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import avatar from '../../../assets/avatar.png'
import ZingAPI from "../../../context/zing.context";




const api = new ZingAPI();
const PlayMusic = (props, ref) => {
    const [infoAudio, setInfoAudio] = useState({
        title: '',
        artistsNames: '',
        thumbnailM: avatar,
        urlAudio: '',
    })
    const audioRef = useRef(null);

    const handlePlay = () => {
        console.log(audioRef.current)
        audioRef.current.audio.current.play()
    }
    const handlePause = () => {
        audioRef.current.audio.current.pause()
    }
    useImperativeHandle(ref, () => ({
        play() {
            audioRef.current.audio.current.play()
        },
        pause() {
            audioRef.current.audio.current.pause()
        },
        async setInfoAudio(encodeId) {
            let a = await api.getSong(encodeId)
            let b = await api.getInfoSong(encodeId)
            console.log(a,b);
            setInfoAudio({
                title: b.data.title,
                artistsNames: b.data.artistsNames,
                thumbnailM: b.data.thumbnailM,
                urlAudio: a.data['128'],
            })
        }
    }))
    return (
        <div className='fixed bottom-0 right-0 left-0 border-t-[0.5px] border-[#2a213a]  bg-[#406882] z-10 h-[80px]'>
            <div className='w-full max-w-full	grid grid-cols-4'>
                <div className='flex items-center col-span-1 ml-3'>
                    <img src={infoAudio.thumbnailM} alt="" className='w-[50px] h-[50px] rounded-full mr-3 rotate ' />
                    <div>
                        <p>{infoAudio.title}</p>
                        <p>{infoAudio.artistsNames}</p>
                    </div>
                </div>
                <div className=' col-span-2' >
                    <AudioPlayer
                        ref={audioRef}
                        // autoPlay
                        src={infoAudio.urlAudio}
                        onPlay={e => console.log("onPlay")}
                        style={{ backgroundColor: '#406882', width: '100%' }}
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
export default forwardRef(PlayMusic);