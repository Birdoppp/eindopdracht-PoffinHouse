import './BerryDexCard.css';
import React from "react";
import BerryRadarChart from "./../BerryRadarChart/BerryRadarChart.jsx";

// Import all images from the dex-berry-pics directory
// const images = require.context('./../../assets/dex-berry-pics', true);

function BerryDexCard({selectedBerry}) {
    // console.log(selectedBerry)

    return (
        <ul className="berry-dex-card">
            <li>
                {selectedBerry.url &&
                    <img src={`https://www.serebii.net/itemdex/sprites/sv/${selectedBerry.name}berry.png`} alt="selected-berry-img"/>
                }
            </li>
            <li>
                <BerryRadarChart selectedBerry={selectedBerry}/>
            </li>
            <li>
                <div className="berry-description-box">
                    <p className="berry-description"></p>
                </div>
            </li>
        </ul>
    );
}

export default BerryDexCard;
