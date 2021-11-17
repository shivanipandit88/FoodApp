import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../lib/hooksLib";
import { createRestaurant } from '../graphql/mutations';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export default function CreateRestaurant() {

  const [userData, setUserData] = useState({ payload: { username: '' } });
  const [errorMessages, setErrorMessages] = useState([]);
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    description: "",
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
    const restaurant = { name: "Default Name", description: "Default Description" };
    try {
      await API.graphql(graphqlOperation(createRestaurant, {input: restaurant}));
    } catch (e) {
      console.error('Restaurant not created', e);
      setErrorMessages(e.errors);
    }
    history.push("/");
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