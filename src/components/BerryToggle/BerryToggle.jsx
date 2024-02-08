import React from 'react';
import './BerryToggle.css'
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";

// eslint-disable-next-line react-refresh/only-export-components,react/prop-types,react/display-name
let berrybutton = ({handleClick, isOpen}) => {

    // const [isOpen, toggleIsOpen] = useState(true)
    // const handleClickIsOpen = () => toggleIsOpen(prev=>!prev)

    return (
        <>
            <div>

                <button onClick={handleClick} className="toggle-berry">
                    {isOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </button>
            </div>
        </>
    );
};
export default berrybutton;

