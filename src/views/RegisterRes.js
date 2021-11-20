import { Auth, Storage, API, graphqlOperation } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../lib/hooksLib";
import { createRestaurant } from '../graphql/mutations';

export default function CreateRestaurant() {

  //User Informantion
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

  const [userData, setUserData] = useState({ payload: { username: '' } });
  const [errorMessages, setErrorMessages] = useState([]);
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    description: "",
    image: ""
  });
  const history = useHistory();

  function validateForm() {
    try {
      return (
        fields.name.length > 0 &&
        fields.description.length > 0
      );
    } catch (e) {
      return false;
    }
  }

  async function regForm(event) {
    event.preventDefault();
    try {
      await API.graphql(graphqlOperation(createRestaurant, {input: { name: fields.name, description: fields.description, image: fields.image, username: userData.payload.username }}));
    } catch (e) {
      console.error('error creating restaurant', e);
      setErrorMessages(e.errors);
    }
    history.push("/addmenu");
  }

  function renderForm() {
    return (
      <div>
        <Form onSubmit={regForm} className="regForm">
          <Form.Group controlId="name" size="lg">
            <Form.Label>Restaurant Name</Form.Label>
            <Form.Control
              type="text"
              value={fields.name}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="description" size="lg">
            <Form.Label>Restaurant Description</Form.Label>
            <Form.Control
              type="text"
              value={fields.description}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="image" size="lg" className="mb-3">
            <Form.Label>Upload an Image to represent your Restarant</Form.Label>
            <Form.Control 
              type="file"
              value={fields.image}
              onChange={handleFieldChange}
            />
        </Form.Group>
          <Button block type="submit" disabled={!validateForm()} variant="warning">
            Register
          </Button>
        </Form>
      </div>
    );
  }

  return (
    <div className="main"> 
        <Container>
            <h1>Register Your Restaurant</h1> 
            {renderForm()} 
        </Container>
    </div>);
}