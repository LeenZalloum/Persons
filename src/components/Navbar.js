import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>Persons Website</h2>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/addPerson">Add Person</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
