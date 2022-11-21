import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div  className="navbar">
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/about'>About</NavLink>
            <NavLink className="nav-link" to='/projects'>Projects</NavLink>
            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
        </div>
    )
}

export default Navbar;