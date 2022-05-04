import SkeletonLoading from "../../assets/skeleton_loading.png";

const SongLoader = () => {
    return(
        <div className="w-full h-full">
            <div className='relative'>
                <img className='h-[60px] w-full object-cover rounded-[5px] animate-pulse' src={SkeletonLoading}>
                </img>
            </div>
        </div>        
    )
}
export default SongLoader