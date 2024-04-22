import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
import oranTree from './../../assets/assorted-collection/oran-berry-growth.gif'
import peachaBasket from './../../assets/assorted-collection/peacha-basket.png'
import poffinPlatter from './../../assets/assorted-collection/poffin-platter.png'
import arrow from './../../assets/assorted-collection/pink-arrow.png'
import {Link} from "react-router-dom";
import OpeningElement from "../../components/OpeningElement/OpeningElement.jsx";
import React from "react";
import ImageSwapper from "../../components/ImageSwapper/ImageSwapper.jsx";


export default function Home() {

    return (
        <div className="home-wrapper">
            <div className="welcome-wrapper">
                <img className="welcome-img" src={welcome} alt="welcome"/>
            </div>
            <section>
                <ImageSwapper/>
                <h1 className="poffinhouse-text">Here at the PoffinHouse we learn how to best feed our Pokémon!</h1>
                <h3>Located in the Sinnoh region, Poffin House is The hotspot for poffin making!</h3>
                <article>
                    Whether you're a seasoned Trainer or just starting out on your adventure, our site is your
                    ultimate destination for all things berry-related in the Pokémon universe.
                </article>
            </section>
            <section>
                <h3> Berries in Pokémon aren't just tasty snacks </h3>
                <article>
                    They're super helpful tools for Trainers. Truely where flavor meets function! They can heal Pokémon,
                    give a speed-boost or make them more beautiful. Find more information in the BerryDex on the
                    leftside of your screen.
                    They make our Pokémon stronger in battles and contests. Sometimes even help them evolve!<br/>
                    {/*Feebas evolution link*/}
                </article>
                <img className="oran-img" src={oranTree} alt="oran life cycle"/>
                <OpeningElement openingText="show berry guide" closingText="Close">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/f8uNPRSF7n8?si=270SijMM5vIW3hmC"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </OpeningElement>
            </section>

            <section>
                <h4>
                    Poffin Making
                </h4>
                Inside the Poffin House, you'll find a group of people gathered around tables. Here, you can mix Berries
                together in a mini-game to create Poffins. The type and quality of the Poffin depend on the Berries you
                choose and how well you perform in the mixing mini-game.
                <div className="berry-to-poffin">
                    <img className="peacha-img" src={peachaBasket} alt="Peacha berry Basket"/>
                    <img className="pink-arrow" src={arrow} alt="pink-arrow"/>
                    <img className="poffin-platter" src={poffinPlatter} alt="Platter of sweet Poffin"/>
                </div>
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
            <OpeningElement openingText="show contest footage" closingText="Close">
                <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/pSFNfm2ycJQ?si=v3pPf9LztQtcNnIM&amp;start=840"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </OpeningElement>


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

            <h4>

            </h4>
            <section>

            </section>
        </div>

    )
}
