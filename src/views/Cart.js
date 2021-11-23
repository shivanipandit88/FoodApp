import { API, Auth,graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import { listCartDatas } from "../graphql/queries";
// import { API, Auth, graphqlOperation } from 'aws-amplify';
export default function Cart() {
  const [userData, setUserData] = useState({ payload: { username: '' } });
  const [cartItem, setCartItem] = useState([]);

  useEffect( () => {
      fetchUserData();
      fetchRestaurants();
      }, [] );
  
    async function fetchUserData() {
      await Auth.currentAuthenticatedUser()
        .then((userSession) => {
          console.log("userData132: ", userSession);
          setUserData(userSession.signInUserSession.accessToken);
        })
        .catch((e) => console.log("Not signed in", e));
        // fetchRestaurants();
    }

  
    async function fetchRestaurants() {
      const apiData = await API.graphql(graphqlOperation(listCartDatas,{
          filter: {
              username: {
                  eq : userData.payload.username
              }
          }
      }))
      console.log('das1',apiData);
      setCartItem(apiData.data.listCartDatas.items);

      // .then((cartValue) => { 
      //   // console.log("response",response)
      //   setCartItem(cartValue.data.listCartDatas.items);
      //   console.log('cartItem122', cartItem)
      //   // console.log('test',response.data.listCartDatas.items)
      // });
      
    }

  // async function listCartTable() {
  //   await API.graphql({ query: listCartTables })
  //   .then((response)=>{
  //     response.data.listCartTables.items.filter(Item=>Item.username==userData.payload.username)
  //     .forEach(
  //       record => setCartItem(oldArray => [...oldArray, record] )
  //       );
  //       console.log("das",cartItem);
  //   })
  //   .catch((e) => console.log("failed to fetch cart data", e));
  // }

  // async function filterCartItems() {
  //   var filterMenuIDs = cartItem.filter(Item=>Item.username==userData.payload.username);
  //   console.log("Filtered Items",filterMenuIDs)
  // }

  return (
    <div className="main menu">
      <Container>
        <h1>Cart</h1>
        <Table striped bordered hover responsive="sm">
          <tbody>
            {cartItem &&
              cartItem.map((item) => (
                <tr>
                <td>{item.menu.dishname}</td>
                  <td>
                    {item.menu.ingredients}
                  </td>
                  <td>$ {item.menu.price}</td> 
                </tr>
              ))}

            <tr>
              <td colSpan="2">Total</td>
              <td>totalPrice</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
