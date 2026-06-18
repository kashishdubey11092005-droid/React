
// function App() {
//   return (
//     <div className="text-5xl font-bold text-blue-500">
//       Kashish the full stack developer
//       <img src = "https://unsplash.com/@brookebalentine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="Brooke Balentine" /> 
      
      
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Header from "./Header";

const App = () => {
  const [user, setUser] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUser("");
  };

  return (
    <div>
      <Header />

      <form onSubmit={submitHandler}>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="enter your name"
        />

        <button>submit</button>
      </form>
    </div>
  );
};

export default App;











