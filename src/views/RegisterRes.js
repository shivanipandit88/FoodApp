import { Auth, Storage, API, graphqlOperation } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../lib/hooksLib";
import { createRestaurant } from '../graphql/mutations';

export default function CreateRestaurant() {

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
    name: "",
    description: ""
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
    
    if (file.current && file.current.size > MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${MAX_ATTACHMENT_SIZE / 1000000} MB.`
      );
      return;
    } else if (file.current) {
      console.log(file.current);
      var uuid = require("uuid").v4();
      var path = file.current.name
      try {
      await API.graphql(graphqlOperation(createRestaurant, {input: { name: fields.name, description: fields.description, image: path, username: userData.payload.username }}));
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
    } else {
      alert("Please select a file to upload.");
    }
  }

  function renderForm() {
    return (
      <div>
        <Form onSubmit={regForm} className="regForm" encType="multipart/form-data">
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
            <h1>Register Your Restaurant</h1> 
            {renderForm()} 
        </Container>
    </div>);
}