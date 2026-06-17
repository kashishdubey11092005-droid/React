
// function App() {
//   return (
//     <div className="text-5xl font-bold text-blue-500">
//       Kashish the full stack developer
//       <img src = "https://unsplash.com/@brookebalentine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="Brooke Balentine" /> 
      
      
//     </div>
//   );
// }

// export default App;
import React, { usestate } from "react";
const useState = React.useState;
const App = () => {

const [user, setUser] = useState('')
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(user);
      setUser('');
    }
     return ( 
      <div>
      <form onSubmit ={ (e)=> {submitHandler(e)}}>
     <input
       value={user}
       onChange ={(e) => setUser(e.target.value)}

       className= 'px-3 rounded py-4 text-xl m-5'
       type="text"
       placeholder="enter your name"
       />
       <button className=' px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>submit</button>
      </form>
      </div>
     )
    
     }
     export default App;











