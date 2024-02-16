import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
// import './../../assets/fonts/pixeloid-font/PixeloidMono-d94EV.ttf'
// import './../../assets/fonts/sf-pixelate-font/SfPixelateShaded-dOyx.ttf'
export default function Home() {


    return (
        <>
            <img className="welcome-img" src={welcome} alt="welcome"/>
            <h1>Here at the PoffinHouse we learn how to make the best Poffins to feed our Pokémon!</h1>
            <section>
                The topics you will find here today are about berries, how we make the best poffins and their effect on our Pokémon. You will find the berries in the BerryDex on the left of your screen.
                Poffin are very useful in Poké-contests. Unlock secrets
            </section>
        </>

    )
}