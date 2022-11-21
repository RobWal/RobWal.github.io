import H1 from '../../atoms/H1';
import Navbar from '../../molecules/Navbar';
import './Header.css'


const Header = () => {
    return (
        <div  className="header">
            <H1 text={"Stardew Valley Fishing"} />
            <Navbar />
        </div>
    )
}

export default Header;