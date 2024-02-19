import './ListBerryCard.css'
import React, {useEffect} from 'react';
import {fetchBerryData} from "../../helpers/fetchBerryData.js";
import Button from "../Button/Button.jsx";

function ListBerryCard({name, url, berryId}) {
    useEffect(() => {
     void  fetchBerryData(
       )
    }, []);

    return (
        <>
            <li>
                    <Button className="single-berry">
               {/*{berryId}*/}
                        {name}
                {/*  img component rename to berry name value only, src img map, met matching name, `${ berry-name }`.png */}
                {/*<Link to={url}>*/}
                {/*        {name}*/}
                    </Button>
                {/*</Link>*/}
            </li>
        </>
    );
}

export default ListBerryCard;