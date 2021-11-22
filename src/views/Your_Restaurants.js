import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { listRestaurants } from '../graphql/queries';

export default function Restaurant() {

    const [restaurants, setRestaurants] = useState([]);
    const [userData, setUserData] = useState({ payload: { username: '' } });

    const history = useHistory();
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
        const apiData = await API.graphql(graphqlOperation(listRestaurants, {
            filter: {
                username: {
                    eq: userData.payload.username
                }
            }
        }));
        console.log(apiData)
        setRestaurants(apiData.data.listRestaurants.items);
      }

    return (
        <div className='main restaurant'>
            <Container>
                <h1>Your Restaurants</h1>
                <div>
                    <Row className="align-items-center">
                    {
                        restaurants.map(restaurants => (
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }} key={restaurants.id}>
                            <div onClick={() => {
                                history.push('/menu', { state: { id: restaurants.id } })
                            }}>
                            <Image src={restaurants.image} alt="Restaurant 1" />
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
