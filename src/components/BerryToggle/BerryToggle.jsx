import React from 'react';
import './BerryToggle.css'
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";

let BerryToggle = ({handleClick, isOpen}) => {
    return (
        <>
            <div className="pink-toggle">
            <div className={isOpen ? "berry-extension-closed" : "berry-extension-open"}>
            </div>

                <button onClick={handleClick} className="toggle-berry">
                    {isOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </button>
            </div>
        </>
    );
};
export default BerryToggle;

