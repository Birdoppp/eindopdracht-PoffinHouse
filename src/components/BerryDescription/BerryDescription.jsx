import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BerryDescription.css'


function BerryDescription(berry) {
    const [itemDescription, setItemDescription] = useState("");

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const itemID = berry.selectedBerry + 125;
                    const response = await axios.get(`https://pokeapi.co/api/v2/item/${itemID}/`);
                    const description = response.data.effect_entries[0].effect;

                setItemDescription(description);
            } catch (error) {
                console.error('Error fetching berry:', error);
            }
        };

        void fetchDescription();
    }, [berry]);

    return (

               <div className="berry-description">
                       {itemDescription}
                   </div>


    );
}

export default BerryDescription;
