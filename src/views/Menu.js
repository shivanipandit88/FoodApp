import { API, Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';

export default function Menu() {

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
                            <tr>
                                <td><Image src={food1} alt="Restaurant 1" /></td>
                                <td>House Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                                <td>$ 11.00</td>
                                <td><Button variant="dark">Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td><Image src={food2} alt="Restaurant 2" /></td>
                                <td>Margherita Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                                <td>$ 11.00</td>
                                <td><Button variant="dark">Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td><Image src={food3} alt="Restaurant 3" /></td>
                                <td>4 Cheese Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                                <td>$ 11.00</td>
                                <td><Button variant="dark">Add to Cart</Button></td>
                            </tr>
                            <tr>
                                <td><Image src={food4} alt="Restaurant 4" /></td>
                                <td>Garden Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                                <td>$ 11.00</td>
                                <td><Button variant="dark">Add to Cart</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Row>
                        <div className="btn">
                            <Button href="/cart" variant="warning">Go to Cart</Button>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}