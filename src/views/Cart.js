import { API, Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";


export default function Menu() {

    return (
        <div className='main menu'>
            <Container>
                <h1>Cart</h1>
                <Table striped bordered hover responsive="sm">
                    <tbody>
                        <tr>
                            <td>x1</td>
                            <td>House Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                            <td>$ 11.00</td>
                        </tr>
                        <tr>
                            <td>x2</td>
                            <td>Margherita Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                            <td>$ 11.00</td>
                        </tr>
                        <tr>
                            <td>x4</td>
                            <td>4 Cheese Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                            <td>$ 11.00</td>
                        </tr>
                        <tr>
                            <td>x1</td>
                            <td>Garden Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                            <td>$ 11.00</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>$ 1111.00</td>
                        </tr>
                    </tbody>
                </Table>
                <Row>
                    <div className="btns">
                        <Link to="/menu" className="btn btn-dark">Back</Link>
                        <Link to="/cart" className="btn btn-warning">Place Order</Link>
                    </div>
                </Row>
            </Container>
        </div>
    );
}