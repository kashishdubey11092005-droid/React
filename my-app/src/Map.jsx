import React from 'react';
const Map = () => {
    const data = ["Google","Instagram","Snapchat","Facebook"];
    return(
        <div>
            { data.map (( element,index) => (
                <div key={index}>
                    <h1> {element} </h1>
                    </div>
              ) )}
              </div>
    
    )
}
export default Map;