import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
import {PokedexGen, PokedexGen3, PokedexGen4} from "../../components/PokedexImageSlider/PokedexImageSlider.jsx";
import {Link} from "react-router-dom";

export default function Home() {


    return (
        <>
            <img className="welcome-img" src={welcome} alt="welcome"/>
            <h1>Here at the PoffinHouse we learn how to best feed our Pokémon!</h1>
            <section>
                Whether you're a seasoned Trainer or just starting out on your adventure, our site is your
                ultimate destination for all things berry-related in the Pokémon universe.
            </section>
            <h3> Berries in Pokémon aren't just tasty snacks </h3>
            <section>
                They're super helpful tools for Trainers, where flavor meets function! They can heal Pokémon, make them
                stronger in battles and contests. Sometimes even help them evolve!<br/>

                It is more generally known that there is a list of pokemon that
            </section>
            <h3>Learn about Pokémon Contest</h3>
            <section>
                They are dazzling showcases of skill, style, and creativity.
                Behind every winning performance in a Pokémon Contest lies the perfect berry. Explore our extensive
                collection of berries, each with its unique flavors, effects, and potential to elevate your Pokémon's
                Contest performance to new heights. From enhancing beauty and appeal to boosting performance in key
                Contest categories, the right berry can make all the difference.
            </section>
            <section>
                The topics you will find here today will related to our Pokémon <Link to="/preferences"
                                                                                      className="in-text-link"> preferences </Link>
                and be how to make the best poffins, for desired effect on our Pokémon.
            </section>

            <section>
                <PokedexGen4/>
            </section>
            <section>
                <PokedexGen/>
            </section>
            <section>
                <PokedexGen3/>
            </section>
        </>

    )
}