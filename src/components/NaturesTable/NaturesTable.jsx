import React from 'react';
import './NaturesTable.css'


function NaturesTable({ natures, onFlavorClick}) {

    return (
        <div>
            <table className="nature-table"  cellSpacing="2">
                <tbody>
                <tr>
                    <th colSpan="7" className="nature-table-text" >Nature table
                    </th>
                </tr>
                <tr>
                    <td rowSpan="2" colSpan="2" className="nature-table-text"> <i><b>No preference ↘</b></i>
                    </td>
                    <th
                        colSpan="5" className="disliked-th" > Disliked flavor <br/>  decreased stat ↓
                    </th>
                </tr>
                <tr>
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
                        className="favorite-th">  Favorite flavor<br /><br/>
                        increased stat ↑
                    </th>
                    <th className="spicy">Spicy <br/>↑Attack
                    </th>
                    <th className="no-preference">
                        {/*<button onClick="no-preference"}>*/}
                            <i>Hardy</i>
                    {/*</button>*/}
                    </th>
                    <th><button onClick={() => onFlavorClick(6)}>{natures[6].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(11)}>{natures[11].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(17)}>{natures[17].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(21)}>{natures[21].name}</button>
                    </th>
                </tr>
                <tr className="table-rule">
                    <th className="sour"> Sour <br/> ↑Defense
                    </th>
                    <th><button onClick={() => onFlavorClick(2)}>{natures[2].name}</button>
                    </th>
                    <th className="no-preference">
                        {/*<button onClick="no-preference"}>*/}
                        <i>Docile</i>
                    {/*</button>*/}
                    </th>
                    <th><button onClick={() => onFlavorClick(12)}>{natures[12].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(18)}>{natures[18].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(22)}>{natures[22].name}</button>
                    </th>
                </tr>
                <tr className="table-rule">
                    <th className="dry"> Dry <br/>↑Sp.Atk
                    </th>
                    <th><button onClick={() => onFlavorClick(3)}>{natures[3].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(8)}>{natures[8].name}</button>
                    </th>
                    <th className="no-preference">
                        {/*<button onClick="no-preference"}>*/}
                            <i>Bashful</i>
                    {/*</button>*/}
                    </th>
                    <th><button onClick={() => onFlavorClick(15)}>{natures[15].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(23)}>{natures[23].name}</button>
                    </th>
                </tr>
                <tr className="table-rule">
                    <th className="bitter"> Bitter< br/> ↑Sp.Def
                    </th>
                    <th><button onClick={() => onFlavorClick(4)}>{natures[4].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(9)}>{natures[9].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(14)}>{natures[14].name}</button>
                    </th>
                    <th  className="no-preference">
                        {/*<button onClick="no-preference"/>}>*/}
                            <i>Quirky</i>
                    {/*</button>*/}
                    </th>
                    <th><button onClick={() => onFlavorClick(24)}>{natures[24].name}</button>
                    </th>
                </tr>
                <tr className="table-rule">
                    <th className="sweet">Sweet <br/> ↑Speed
                    </th>
                    <th><button onClick={() => onFlavorClick(5)}>{natures[5].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(10)}>{natures[10].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(16)}>{natures[16].name}</button>
                    </th>
                    <th><button onClick={() => onFlavorClick(19)}>{natures[19].name}</button>
                    </th>
                    <th className="no-preference">
                        {/*<button onClick="no-preference"}>*/}
                            <i>Serious</i>
                    {/*</button>*/}
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NaturesTable;
