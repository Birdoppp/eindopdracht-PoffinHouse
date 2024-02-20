import './BerryDexCard.css'
import React from "react";
import BerryRadarChart from "./../BerryRadarChart/BerryRadarChart.jsx";

function BerryDexCard({ selectedBerry }) {
    // console.log(selectedBerry)

    return (
        <ul className="berry-dex-card">
            <li>
                {/* Img conditionally rendered based on selectedBerry */}
            </li>
            <li>
                {/* Pass selectedBerry to BerryRadarChart */}
                <BerryRadarChart selectedBerry={selectedBerry} />

            </li>
        </ul>
    );
}

export default BerryDexCard;
