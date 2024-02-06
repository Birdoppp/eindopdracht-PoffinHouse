import './BerryBar.css'
export function BerryBar({isOpen}) {


    return (
        <div className={`aside ${ isOpen ? "aside--isOpen" : "aside--isClosed"}` }>
            BerryBar
        </div>
    );
}