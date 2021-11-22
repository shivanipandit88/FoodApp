import { Storage, API, graphqlOperation, Auth } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../lib/hooksLib";
import { createAddMenu } from '../graphql/mutations';

export default function CreateAddMenu() {

  const file = useRef(null);
  const [uploaded, setUploaded] = useState(false);
  const MAX_ATTACHMENT_SIZE = 10000000;

  function handleFileChange(event)
  {
    file.current = event.target.files[0];
    validateForm();
  }

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
    dishname: "",
    ingredients: "",
    price: ""
  });
  const history = useHistory();

  function validateForm() {
    try {
      return (
        fields.dishname.length > 0 &&
        fields.ingredients.length > 0 &&
        fields.price.length > 0
      );
    } catch (e) {
      return false;
    }
  }

  async function regForm(event) {
    event.preventDefault();
    
    if (file.current && file.current.size > MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${MAX_ATTACHMENT_SIZE / 1000000} MB.`
      );
      return;
    } else {
      console.log(file.current);
      var path = file.current.name;
      try {
        await API.graphql(graphqlOperation(createAddMenu, {input: { dishname: fields.dishname, ingredients: fields.ingredients, image: fields.image, price: fields.price, resName: fields.resName, username: userData.payload.username }}));
      await Storage.put(path, file.current,{ level: "public", }).catch((e) => console.log(e));

      setUploaded(true);
      alert("Restaurant Successfully Registered!");
      fields.description = "";
    } catch(e)
    {
      console.error('error creating restaurant', e);
      setErrorMessages(e.errors);
    }
    history.push("/addmenu");
    }
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
              onChange={handleFileChange}
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