import React from 'react'
const Items = () => {
    const age= 20 ;
    return (
        <div>
      { age>=18 ? (
        <>
        <h1> you can drive </h1>
        </>
        ):(
         <>
         <h1>
            you are not eligible for drive
         </h1>
         </>
        )
      }
      </div>
    )
}
 export default Items;    
