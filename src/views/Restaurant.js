import { API, Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { listRestaurants } from '../graphql/queries';

export default function Restaurant() {
    const history = useHistory();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
      }, []);
    
      async function fetchRestaurants() {
        const apiData = await API.graphql({ query: listRestaurants });
        console.log(apiData);
        setRestaurants(apiData.data.listRestaurants.items);
      }

    return (
        <div className='main restaurant'>
            <Container>
                <h1>Restaurants</h1>
                <div>
                    <Row className="align-items-center">
                    {
                        restaurants.map(restaurants => (
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }} key={restaurants.id}>
                            <div className="indiRes" onClick={() => {
                                history.push('/menu', { state: { id: restaurants.id } })
                            }}>
                            <Image src={'https://d2pmgib90mmdnn.cloudfront.net/public/' + restaurants.image} alt="Restaurant 1" />
                                <p>{restaurants.name}</p>
                            </div>
                        </Col>
                        ))
                    }
                    </Row>
                </div>
            </Container>
        </div>
    );
}
