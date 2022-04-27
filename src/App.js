import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import React, { useState, useEffect,createContext  } from 'react';
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
import OverLayer  from "./components/Overlayer";

export const MusicContext = createContext()
const configComponent = (component) => {
    // const [videoId, setVideoId] = useState('')
    return (
        // <MusicContext.Provider value={videoId}>
        <div>
            <SideBar />
            <div className="ml-[200px] ">
                <div>
                    <Header />
                </div>
                <div className="mt-[60px] mb-[80px] ">
                    {component}
                    <OverLayer />
                </div>
            </div>
            <PlayMusic />
        </div>
        // </MusicContext.Provider>
    )
}
let path = [
    {
        path: '/singer',
        component: configComponent(<Singer />)
    },
    {
        path: '/album',
        component: configComponent(<Album />)
    },
    // ===================================================  home pages    ==============================================
    {
        path: '/category',
        component: configComponent(<Category />)
    },
    {
        path: '/',
        component: configComponent(<Discover />)
    },
    {
        path: '/mv/:id',
        component: configComponent(<MV />)
    },
    {
        path: '/mv',
        component: configComponent(<MV />)
    },
    {
        path: '/new-music',
        component: configComponent(<NewMusic />)
    },
    {
        path: '/personal',
        component: configComponent(<Personal />)
    },
    {
        path: '/top-zing',
        component: configComponent(<TopZing />)
    },
    {
        path: '/zing-chart',
        component: configComponent(<ZingChart />)
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
