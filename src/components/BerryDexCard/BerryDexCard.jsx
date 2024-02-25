import './BerryDexCard.css';
import React from "react";
import BerryRadarChart from "./../BerryRadarChart/BerryRadarChart.jsx";
import {berryID} from "../../constants/constants.jsx";
import uppercaseCharAt from "../../helpers/uppercaseCharAt.js";


function BerryDexCard({selectedBerry}) {
    // console.log(selectedBerry)

    // Find the corresponding berryID object
    const matchingBerryID = berryID.find(berry => berry.name === selectedBerry.name);

    // Extract the id from matchingBerryID
    const selectedBerryID = matchingBerryID ? matchingBerryID.id : null;

    return (
        <>
            {
                selectedBerryID ?
                    <ul className="berry-dex-card">

                        <div className="dex-container1">
                            <li className="berry-img">
                                {selectedBerry.url &&
                                    <img
                                        src={`https://www.serebii.net/itemdex/sprites/sv/${selectedBerry.name}berry.png`}
                                        alt="selected-berry-img"/>}
                            </li>
                            <div className="dex-container2">
                                <li className="berry-name">
                                    <h2>{uppercaseCharAt(selectedBerry.name,0)}</h2>
                                </li>
                                <li>
                                    <h3 className="berry-id">
                                        {selectedBerryID && `No. ${selectedBerryID}`}
                                    </h3>
                                </li>
                            </div>
                        </div>
                        <div className="dex-container3">
                            <li>
                                <BerryRadarChart selectedBerry={selectedBerry}/>
                            </li>
                            <li>
                                <div className="berry-description-box">
                                    <p className="berry-description"></p>
                                </div>
                            </li>
                        </div>
                    </ul> : <h1 className="no-berry-text"> Please <br/>select <br/> berry!</h1>
            }
        </>
    );

}

export default BerryDexCard;

