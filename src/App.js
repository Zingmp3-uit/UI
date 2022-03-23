import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../src/pages/Home'
import Singer from '../src/pages/Singer'
import Album from '../src/pages/Album'
import MusicVideo from '../src/pages/MusicVideo'


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singer" element={<Singer />} />
            <Route path="/album" element={<Album />} />
            <Route path="/music-video" element={<MusicVideo />} />
        </Routes>
    );
}

export default App;
