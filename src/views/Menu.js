import { API, Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';
import { listAddMenus } from '../graphql/queries';

export default function Menu() {
    const [menus, setmenus] = useState([]);

    useEffect(() => {
        fetchMenus();
      }, []);
    
      async function fetchMenus() {
        const apiData = await API.graphql({ query: listAddMenus });
        setmenus(apiData.data.listAddMenus.items);
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