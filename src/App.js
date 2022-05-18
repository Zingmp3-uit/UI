import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, useLocation
} from "react-router-dom";
import './App.css';
import React, { useState, useEffect, createContext, useRef } from 'react';
import ZingAPI from "./context/zing.context";
//pages
import Singer from '../src/pages/Singer'
import Album from '../src/pages/Album'
import MusicVideo from '../src/pages/MusicVideo'
//home pages
import Discover from './pages/HomePages/Discover'
import Category from '../src/pages/HomePages/Category'
import MV from '../src/pages/HomePages/MV'
import NewMusic from '../src/pages/HomePages/NewMusic'
import Personal from '../src/pages/HomePages/Personal'
import TopZing from '../src/pages/HomePages/TopZing'
import ZingChart from '../src/pages/HomePages/ZingChart'

// const component
import Header from '../src/components/ConstComponent/Header'
import SideBar from '../src/components/ConstComponent/SideBar'
import PlayMusic from '../src/components/ConstComponent/PlayMusic'
import OverLayer from "./components/Overlayer";

export const MusicContext = createContext()

function useQuery() {
    const { search } = useLocation();
    return new URLSearchParams(search);
}

const ConfigComponent = ({ children }) => {
    const [videoId, setVideoId] = useState('')
    const query = useQuery();
    const audioRef = useRef(null)
    const playAudio = () => {
        audioRef.current.play()
    }
    const pauseAudio = () => {
        audioRef.current.pause()
    }
    const createInfoAudio = (id) => {
        audioRef.current.setInfoAudio(id)
        playAudio()
    }
    useEffect(() => {
        createInfoAudio(query.get('encodeId'))
    }, [query.get('encodeId')])
    return (
        <MusicContext.Provider value={{ videoId, setVideoId, playAudio, pauseAudio, createInfoAudio }}>
            <SideBar />
            <div className="ml-[200px] ">
                <div>
                    <Header />
                </div>
                <div className="mt-[60px] mb-[120px] ">
                    {children}
                </div>
            </div>
            <PlayMusic ref={audioRef} />
        </MusicContext.Provider>
    )
}

let path = [
    {
        path: '/:alias',
        component: <ConfigComponent ><Singer /></ConfigComponent>
    },
    {
        path: '/album/:alias/:id',
        component: <ConfigComponent ><Album /></ConfigComponent>
    },
    // // ===================================================  home pages    ==============================================
    {
        path: '/category',
        component: <ConfigComponent ><Category /></ConfigComponent>
    },
    {
        path: '/',
        component: <ConfigComponent ><Discover /></ConfigComponent>
    },
    {
        path: '/mv/:id',
        component: <ConfigComponent ><MV /></ConfigComponent>
    },
    {
        path: '/mv',
        component: <ConfigComponent ><MV /></ConfigComponent>
    },
    {
        path: '/new-music',
        component: <ConfigComponent ><NewMusic /></ConfigComponent>
    },
    {
        path: '/personal',
        component: <ConfigComponent ><Personal /></ConfigComponent>
    },
    {
        path: '/top-zing',
        component: <ConfigComponent ><TopZing /></ConfigComponent>
    },
    {
        path: '/zing-chart',
        component: <ConfigComponent ><ZingChart /></ConfigComponent>
    },
]

function App() {
    return (
        <Routes>
            <Route path="/music-video" element={<MusicVideo />} />
            <Route path="/music-video/:id" element={<MusicVideo />} />
            {path.map((item, index) => {
                return (
                    <Route path={item.path} element={item.component} key={index} />
                )
            })}
        </Routes>
    );
}

export default App;
