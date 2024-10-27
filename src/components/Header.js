import { Link } from 'react-router-dom';
import logo from '../public/static/pngegg.png'

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="nav-item-container">
                <ul>
                    <Link to="/home"><li className="option">Home</li></Link>
                    <li className="gaurd"></li>
                    <Link to='/about'><li className="option">About Us</li></Link>
                    <li className="gaurd"></li>
                    <li className="option">Contact</li>
                    <li className="gaurd"></li>
                    <li className="option">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;