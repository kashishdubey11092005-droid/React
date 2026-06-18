const NavbarPart2 = (props) => {
  return (
    <div className=' flex gap-10 m-20 items-center'>
      <h2>Name: {props.name}</h2>
      <h2>Contact: {props.contact}</h2>
      <h2>Place: {props.place}</h2>
      <h2>Address: {props.address}</h2>
    </div>
  );
};

export default NavbarPart2;