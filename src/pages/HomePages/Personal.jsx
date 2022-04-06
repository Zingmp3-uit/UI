import ZingAPI from '../../context/zing.context'

const Personal = () => {
    const api = new ZingAPI()

    const handle = async () => {
        api.getSong("ZOACFBBU")
            .then(res => console.log(res))

        // api.search(" đức phúc")
        //     .then(res => console.log(res))

        // api.getVideo("ZWABOE8A")
        //     .then(res => console.log(res))

        // api.getTop100()
        //     .then(res => console.log(res))
    }

    return (
        <div className='bg-[#170f23]'>

            <button onClick={handle} className=' '>get API</button>
            <video width="400" controls>
                <source
                    src={"https://mcloud-bf-s7-mv-zmp3.zmdcdn.me/LVXWO5v-_FQ/40d0ff93add4448a1dc5/4c94cab8d6fd3fa366ec/720/Anh-O-Day-Ma.mp4?authen=exp=1649438018~acl=/LVXWO5v-_FQ/*~hmac=20a6c27a5801a3bdf315ca7f4b292349"}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default Personal;