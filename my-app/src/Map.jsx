import React from 'react';
const Map = () => {
    const smartPhones = [ 
        {
            id:1,
            model: "Iphone 15 pro max",
            img:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/p/q/i/-original-imagtc3kfyhgfcvr.jpeg?q=90",
        },
                {
            id:2,
            model: "Iphone 16 pro max",
            img:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/r/8/8/-enriched-transparent-original-imahggevcrkzezzv.png?q=90",
        },
        {
            id:3,
            model: "Iphone 17 pro max",
            img:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/f/v/m/-original-imahft6chnx2vbuy.jpeg?q=90",
        }
    ];

    return(
        <>
            { smartPhones.map (( data) => (
                <div key={data.id}>
            <img style ={{width:"150px"}} src={data.img} alt=""/>
                    <h1> {data.model} </h1>
                    </div>
              ) )}
              </>
    
    )
}
export default Map;