import axios from "axios";
import {useState} from "react";

export async function fetchBerryData(name) {
    let berryData = [];
    console.log("response", berryData)
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/berry/${name}`);
        berryData = response.data.results;
    } catch (error) {
        console.error('Error fetching berry data:', error);

    }
    return berryData

}