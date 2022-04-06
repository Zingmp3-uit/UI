import { useState } from 'react'
import logo from '../../assets/logo.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




const ItemVideo = () => {

    const [itemVideo, setItemVideo] = useState([
        {
            id_avatar_url: 'z2f7RHgvddc',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: 'z2f7RHgvddc',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: 'z2f7RHgvddc',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: 'z2f7RHgvddc',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
        {
            id_avatar_url: 'z2f7RHgvddc',
            name: 'Hát lên nào',
            singer: 'Nguyễn Trung Hiếu'
        },
    ])




    return (
        <div className='grid grid-cols-4 px-9'>
            {
                itemVideo.map((item, index) => (
                    <Card Card className='w-[300px] m-2' >
                        <CardActionArea>
                            <div className='bg-[#170f23] relative'>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="100%"     
                                    width="100%"
                                    image="https://i.ytimg.com/vi/esECWv9Jwfs/maxresdefault.jpg"
                                    title="Contemplative Reptile"
                                />
                                <span className='bg-[rgba(255,255,255,0.2)] px-1 rounded-md absolute bottom-0 right-[10px] text-white'>5:30</span>
                            </div>
                            <CardContent className='grid grid-cols-5  bg-[#170f23] text-white'>
                                <CardMedia
                                    component="img"
                                    style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                                    image="https://i.ytimg.com/vi/esECWv9Jwfs/maxresdefault.jpg"
                                    className='col-span-1'
                                />
                                <Typography className='col-span-4'>
                                    <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: '17px', margin: '0' }}>
                                        name singer hieu hieu hieu
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: '15px', color: '#938c74' }}>
                                        name mv
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </div>
    )
}

export default ItemVideo;