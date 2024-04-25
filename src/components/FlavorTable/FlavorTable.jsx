import React from 'react';
import './FlavorTable.css'

const FlavorTable = () => {
    const flavorData = [
        { flavor: 'Spicy', stat: 'Coolness' },
        { flavor: 'Dry', stat: 'Beauty' },
        { flavor: 'Sweet', stat: 'Cuteness' },
        { flavor: 'Bitter', stat: 'Cleverness' },
        { flavor: 'Sour', stat: 'Toughness' },
    ];

    return (
            <div>
            <h4>Flavor Stats</h4>
        <div className="purple-table">
            <table className="flavor-table">
                <thead>
                <tr className="table-rule">
                    <th>Flavor</th>
                    <th>Associated Stat</th>
                </tr>
                </thead>
                <tbody>
                {flavorData.map((item, index) => (
                    <tr key={index} className="table-rule">
                        {/*Uses Css from NatureTable*/}
                        <td className={`${item.flavor.toLowerCase()}`}>
                            {item.flavor}
                        </td>
                        <td className={`${item.flavor.toLowerCase()}`}>
                            {item.stat}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default FlavorTable;
