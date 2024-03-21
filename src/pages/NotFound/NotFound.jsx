import './NotFound.css'
import pika from './../../assets/pokemon-assets/surprised-pika-nbg.png';
import wildError from './../../assets/assorted-collection/error-meme-no-bg.png'
import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1 className="error-title">Uh-Oh... This page doesn't seem to exist </h1>
        <div className="error-wrapper">
            <img src={wildError} alt="error meme"/>
            <img src={pika} alt="surprised pikachu"/>
            {/*<img src={pikaEvo} className="evo-line-img" alt="surprised pikachu evolution line"/>*/}
        </div>
            <h2 className="error-page-EN"> To Defeat or Flee the Wild Error,<br/> Please return to the <Link className="home-link-EN" to={"/"}>Homepage</Link></h2>
            <h2 className="error-page-U"> To Defeat or Flee the Wild Error,<br/> Please return to the <Link className="home-link-U" to={"/"}>Homepage</Link></h2>
    </>
    );
}

export default NotFound;