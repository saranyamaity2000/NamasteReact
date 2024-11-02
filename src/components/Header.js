import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../public/static/pngegg.png'
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

export const Header = () => {
    const isOnline = useOnlineStatus();
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="header h-32 mb-5 bg-orange-200 flex justify-between">
            <div className="logo-container ml-5 h-full w-auto">
                <Link to="/home"><img className="logo h-full w-auto" src={logo} /></Link>
            </div>
            <div className="nav-item-container h-full w-1/2 bg-orange-400 rounded-l-full p-2">
                <ul className="flex justify-around items-center list-none h-full text-white">
                    <li className="relative p-3 text-xl" 
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        {isOnline ? '🟢' : '🔴'}
                        {showTooltip && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-lg py-1 px-2 mt-2 shadow-lg transition-opacity duration-300 opacity-100">
                                {isOnline ? 'Online' : 'Offline'}
                            </div>
                        )}
                    </li>
                    <li className="gaurd"></li>
                    <Link to="/home">
                        <li className="option font-bold hover:cursor-pointer p-3 text-2xl transition duration-300 ease transform hover:scale-110">
                            Home
                        </li>
                    </Link>
                    <li className="gaurd"></li>
                    <Link to='/about'>
                        <li className="option font-bold hover:cursor-pointer p-3 text-2xl transition duration-300 ease transform hover:scale-110">
                            About Us
                        </li>
                    </Link>
                    <li className="gaurd"></li>
                    <li className="option font-bold hover:cursor-pointer p-3 text-2xl transition duration-300 ease transform hover:scale-110">
                        Contact
                    </li>
                    <li className="gaurd"></li>
                    <li className="option font-bold hover:cursor-pointer p-3 text-2xl transition duration-300 ease transform hover:scale-110">
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;