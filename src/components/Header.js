import { Link } from 'react-router-dom';
import logo from '../public/static/pngegg.png'
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

export const Header = () => {
    const isOnline = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/home"><img className="logo" src={logo} /></Link>
            </div>
            <div className="nav-item-container">
                <ul>
                    <li className="option">{isOnline ? 'Online 🟢' : 'Offline 🔴'}</li>
                    <li className="gaurd"></li>
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