import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
import {EmpoleonDex, BulbaDex, MudkipDex} from "../../components/PokedexImageSlider/PokedexImageSlider.jsx";
import {Link} from "react-router-dom";

export default function Home() {


    return (
        <>
            <img className="welcome-img" src={welcome} alt="welcome"/>
            <h1>Here at the PoffinHouse we learn how to best feed our Pokémon!</h1>
            <h3>Located in the Sinnoh region, Poffin House is The hotspot for poffin making!</h3>
            <section>
                Whether you're a seasoned Trainer or just starting out on your adventure, our site is your
                ultimate destination for all things berry-related in the Pokémon universe.
            </section>
            <h4>
                Poffin Making
            </h4>
            <section>
                Inside the Poffin House, you'll find a group of people gathered around tables. Here, you can mix Berries
                together in a mini-game to create Poffins. The type and quality of the Poffin depend on the Berries you
                choose and how well you perform in the mixing mini-game.
            </section>
            <h4>
                Poffin Effects & Contest enhancement
            </h4>
            <section>
                Poffins come in different flavors and qualities, affecting various aspects of Pokémon performance in
                Pokémon Contests. Depending on the Poffins flavor, it will boost a particular Contest stat (Coolness,
                Beauty, Cuteness, Smartness, or Toughness). Higher-quality Poffins provide greater boosts to these
                stats. By strategically feeding Poffins to your Pokémon, you can increase their chances of winning in
                Contests and earning ribbons.
            </section>
            <h4>

            </h4>
            <section>

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
                <EmpoleonDex/>
            </section>
            <section>
                <BulbaDex/>
            </section>
            <section>
                <MudkipDex/>
            </section>
            <section>

            </section>
        </>

    )
}