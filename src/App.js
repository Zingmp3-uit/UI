import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import React from 'react';
//pages
import Home from '../src/pages/Home'
import Singer from '../src/pages/Singer'
import Album from '../src/pages/Album'
import MusicVideo from '../src/pages/MusicVideo'
import Chart from '../src/pages/Chart'
// const component
import Header from '../src/components/ConstComponent/Header'
import SideBar from '../src/components/ConstComponent/SideBar'
import PlayMusic from '../src/components/ConstComponent/PlayMusic'


const configComponent = (component) => {

    return (
        <div>
            <SideBar />
            <div className="ml-[200px]">
                <div>
                    <Header />
                </div>
                <div className="mt-[60px]">
                    {component}
                </div>
            </div>
            <PlayMusic />
        </div>
    )
}
let path = [
    {
        path: '/',
        component: configComponent(<Home />)
    },
    {
        path: '/singer',
        component: configComponent(<Singer />)
    },
    {
        path: '/album',
        component: configComponent(<Album />)
    },
    {
        path: '/chart',
        component: configComponent(<Chart />)
    },
]


function App() {
    return (
        <Routes>
            <Route path="/music-video" element={<MusicVideo />} />
            {path.map((item, index) => {
                return (
                    <Route path={item.path} element={item.component} key={index} />
                )
            })}
        </Routes>
    );
}

export default App;
