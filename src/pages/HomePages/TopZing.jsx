const ZingMp3 = require("zingmp3-api-full")


const TopZing = () => {

    ZingMp3.getTop100().then((data) => {
        console.log(data)
      })

    return (
        <>
        <h1>TopZing</h1>
        </>
    )
}

export default TopZing;