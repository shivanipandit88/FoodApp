import { Storage, API, graphqlOperation } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../lib/hooksLib";
import { createRestaurant } from '../graphql/mutations';

export default function CreateRestaurant() {

  const [userData, setUserData] = useState({ payload: { username: '' } });
  const [errorMessages, setErrorMessages] = useState([]);
  const [fields, handleFieldChange] = useFormFields({
    dishname: "",
    ingredients: "",
    image: "",
    price: ""
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
      await API.graphql(graphqlOperation(createRestaurant, {input: { name: fields.name, description: fields.description, image: fields.image }}));
    } catch (e) {
      console.error('error creating restaurant', e);
      setErrorMessages(e.errors);
    }
    history.push("/");
  }

  function renderForm() {
    return (
      <div>
        <Form onSubmit={regForm} className="regForm">
          <Form.Group controlId="dishname" size="lg">
            <Form.Label>Dish Name</Form.Label>
            <Form.Control
              type="text"
              value={fields.dishname}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="ingredients" size="lg">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              value={fields.ingredients}
              onChange={handleFieldChange}
            />
          </Form.Group><Form.Group controlId="price" size="lg">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="image" size="lg" className="mb-3">
            <Form.Label>Upload an Image</Form.Label>
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
            <h1>Add your Menu</h1> 
            {renderForm()} 
        </Container>
    </div>);
}