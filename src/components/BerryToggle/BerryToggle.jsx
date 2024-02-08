import React from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";

// eslint-disable-next-line react-refresh/only-export-components,react/prop-types,react/display-name
let berrybutton = ({handleClick, isOpen}) => {

    // const [isOpen, toggleIsOpen] = useState(true)
    // const handleClickIsOpen = () => toggleIsOpen(prev=>!prev)

    return (
        <button onClick={handleClick} className="button">
            { isOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
        </button>
    );
};
export default berrybutton;

