import NavbarPart2 from "./NavbarPart2";

const Navbar = () => {
  return (
    <div>
      <h1>Main Navbar</h1>

      <NavbarPart2
        name="Kashish"
        contact="9876543210"
        place="Mumbai"
        address="Kalamboli"
      />
    </div>
  );
};

export default Navbar;