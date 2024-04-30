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
            <h4>Flavor Association</h4>
        <div className="purple-table">
            <table className="flavor-table">
                <thead>
                <tr className="table-rule">
                    <th>Flavor</th>
                    <th>Condition</th>
                </tr>
                </thead>
                <tbody>
                {flavorData.map((flavorData, index) => (
                    <tr key={index} className="table-rule">
                        {/*Uses Css from NatureTable*/}
                        <td className={`${flavorData.flavor.toLowerCase()}`}>
                            {flavorData.flavor}
                        </td>
                        <td className={`${flavorData.flavor.toLowerCase()}`}>
                            {flavorData.stat}
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
