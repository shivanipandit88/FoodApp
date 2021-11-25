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
        const apiData = await API.graphql(graphqlOperation(listRestaurants));
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
            title: 'Register Restaurant',
            path: '/register',
            icon: <FaIcons.FaEdit />,
            cName: 'nav-text',
            show: true
        }
    ]};

    const [sidebar, setSidebar] = useState(false);
    const [sidebarData, setSidebarData] = useState(SidebarData());
    const showSidebar = () => setSidebar(!sidebar);



    function RenderAddMenuButton()
    {
        var res = 0;
        for (var i = 0; i < restaurants.length; i++) {
            if(restaurants[i].username === userData.payload.username){
                res += 1;
            }
        } 
        if(res > 0)
        {
            return(
                <li className='nav-text'>
                    <Link to='/yourrestaurants'>
                        <FaIcons.FaUtensils /><span>Your Restaurants</span>
                    </Link>
                </li>
            )
        }
        return(
            <></>
        )
    }

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <Link to="/" className='title'>Fassos</Link>
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
                    <RenderAddMenuButton />
                </ul>
            </nav>
        </>
    );
}

export default SideNav;