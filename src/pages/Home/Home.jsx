import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
// import './../../assets/fonts/pixeloid-font/PixeloidMono-d94EV.ttf'
// import './../../assets/fonts/sf-pixelate-font/SfPixelateShaded-dOyx.ttf'
export default function Home() {


    return (
        <>
            <img className="welcome" src={welcome} alt="welcome"/>
            <h1>Home</h1>
        </>

    )
}