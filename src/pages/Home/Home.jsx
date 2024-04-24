import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
import oranTree from './../../assets/assorted-collection/oran-berry-growth.gif'
import peachaBasket from './../../assets/assorted-collection/peacha-basket.png'
import poffinPlatter from './../../assets/assorted-collection/poffin-platter.png'
import poffinLady from './../../assets/assorted-collection/poffin-lady.png'
import arrow from './../../assets/assorted-collection/pink-arrow.png'
import contestHall from './../../assets/assorted-collection/Super-Contest-Hall.png'
import redBarrette from './../../assets/assorted-collection/Accessory_Red_Barrette_Sprite.png'
import {Link} from "react-router-dom";
import OpeningElement from "../../components/OpeningElement/OpeningElement.jsx";
import React from "react";
import ImageSwapper from "../../components/ImageSwapper/ImageSwapper.jsx";
import {PokedexImageSlider} from "../../components/PokedexImageSlider/PokedexImageSlider.jsx";
import {empoleonImages} from "../../constants/dexConstants.jsx";


export default function Home() {

    return (
        <div className="home-wrapper">
            <div className="intro-wrapper">
                <div className="welcome-container">
                    <img className="welcome-img" src={welcome} alt="welcome"/>
                </div>
                <section>
                    <ImageSwapper/>
                    <h1 className="poffinhouse-text">Here we learn how to best feed our
                        Pokémon!</h1>
                    <h3>Located in&nbsp;<a className="pink-link" target="_blank"
                                           href="https://bulbapedia.bulbagarden.net/wiki/Hearthome_City"> Hearthome
                        City </a>, the Poffin House is The hotspot for everything Berry!</h3>
                    <article>
                        Whether you're a seasoned Trainer or just starting out on your adventure, our site is a
                        resource for you to expand your knowledge.
                    </article>
                </section>
            </div>
            <section className="berry-section">
                <h3> Berries in Pokémon aren't just tasty snacks </h3>
                <article>
                    Berries are helpful tools for Trainers. Truely where flavor meets function! For example they can
                    heal Pokémon,
                    give a speed-boost and even help them in beauty contests.
                    Berries make our Pokémon stronger and sometimes even help them <Link
                    to="/preferences" className="pink-link">evolve! </Link><br/><br/>
                    On the leftside of your screen you will find more information in the BerryDex to find the berry you
                    need.
                    {/*Feebas evolution link*/}
                </article>
                <img className="oran-img" src={oranTree} alt="Oran berry Life cycle"/>
            </section>
            <OpeningElement openingText="Show Berry guide" closingText="Close">
                <iframe width="560" height="315"
                        src="https://www.youtube-nocookie.com/embed/f8uNPRSF7n8?si=PFtuN7Ex5YPsFVgB"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </OpeningElement>

            <section>
                <h3>
                    Poffin Making
                    <img className="poffin-lady" src={poffinLady} alt="Poffin Lady"/>
                </h3>
                Inside the Poffin House, you'll find the Poffin Cooking Station, the lady there would like to help you.
                Here, you can mix Berries together in a mini-game to create Poffins. The flavor-type and quality of the
                Poffin
                depends on the Berries you choose and how well you perform in the mixing mini-game.
                <div className="berry-to-poffin">
                    <img className="peacha-basket" src={peachaBasket} alt="Peacha berry Basket"/>
                    <img className="pink-arrow" src={arrow} alt="pink-arrow"/>
                    <img className="poffin-platter" src={poffinPlatter} alt="Platter of sweet Poffin"/>
                </div>
                <OpeningElement openingText="Poffin making footage" closingText="Close">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/pSFNfm2ycJQ?si=_algAXqwfzLSH6q4&amp;start=59"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </OpeningElement>
            </section>

            <section>
                <h3> Pokémon Contest
                    <img className="contest-hall" src={contestHall} alt="Poffin Lady"/></h3>
                They are dazzling showcases of skill, style, and creativity.
                Behind every winning performance in a Pokémon Contest lies the perfect berry. Explore our extensive
                collection of berries, each with its unique flavors, effects, and potential to elevate your Pokémon's
                Contest performance to new heights. From enhancing beauty and appeal to boosting performance in key
                Contest categories, the right berry can make all the difference.
            </section>
            <OpeningElement openingText="Super Contest making footage" closingText="Close">
                <iframe width="560" height="315"
                        src="https://www.youtube-nocookie.com/embed/pSFNfm2ycJQ?si=zuVkSCbrZup1OCDW&amp;start=840"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </OpeningElement>

            <section>
                <h3>
                    Poffin Effects & Contest enhancement
                    <img className="red-barret" src={redBarrette} alt="Red Barret, Contest Prize"/>
                </h3>
                Poffins come in different flavors and qualities, affecting various aspects of Pokémon performance in
                Pokémon Contests. Depending on the Poffins flavor, it will boost a particular Contest stat (Coolness,
                Beauty, Cuteness, Smartness, or Toughness). Higher-quality Poffins provide greater boosts to these
                stats. By strategically feeding Poffins to your Pokémon, you can increase their chances of winning in
                Contests and earning ribbons.
            </section>
            <OpeningElement openingText="Meet Empoleon" closingText="Close Pokédex">
                <PokedexImageSlider pokedexImages={empoleonImages}/>
            </OpeningElement>
        </div>

    )
}
