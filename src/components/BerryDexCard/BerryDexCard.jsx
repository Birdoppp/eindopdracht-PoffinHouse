import './BerryDexCard.css'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import {fetchBerryData} from "../../helpers/fetchBerryData.js";


function BerryDexCard() {
    const { berryName } = useParams();
    const [berryData, setBerryData] = useState(null);

    // useEffect(() => {
    //     fetchBerryData(berryName);
    // }, []);

    if (!berryData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="berry-dex">
            <h2>{berryData.name}</h2>
            <p>{berryData.description}</p>
        </div>
    )
}
export default BerryDexCard