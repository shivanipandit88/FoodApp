import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { listRestaurants } from '../graphql/queries';
import { API, Auth } from 'aws-amplify';

const SideNav = (props) => {

    const [restaurants, setRestaurants] = useState([]);
    const [userData, setUserData] = useState({ payload: { username: '' } });

    useEffect(() => {
        fetchUserData();
        }, []);
    
      async function fetchUserData() {
        await Auth.currentAuthenticatedUser()
          .then((userSession) => {
            console.log("userData: ", userSession);
            setUserData(userSession.signInUserSession.accessToken);
          })
          .catch((e) => console.log("Not signed in", e));
      }

    useEffect(() => {
        fetchRestaurants();
      }, []);
    
      async function fetchRestaurants() {
        const apiData = await API.graphql({ query: listRestaurants, variables: { username: userData.payload.username} });
        setRestaurants(apiData.data.listRestaurants.items);
      }

    const SidebarData = [
        {
            title: 'Restaurants',
            path: '/',
            icon: <FaIcons.FaUtensils />,
            cName: 'nav-text'
        },
        {
            title: 'Cart',
            path: '/cart',
            icon: <FaIcons.FaShoppingCart />,
            cName: 'nav-text'
        },
        {
            title: 'Register Restaurant',
            path: '/register',
            icon: <FaIcons.FaEdit />,
            cName: 'nav-text'
        }
    ];

    const SidebarDataRes = [
        {
            title: 'Your Restaurants',
            path: '/',
            icon: <FaIcons.FaUtensils />,
            cName: 'nav-text'
        }
    ];

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    function ifRestaurant() {
        
    }

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <a href="/" className='title'>Fassos</a>
                <AmplifySignOut />
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    {ifRestaurant()}
                </ul>
            </nav>
        </>
    );
}

export default SideNav;