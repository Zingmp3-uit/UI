import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import React from 'react';
import Home from '../src/pages/Home'
import Singer from '../src/pages/Singer'
import Album from '../src/pages/Album'
import MusicVideo from '../src/pages/MusicVideo'

// const component
import Header from '../src/components/ConstComponent/Header'
import SideBar from '../src/components/ConstComponent/SideBar'
import PlayMusic from '../src/components/ConstComponent/PlayMusic'


const configComponent = (component) => {

    return (
        <div>
            <Header />
            <div>
                <div>
                    <SideBar />
                </div>
                <div>
                    {component}
                </div>
            </div>
            <PlayMusic />
        </div>
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
    {
        path: '/music-video',
        component: configComponent(<MusicVideo />)
    },
]


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {path.map((item, index) => {
                return (
                    <Route path={item.path} element={item.component} key={index} />
                )
            })}
        </Routes>
    );
}

export default App;
