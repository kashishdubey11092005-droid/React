import React from 'react';
const Filter = () => {
    const person = [
        {id:1, name:"kashish", active:true},
        {id:2, name:"rebelkid", active:true},
        {id:3, name:"mostlysane", active:false},
        {id:4, name:"kushakapila", active:true},
    ];
    return(
        <div>
            {person
            .filter((data) => data.active)
            .map((item) => (
           <div key= {item.id}>
            <h1> {item.name}
            </h1>
        </div>
                ))}
                </div>
                    )
}
export default Filter;