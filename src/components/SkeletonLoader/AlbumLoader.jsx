import SkeletonLoading from "../../assets/skeleton_loading.png";

const AlbumLoader = () => {
    return(
        <div className='w-full h-1'>
            <div>
                <img className='object-cover rounded-[3%] animate-pulse' src={SkeletonLoading}>
                </img>

                <img className='pt-[1%] w-[95%] h-[15px] rounded-full animate-pulse' src={SkeletonLoading}>
                </img>

                <img className='pt-[1%] w-[90%] h-[15px] rounded-full animate-pulse' src={SkeletonLoading}>
                </img>                                
            </div>
        </div>        
    )
}
export default AlbumLoader