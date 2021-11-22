import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory, Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import food5 from '../assets/food5.jpg';
import { listAddMenus, listRestaurants } from '../graphql/queries';

export default function Menu() {
    const location = useLocation();
    const [menus, setmenus] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [userData, setUserData] = useState({ payload: { username: '' } });

    useEffect(() => {
        fetchMenus();
      }, []);
    
      async function fetchMenus() {
        const apiData = await API.graphql(graphqlOperation(listAddMenus, {
            filter: {
                id: {
                    eq: restaurants.id
                }
            }
        }));
        setmenus(apiData.data.listAddMenus.items);
      }

      useEffect(() => {
        fetchRestaurants();
      }, []);
    
      async function fetchRestaurants() {
        const apiData = await API.graphql(graphqlOperation(listRestaurants, {
            filter: {
                id: {
                    eq: location.state.state.id
                }
            }
        }));
        console.log(apiData)
        setRestaurants(apiData.data.listRestaurants.items);
      }

    return (
        <div>
            <div className="banner">
                <Image src={food5} alt="Restaurant" />
                <p>Restaurant Name</p>
            </div>
            <div className='main menu'>
                <Container>
                    <h1>Menu</h1>
                    <Table striped bordered hover responsive="sm">
                        <tbody>
                            {
                                menus.map(menus => (
                                <tr>
                                    <td><Image src={menus.image} alt="Restaurant 1" /></td>
                                    <td>{menus.dishname} <span>{menus.ingredients}</span></td>
                                    <td>$ {menus.price}</td>
                                    <td><Link to="/cart" className="btn btn-dark">Add to Cart</Link></td>
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