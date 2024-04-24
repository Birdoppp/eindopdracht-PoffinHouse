import React from 'react';
import './NaturesTable.css'


function NaturesTable({natures, onFlavorClick, selectedNature, dislikedFlavor, favoriteFlavor, noPreference }) {

    return (
        <div>
            <table className="nature-table"  cellSpacing="2">
                <tbody>
                <tr>
                    <th colSpan="7" className="nature-table-text" >Nature table
                    </th>
                </tr>
                <tr>
                    <th className="flavor-container" rowSpan="2" colSpan="1" >
            {selectedNature && (
                <div className="preferences-tab-text">
                    <h3 className="selected-nature">{selectedNature}</h3>
                    {!noPreference && (
                        <div>
                            <h5 className="flavor-text">Favorite flavor: </h5>
                            <p>{favoriteFlavor}</p>
                            <h5 className="flavor-text">Disliked flavor:</h5>
                            <p>{dislikedFlavor}</p>
                        </div>
                    )}
                    {noPreference && (
                        <div>
                            <p>This Nature<br/> has no <br/> Preference</p>
                        </div>
                    )}
                </div>
            )}


                    </th>

                    <th
                        colSpan="7" className="disliked-th" > Disliked flavor <br/>  (decreased stat ↓)
                    </th>
                </tr>
                <tr>
                    <td  rowSpan="1" colSpan="1"
                        className="nature-table-text"> <i>No preference </i>
                    </td>
                    <th className="spicy"> Spicy <br/> (↓Attack)
                    </th>
                    <th className="sour"> Sour <br/> (↓Defense)
                    </th>
                    <th className="dry"> Dry <br/> (↓Sp.Atk)
                    </th>
                    <th className="bitter"> Bitter <br/> (↓Sp.Def)
                    </th>
                    <th className="sweet">Sweet <br/> (↓Speed)
                    </th>
                </tr>
                <tr className="table-rule">
                    <th
                        rowSpan="5"
                        className="favorite-th">  Favorite flavor<br/><br/>(increased stat ↑)
                    </th>
                    <th className="spicy">Spicy <br/>(↑Attack)
                    </th>
                    <th className="no-preference">
                        <p className="no-preference" onClick={() => onFlavorClick(1)}>
                            <i>{natures[1].name}</i></p>
                    </th>
                    <th><p onClick={() => onFlavorClick(6)}>{natures[6].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(11)}>{natures[11].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(17)}>{natures[17].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(21)}>{natures[21].name}</p>
                    </th>
                </tr>
                <tr className="table-rule">
                    <th className="sour"> Sour <br/> ↑Defense
                    </th>
                    <th><p onClick={() => onFlavorClick(2)}>{natures[2].name}</p>
                    </th>
                    <th className="no-preference">
                        <p className="no-preference" onClick={() => onFlavorClick(7)}>
                            <i>{natures[7].name}</i></p>
                    </th>
                    <th><p onClick={() => onFlavorClick(12)}>{natures[12].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(18)}>{natures[18].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(22)}>{natures[22].name}</p>
                    </th>
                </tr>
                <tr className="table-rule">
                    <th className="dry"> Dry <br/>↑Sp.Atk
                    </th>
                    <th><p onClick={() => onFlavorClick(3)}>{natures[3].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(8)}>{natures[8].name}</p>
                    </th>
                    <th className="no-preference">
                        <p className="no-preference" onClick={() => onFlavorClick(13)}>
                            <i>{natures[13].name}</i></p>
                    </th>
                    <th><p onClick={() => onFlavorClick(15)}>{natures[15].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(23)}>{natures[23].name}</p>
                    </th>
                </tr>
                <tr className="table-rule">
                    <th className="bitter"> Bitter< br/> ↑Sp.Def
                    </th>
                    <th><p onClick={() => onFlavorClick(4)}>{natures[4].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(9)}>{natures[9].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(14)}>{natures[14].name}</p>
                    </th>
                    <th className="no-preference">
                        <p className="no-preference" onClick={() => onFlavorClick(20)}>
                            <i>{natures[20].name}</i></p>
                    </th>
                    <th><p onClick={() => onFlavorClick(24)}>{natures[24].name}</p>
                    </th>
                </tr>
                <tr className="table-rule">
                    <th className="sweet">Sweet <br/> ↑Speed
                    </th>
                    <th><p onClick={() => onFlavorClick(5)}>{natures[5].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(10)}>{natures[10].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(16)}>{natures[16].name}</p>
                    </th>
                    <th><p onClick={() => onFlavorClick(19)}>{natures[19].name}</p>
                    </th>
                    <th className="no-preference">
                        <p className="no-preference" onClick={() => onFlavorClick(25)}>
                            <i>{natures[25].name}</i></p>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NaturesTable;
