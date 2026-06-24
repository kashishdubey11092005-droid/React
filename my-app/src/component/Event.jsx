import react from 'react'

const Event = () => {
    const  showAlert =() => {
        alert("this is my brand new alert with event ")
    }
    const bg_light =() => {
        document.body.style.backgroundColor="white";
        document.body.style.backgroundColor="black";
    }
    const bg_dark =() => {
        document.body.style.backgroundColor="black";
        document.body.style.backgroundColor="white";
    }
    return (
        <>
        <h1>Event</h1>
        <button onClick={showAlert}>Click</button>
        <div>
        <button onClick={bg_light}>change_To_light</button>
        <button onClick={bg_dark}>change_To_dark</button>


        </div>
        </>
    )
} 
export default Event;