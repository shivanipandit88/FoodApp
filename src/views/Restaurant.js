import { API, Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';

export default function Restaurant() {

    return (
        <div className='main restaurant'>
            <Container>
                <h1>Restaurants</h1>
                <div>
                    <Row className="align-items-center">
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/cart" className="indiRes">
                                <Image src={food1} alt="Restaurant 1" />
                                <p>Restaurant Name 1</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={food2} alt="Restaurant 2" />
                                <p>Restaurant Name 2</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={food3} alt="Restaurant 3" />
                                <p>Restaurant Name 3</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={food4} alt="Restaurant 4" />
                                <p>Restaurant Name 4</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/cart" className="indiRes">
                                <Image src={food1} alt="Restaurant 1" />
                                <p>Restaurant Name 1</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={food2} alt="Restaurant 2" />
                                <p>Restaurant Name 2</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={food3} alt="Restaurant 3" />
                                <p>Restaurant Name 3</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={food4} alt="Restaurant 4" />
                                <p>Restaurant Name 4</p>
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
