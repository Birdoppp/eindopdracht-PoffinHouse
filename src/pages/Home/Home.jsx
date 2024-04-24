import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
import oranTree from './../../assets/assorted-collection/oran-berry-growth.gif'
import peachaBasket from './../../assets/assorted-collection/peacha-basket.png'
import poffinPlatter from './../../assets/assorted-collection/poffin-platter.png'
import poffinLady from './../../assets/assorted-collection/poffin-lady.png'
import arrow from './../../assets/assorted-collection/pink-arrow.png'
import contestHall from './../../assets/assorted-collection/Super-Contest-Hall.png'
import redBarrette from './../../assets/assorted-collection/Accessory_Red_Barrette_Sprite.png'

import React from "react";
import {Link} from "react-router-dom";
import ImageSwapper from "../../components/ImageSwapper/ImageSwapper.jsx";
import OpeningElement from "../../components/OpeningElement/OpeningElement.jsx";
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
                        City </a>, the Poffin House is The hotspot for everything Berry!
                        <img className="hearthome"
                             src="https://archives.bulbagarden.net/media/upload/4/4f/Sinnoh_Hearthome_City_Map.png"
                             alt="hearthome-map"/></h3>
                    <article>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Whether you're a seasoned Trainer or just starting out on your adventure, our site is a
                        resource for you to expand your knowledge.
                    </article>
                </section>
            </div>

            <section className="berry-section">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h3> Berries in Pokémon aren't just tasty snacks </h3>
                <article>
                    Berries are helpful tools for Trainers. Truely where flavor meets function! In contrary to human
                    made heal potions, Pokémon know how to use berries intuitively and will use it when needed in
                    battle. For example they can heal Pokémon, give a speed-boost and even help them become cooler in
                    beauty contests.
                    Berries make our Pokémon stronger and sometimes even help them <Link
                    to="/preferences" className="pink-link">evolve! </Link><br/><br/>


                    On the left side of your screen you will find the BerryDex with more information to find the right
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    berry for you. Whether you'd like your Pokémon to hold the berry, to cook poffins with it or plant
                    them back in soil, the option is yours to research which best fits your needs.
                </article>
                <img className="oran-img" src={oranTree} alt="Oran berry Life cycle"/>
                <OpeningElement openingText="Show Berry guide" closingText="Close">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/f8uNPRSF7n8?si=PFtuN7Ex5YPsFVgB"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </OpeningElement>
            </section>

            <section>
                <h3>
                    Poffin Making
                    <img className="poffin-lady" src={poffinLady} alt="Poffin Lady"/>
                </h3>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Inside the Poffin House, you'll find the Poffin Cooking Station, the lady there would like to help you.
                Here, you can mix Berries together in a mini-game to create Poffins. The flavor-type and quality of the
                Poffin depends on the Berries you choose and how well you perform in the mixing mini-game. Your Pokémon
                will gain 1 Sheen everytime they eat a Poffin with the max of 12 Sheen. To maximize effectiveness on
                their condition, it is advisory to feed only strong Poffins to a Pokémon training for the Super Contest
                Championships, as Sheen can not be decreased or reset.<br/><br/>
                Poffin making is available to do with multiple friends online and would result into a stronger Poffin.
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
                <h3> Pokémon Super Contest
                    <img className="contest-hall" src={contestHall} alt="Poffin Lady"/></h3>
                <article>
                    Super Contest are a whole new way to compete and partner up with your Pokémon. They are
                    dazzling showcases of skill, style, and creativity.
                    Pokémon compete in 5 different categories, named after Conditions: Coolness, Beauty, Cuteness,
                    Cleverness, or Toughness.
                    The contests consist of 3 rounds: Visual, Dance and Acting Competition. For more details learn about <a className="pink-link" target="_blank"
                       href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Super_Contest">Super Contest</a>!
                </article>
                <OpeningElement openingText="Super Contest making footage" closingText="Close">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/pSFNfm2ycJQ?si=zuVkSCbrZup1OCDW&amp;start=840"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </OpeningElement>
            </section>

            <section>
                <h3>
                    Poffin Effects & Contest enhancement
                    <img className="red-barret" src={redBarrette} alt="Red Barret, Contest Prize"/>
                </h3>
                <article>
                    Poffins come in different flavors and qualities, affecting various aspects of Pokémon performance in
                    Pokémon Contests. Depending on the Poffins flavor, it will boost a particular Contest stat
                    (Coolness, Beauty, Cuteness, Smartness, or Toughness). Higher-quality Poffins provide greater boosts to these
                    stats. By strategically feeding Poffins to your Pokémon, you can increase their chances of winning
                    in
                    Contests and earning ribbons.
                </article>
                <OpeningElement openingText="Meet Empoleon" closingText="Close Pokédex">
                    <PokedexImageSlider pokedexImages={empoleonImages}/>
                </OpeningElement>
            </section>
        </div>

    )
}
