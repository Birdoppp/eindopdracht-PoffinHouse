import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
import hearthome from './../../assets/assorted-collection/Sinnoh_Hearthome_City_Map.png'
import oranTree from './../../assets/assorted-collection/oran-berry-growth.gif'
import peachaBasket from './../../assets/assorted-collection/peacha-berry-basket.png'
import poffinPlatter from './../../assets/assorted-collection/poffin-platter.png'
import poffinLady from './../../assets/assorted-collection/poffin-lady.png'
import arrow from './../../assets/assorted-collection/pink-arrow.png'
import contestHall from './../../assets/assorted-collection/Super-Contest-Hall.png'
import redRibbon from './../../assets/assorted-collection/Red_Ribbon_Cool_Sprite.png'
import contestPika from './../../assets/pokemon-assets/contest-Pikachu.png'

import React from "react";
import {Link} from "react-router-dom";
import ImageSwapper from "../../components/ImageSwapper/ImageSwapper.jsx";
import OpeningElement from "../../components/OpeningElement/OpeningElement.jsx";
import {PokedexImageSlider} from "../../components/PokedexImageSlider/PokedexImageSlider.jsx";
import {empoleonImages} from "../../constants/dexConstants.jsx";
import FlavorTable from "../../components/FlavorTable/FlavorTable.jsx";


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
                        City </a>, The hotspot for everything Berry!
                        <img className="hearthome"
                             src={hearthome} alt="hearthome-map"/></h3>
                    <article>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Whether you're a seasoned Trainer or just started out on your adventure, our site is a
                        resource for you to expand your knowledge. Poffin House is a place where we get together and
                        share advice about topics like Berries, Poffins and Super Contests. Feel free to grab a cup of
                        tea and take your time🌸
                    </article>
                </section>
            </div>

            <section className="berry-section">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h3> Berries in Pokémon aren't just tasty snacks
                    <img className="small-berry"
                         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png"
                         alt="Berry"/></h3>
                <img className="oran-img" src={oranTree} alt="Oran berry Life cycle"/>
                <article>
                    Berries are helpful tools for Trainers. Truly where flavor meets function.
                    In contrary to human made healing potions<img className="potion"
                                                                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png"
                                                                  alt="Potion"/>, Pokémon know how to use berries
                    intuitively and will use it when needed in battle. For example they can heal Pokémon, give a
                    speed-boost and even help them become cooler for beauty contests. Berries make our Pokémon stronger
                    and sometimes even help them <Link to="/preferences#feebas-evolution"
                                                       className="pink-link">evolve! </Link><br/><br/>

                    On the left side of your screen you will find the BerryDex with more information. A sure fire way to
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    &nbsp;find a suitable berry for you. Whether you'd like your Pokémon to hold on to the berry, use it
                    to
                    cook poffins with or plant them back into the soil, the option is yours to to what best fits your
                    needs.
                </article>

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
                <div className="berry-to-poffin">
                    <img className="peacha-basket" src={peachaBasket} alt="Peacha berry Basket"/>
                    <img className="pink-arrow" src={arrow} alt="pink-arrow"/>
                    <img className="poffin-platter" src={poffinPlatter} alt="Platter of sweet Poffin"/>
                </div>
                <article>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Inside the Poffin House, you'll find the Poffin Cooking Station, the lady there would like to help
                    you. Here, you can mix Berries together in a mini-game to create Poffins. The flavor-type and
                    quality of the Poffin depends on the Berries you choose and how well you perform in the mixing
                    mini-game. Your Pokémon will gain 1 Sheen everytime they eat a Poffin with the max of 12 Sheen. It
                    is advisory to feed only strong Poffins to a Pokémon training for the Super Contest to maximize
                    effectiveness on their Contest Condition, as Sheen can not be decreased or reset.
                </article>
                <label className="Sceptile-lbl"> Sceptile with full Sheen
                    <img className="Sceptile" src="https://archives.bulbagarden.net/media/upload/c/cb/Sheen_IV.png"
                         alt="Sceptile with full Sheen"/>
                </label>
                <article>
                    Poffin making is available to do with multiple friends online, and would result into a stronger
                    Poffin.
                    If you take in account the <Link to="/preferences#preferences"
                                                     className="pink-link">Nature </Link> (personality)
                    of your Pokémon, it would give your Pokémon the best shot to become a Super Contest Champion!
                </article>
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
                    dazzling showcases of skill, style, and creativity. The talent shown in the Super Contests are
                    rewarded with Ribbons
                    Pokémon compete in 5 different categories named after the Contest Conditions: Coolness, Beauty,
                    Cuteness, Cleverness, or Toughness. The contests consist of 3 rounds: Visual, Dance and Acting. For
                    more details, learn about <a className="pink-link" target="_blank"
                                                 href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Super_Contest">
                    Super Contest</a>. Below you will find Gible competing in their very first Tough Competition!
                </article>
                <img className="contest-pikachu" src={contestPika}
                     alt="Pikachu competing in Cute Super Contest"/>
                <OpeningElement openingText="Gible's Super Contest footage" closingText="Close">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/pSFNfm2ycJQ?si=zuVkSCbrZup1OCDW&amp;start=840"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </OpeningElement>
            </section>

            <section className="effects-section">
                <h3>
                    Contest Enhancement & Strategy
                    <img className="red-barret" src={redRibbon} alt="Red Barret, Contest Prize"/>
                </h3>
                <div className="effects-container">
                    <FlavorTable/>
                    <article>
                        It is important to know that every Poffin Flavor influences a different Contest Condition.
                        Feeding a Sweet Poffin would not be of much help to a Pokémon training for the Cool
                        championships. <br/><br/>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        It is favorable when your Pokémon's liked Flavor matches the Contest category it would like to
                        compete in. Below you find Empoleon, a avid contestant in the Super Contests.
                    </article>
                </div>

                <OpeningElement className="empoleon" openingText="Meet Empoleon" closingText="Close Pokédex">
                    <PokedexImageSlider pokedexImages={empoleonImages}/>
                </OpeningElement>

                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <article>According to the Trainer Memo (second screen in the Pokédex), Empoleon "likes Sweet food".
                    Unfortunately it does
                    not show you what Flavor it dislikes. This is useful to know because feeding a Pokémon a Poffin they
                    will dislike, will regress their
                    progress. We have provided a table which includes disliked Flavor in <Link
                        to="/preferences#preferences"
                        className="pink-link">preferences</Link>.
                    <br/><br/>
                    In the Contest Moves (The yellow tab in the PokéDex) it is notable that Empoleon has acces to 3
                    Beauty Contest Moves yet has a wide collection of Ribbons. With dedication and effort your Pokémon
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    is not confined to 1 Contest Category. The last tab shows Empoleon's Effort Ribbon, one well
                    deserved indeed.
                </article>
            </section>
        </div>

    )
}
