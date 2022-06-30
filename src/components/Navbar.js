import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/addPerson">Add Person</Link>
        </nav>
     );
}
 
export default Navbar;
