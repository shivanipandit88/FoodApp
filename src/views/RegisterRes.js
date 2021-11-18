import { Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../lib/hooksLib";
import { createRestaurant } from '../graphql/mutations';

export default function CreateRestaurant() {

  const [userData, setUserData] = useState({ payload: { username: '' } });
  const [errorMessages, setErrorMessages] = useState([]);
  const [imgname, setImgName] = useState('')
  const [imgfile, setImgFile] = useState('')
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    description: "",
    image: ""
  });
  const initialAppState = {showForm: false, imageURI: '' }
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

  const onChange = (e) => {
    e.preventDefault()
    if (e.target.files[0] !== null) {
      setImgFile(e.target.files[0])
      setImgName(e.target.files[0].imgname)
    }
  }

  async function regForm(event) {
    event.preventDefault();
    if (imgfile) {
        Storage.put(imgname, imgfile, {
          /* level: 'protected', */
          contentType: imgfile.type,
        })
          .then((result) => {
            console.log(result)
            setErrorMessages(`Success uploading file: ${imgname}!`)
          })
          .then(() => {
            document.getElementById('file-input').value = null
            setImgFile(null)
          })
          .catch((err) => {
            console.log(err)
            setErrorMessages(`Can't upload file: ${err}`)
          })
      } else {
        setErrorMessages(`Files needed!`)
      }
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
              onChange={(e) => onChange(e)}
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