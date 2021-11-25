import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { listRestaurants } from '../graphql/queries';

export default function Restaurant() {

    const location = useLocation();
    const [restaurants, setRestaurants] = useState([]);
    const [userData, setUserData] = useState({ payload: { username: '' } });

    const history = useHistory();
    useEffect(() => {
        fetchUserData();
        fetchRestaurants();
        }, []);
    
      async function fetchUserData() {
        await Auth.currentAuthenticatedUser()
          .then((userSession) => {
            console.log("userData: ", userSession);
            setUserData(userSession.signInUserSession.accessToken);
          })
          .catch((e) => console.log("Not signed in", e));
      }
    
      async function fetchRestaurants() {
        const apiData = await API.graphql(graphqlOperation(listRestaurants, {
            filter: {
                username: {
                    eq: location.state.state.user
                }
            }
        }));
        console.log("Username");
        console.log(location.state.state.user);
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
