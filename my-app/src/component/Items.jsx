import React from 'react'
const Items = () => {
    const age= 20 ;
    const aadhar = false;
    const gmail = true;

    return (
   <>
   { aadhar && <h1>   you can open Bank Account </h1>}
   { gmail  && <h1> you can make youtube channel </h1>}
   
   </>
 //     <div>
    //   { age>=18 ? (
    //     <>
    //     <h1> you can drive </h1>
    //     </>
    //     ):(
    //      <>
    //      <h1>
    //         you are not eligible for drive
    //      </h1>
    //      </>
    //     )
    //   }
    //   </div>
    )
}
 export default Items;    
