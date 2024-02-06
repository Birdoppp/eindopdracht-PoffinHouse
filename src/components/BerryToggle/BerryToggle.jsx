import React from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";

export default function BerryToggle({handleClick, isOpen}) {

    // const [isOpen, toggleIsOpen] = useState(true)
    // const handleClickIsOpen = () => toggleIsOpen(prev=>!prev)

    return (
        <button onClick={handleClick} className="button">
            { isOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
        </button>
    );
}

