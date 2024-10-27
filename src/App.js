import ReactDOM from 'react-dom/client'
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import ErrorComp from './components/unhappyPathComps/ErrorComp';
import NotFound from './components/UnhappyPathComps/NotFound';
import Restaurant from './components/Restaurant';

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
    return (
        <div className="app">
            <Header></Header>
            <Outlet></Outlet>
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
                element: <About></About>,
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