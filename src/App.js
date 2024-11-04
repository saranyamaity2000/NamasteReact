import ReactDOM from 'react-dom/client'
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ErrorComp from './components/unhappyPathComps/ErrorComp';
import NotFound from './components/UnhappyPathComps/NotFound';
import Restaurant from './components/Restaurant';
import { lazy, Suspense, useEffect, useState } from 'react';
import OwnerContext from './utils/contexts/OwnerContext';
import { GITHUB_OWNER_URI } from './utils/constants';
import { Provider } from 'react-redux';
import appStore from './utils/redux-store/appStore';


const About = lazy(() => import('./components/About'));

/** Rough Tree
 * 
 * App 
 *  - Header - done
 *      - Logo - done
 *      - NavItems - done
 *  - Body
 *      - Search
 *      - ResturantContainer
 *          - ResturantCard
 *  - Footer
 *      - CopyRight
 *      - Address
 *      - Contact
 */

const App = () => {
    const [owner, setOwner] = useState({});
    useEffect(() => {
        fetch(GITHUB_OWNER_URI)
            .then(data => data.json())
            .then(data => setOwner(data));
    }, []);
    return (
        <div className="app">
            <Provider store={appStore}>
                <OwnerContext.Provider value={{ ...owner, learning: "Context Provider & Consumer & useContext" }}>
                    <Header></Header>
                    <Outlet></Outlet>
                </OwnerContext.Provider>
            </Provider>
        </div>
    );
};

const router = createBrowserRouter([
    {
        element: <App></App>,
        path: '/',
        children: [
            {
                element: <Body></Body>,
                path: ''
            },
            {
                element: <Body></Body>,
                path: '/home' // starts with / so absolute path
            },
            {
                element: <Suspense fallback={<Body></Body>}><About></About></Suspense>,
                path: 'about' // relative path to parent
            },
            {
                element: <Restaurant></Restaurant>,
                path: '/res/:resId'
            }
        ],
        errorElement: <ErrorComp></ErrorComp> // better way to handle unexpected errors to show in UI (currently no practical example used here)
    },
    {
        path: '*',
        element: <NotFound></NotFound> // better way to handle Not Found
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);