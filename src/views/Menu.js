import { Auth, Storage, API, graphqlOperation } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory, Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import food5 from '../assets/food5.jpg';
import { getRestaurant, listAddMenus, listRestaurants } from '../graphql/queries';
import { createCartTable } from '../graphql/mutations';


export default function Menu() {
    const location = useLocation();
    const [menus, setmenus] = useState([]);
    const [restaurants, setRestaurants] = useState({
        username: ""
    });
    const [userData, setUserData] = useState({ payload: { username: '' } });

    const [addMenuBtn, setaddMenuBtn] = useState(false);

    useEffect(() => {
        fetchRestaurants();
        fetchUserData();
      }, []);
    
      async function fetchMenus() {
        const apiData = await API.graphql(graphqlOperation(listAddMenus, {
            filter: {
                id: {
                    eq: location.state.state.id
                }
            }
        }));
        console.log("Menu Data ")
        console.log(apiData)
        setmenus(apiData.data.listAddMenus.items);
      }
    
      async function fetchRestaurants() {
        const apiData = await API.graphql(graphqlOperation(getRestaurant, {id: location.state.state.id}));
        console.log("Restaurant Data ");
        console.log(apiData);
        setRestaurants(apiData.data.getRestaurant);
        fetchMenus();
    }
    const history = useHistory();
    
      async function fetchUserData() {
        await Auth.currentAuthenticatedUser()
          .then((userSession) => {
            console.log("userData: ", userSession);
            setUserData(userSession.signInUserSession.accessToken);
            
          })
          .catch((e) => console.log("Not signed in", e));
      }

      async function addtoCart(menuID){
        try {
            await API.graphql(graphqlOperation(createCartTable, {input: { menuItems: menuID, username: userData.payload.username}}));      
            alert("Item Added to Cart");
            
          } catch(e)
          {
            console.error('error adding to Cart', e);
            // setErrorMessages(e.errors);
          }
      }

    async function fetchRoles() {
        console.log("FetchRoles Data");
        const isReg = () =>{
            console.log("this is restaurant username",restaurants.username)
                    console.log("this is username",userData.payload.username)
            if (restaurants.username === userData.payload.username)
                {
                    console.log("this is restaurant username inside",restaurants.username)
                    console.log("this is username inside",userData.payload.username)
                    return true;
                }
                else return false;
            }
        setaddMenuBtn(isReg());
        } 

    const AddMenuBtn = function(isReg) { return [
        {
            title: 'Add Menu',
            path: '/addmenu',
            cName: 'btn btn-dark',
            show: isReg
        }
    ]};
    
    function RenderAddMenuButton()
    {
        if(restaurants.username === userData.payload.username)
        {
            return(
                <Button onClick={() => {
                    history.push('/addmenu', { state: { id: restaurants.id } })
                }}>Add Menu</Button>
            )
        }
        return(
            <></>
        )
    }
    return (
        <div>
            <div className="banner">
                <Image src={food5} alt="Restaurant" />
                <p>Restaurant Name</p>
            </div>
            <div className='main menu'>
                <Container>
                    <div className="header">
                    <h1>Menu</h1>
                    <RenderAddMenuButton />
                    </div>
                    <Table striped bordered hover responsive="sm">
                        <tbody>
                            {
                                menus.map(menus => (
                                <tr>
                                    <td>{menus.id}</td>
                                    <td><Image src={menus.image} alt="Restaurant 1" /></td>
                                    <td>{menus.dishname} <span>{menus.ingredients}</span></td>
                                    <td>$ {menus.price}</td>
                                    <button onClick={()=>addtoCart(menus.id)} className="btn btn-dark">Add to Cart</button>
                                    {/* <td><Link to="/cart" className="btn btn-dark" >Add to Cart</Link></td> */}
                                </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <Row>
                        <div className="btns">
                            <Link to="/" className="btn btn-dark">Home</Link>
                            <Link to="/cart" className="btn btn-warning">Go to Cart</Link>
                        </div>
                    </Row>
                </Container>
            </div>

        </div>
    );
}