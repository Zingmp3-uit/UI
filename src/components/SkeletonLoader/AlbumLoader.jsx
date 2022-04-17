const AlbumLoader = () => {
    return(
        <div className='w-[100.5%] h-full'>
            <div className='relative'>
                <img className='object-cover rounded-[3%] animate-pulse' src="https://i.ibb.co/vqNvSNz/skeleton-loading.png">
                </img>
            </div>

            <img className='pt-[1.5%] w-[95%] h-[2%] rounded-full animate-pulse' src="https://i.ibb.co/vqNvSNz/skeleton-loading.png">
            </img>

            <img className='pt-[1.5%] w-[90%] h-[2%] rounded-full animate-pulse' src="https://i.ibb.co/vqNvSNz/skeleton-loading.png">
            </img>
        </div>        
    )
}
export default AlbumLoader