import React, { useEffect, useState } from 'react'
//API
import ZingAPI from "../context/zing.context";
//Components
import ItemAlbum from '../components/ItemAlbum/ItemAlbum';

const Singer = () => {
    const api = new ZingAPI();

    const[info, setInfo] = useState([]);

    const[songs, setSongs] = useState([]);

    const[singles_EPs, setSingles_EPs] = useState([]);

    const[albums, setAlbums] = useState([]);

    const[MVs, setMVs] = useState([]);

    const getapi = async () => {
        await api.getArtist("Nguyen-Hoang-Dung").then(res => {
            console.log(res);
            setInfo(res.data.data);
        });

        await api.getArtist("Nguyen-Hoang-Dung").then(res => {
            var sections = res.data.data.sections;

            setSongs(sections[0].items);

            for (var i = 1; i < sections.length; i++) {
                if (sections[i].title == "Single & EP") {
                    setSingles_EPs(sections[i].items.slice(0, 4));
                }
    
                if (sections[i].title == "Album") {
                    setAlbums(sections[i].items.slice(0, 4));
                }
    
                if (sections[i].title == "MV") {
                    setMVs(sections[i].items.slice(0, 3));
                }
            }
        });
    } 

    useEffect(async () => {
        getapi();
    }, []);

    function displaySections() {
        return(
            <div>
                <div>
                {
                    songs.map((item, index) => {
                        return(
                            <div>
                                "Song"
                                {item.title}
                            </div>
                        )
                    })
                }
                </div>

                <h1 className='text-white text-[16pt] font-bold'>        
                    Single & EP
                </h1>                

                <ItemAlbum 
                albumsList={singles_EPs}
                isSubtitleClickable={false}
                >
                </ItemAlbum>

                <h1 className='text-white text-[16pt] font-bold'>        
                    Album
                </h1>                

                <ItemAlbum 
                albumsList={albums}
                isSubtitleClickable={false}
                >
                </ItemAlbum>

                <div>
                {
                    MVs.map((item, index) => {
                        return(
                            <div>
                                "MV"
                                {item.title}
                            </div>
                        )
                    })                      
                }
                </div>                                
            </div>
        )

    }

    return (
        <div>
            <h1>Singer</h1>

            <div>
            {
                displaySections()
            }    
            </div>
        </div>
    )
}

export default Singer;