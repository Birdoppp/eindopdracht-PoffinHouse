import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
export default function Home() {


    return (
        <>
            <img className="welcome-img" src={welcome} alt="welcome"/>
            <h1>Here at the PoffinHouse we learn how to best feed our Pokémon!</h1>
            <section>
                The topics you will find here today are all about berries, how we make the best poffins and their effect on Pokémon
                and usability in Poké-contests. Unlock secrets about a special evolutions
                You will find the berries in the BerryDex on the left of your screen.
            </section>
        </>

    )
}