import { useContext } from 'react'
import { MusicContext } from '../App'


const Singer = () => {
    const { videoId, setVideoId, playAudio, pauseAudio } = useContext(MusicContext)
    console.log(useContext(MusicContext));

    return (
        <>
            <h1>Singer</h1>
            <button onClick={playAudio}>play</button>
            <button onClick={pauseAudio}>pause</button>
        </>
    )
}

export default Singer;