import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { listRestaurants } from '../graphql/queries';
import { API, Auth, graphqlOperation } from 'aws-amplify';

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
        // const apiData = await API.graphql({ query: listRestaurants });
        const apiData = await API.graphql(graphqlOperation(listRestaurants, {
            filter: {
                username: {
                    eq: userData.payload.username
                }
            }
        }));
        setRestaurants(apiData.data.listRestaurants.items);
      }

    const SidebarData = function(isReg) { return [
        {
            title: 'Restaurants',
            path: '/',
            icon: <FaIcons.FaUtensils />,
            cName: 'nav-text',
            show: true
        },
        {
            title: 'Cart',
            path: '/cart',
            icon: <FaIcons.FaShoppingCart />,
            cName: 'nav-text',
            show: true
        },
        {
            title: 'Register Restaurant',
            path: '/register',
            icon: <FaIcons.FaEdit />,
            cName: 'nav-text',
            show: true
        },
        {
            title: 'Your Restaurants',
            path: '/yourrestaurants',
            icon: <FaIcons.FaEdit />,
            cName: 'nav-text',
            show: isReg
        }
    ]};

    const [sidebar, setSidebar] = useState(false);
    const [sidebarData, setSidebarData] = useState(SidebarData());
    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
        fetchRoles();
    }, [sidebar]);

    console.log(restaurants.length);

    async function fetchRoles() {
        const isReg = () =>{
                if (restaurants.length == 0)
                {
                    return false;
                }
                else return true;
        }
        const updatedSideBarData = SidebarData(isReg());
        console.log('updatedSideBarData', updatedSideBarData);
        setSidebarData(updatedSideBarData);
    }

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className='title'>Fassos</div>
                <AmplifySignOut />
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {sidebarData.map((item, index) => {
                        return ( item.show ?
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li> : ""
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default SideNav;