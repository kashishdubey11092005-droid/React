
// function App() {
//   return (
//     <div className="text-5xl font-bold text-blue-500">
//       Kashish the full stack developer
//       <img src = "https://unsplash.com/@brookebalentine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="Brooke Balentine" /> 
      
      
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const App = () => {
//   const [user, setUser] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(user);
//     setUser("");
//   };

//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <Navbar />

//       <form onSubmit={submitHandler}>
//         <input
//           value={user}
//           onChange={(e) => setUser(e.target.value)}
//           type="text"
//           placeholder="enter your name"
//         />

//         <button>submit</button>
//       </form>
//       <Footer />
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// const App = () => {

// const name = "kashish";
// const num = 10;
// const person ={
//   name : 'narayan',
//   gmail :'laxmi@gmail.com'
// }
// return (
//   <div>
//     <h1> hello guys!</h1>
//     <h1> {11+10}</h1>

//     <p> {name}</p>
//     <p> {num}</p>
//     <p> {person.name}</p>
//     <p> {person.gmail}</p>
//  </div>
// )
// }

// export default App

import React from "react";
import Product from "./component/Product";
import Items from "./component/Items";
const App = () => {
   const obj = {
    ram : '4gb',
    rom :'128gb',
    chip : 'intel i -9 '
   }
   return(
    <div>
    <Product name = "iphone 17" price ={80000} color  ="Green" data = {obj} />  
    <product name = "iphone 16" price ={70000} color = " blue"  />
    <Items/>
       </div>
   )
  }
   

export default App;







