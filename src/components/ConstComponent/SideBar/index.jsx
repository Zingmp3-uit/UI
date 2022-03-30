import logo from '../../../assets/logo.png'




const SideBar = () => {


    return (
        <div className="fixed top-0 bottom-0 left-0 w-[200px] shadow-xl bg-[#170f23] text-white">
            <img src={logo} alt="" className='w-[80px]'/>
            <p>something here</p>
            <p>not code in component</p>
        </div>
    )
}
export default SideBar;