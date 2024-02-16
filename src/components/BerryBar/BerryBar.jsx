import './BerryBar.css'

export function BerryBar({isOpen}) {


    return (
        <div className={`aside ${isOpen ? "aside--isOpen" : "aside--isClosed"}`}>
            <div className="berrytool-wrapper">
                <ul className="berrylist">
                    <li>
                        berry
                        {/* for loop per berry*/}
                    </li>
                    <li>
                        berry
                    </li>
                    <li>
                        berry
                    </li>
                    <li>
                        berry
                    </li>
                </ul>
            <section className="berry-dex">
                {/*    dex-card,
            with number, name, picture, description*/}
            </section>
            </div>
        </div>
    );
}