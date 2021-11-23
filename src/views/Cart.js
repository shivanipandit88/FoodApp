import { API, Auth } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import { listCartTables } from "../graphql/queries";
import {getCartTable} from "../graphql/queries"
 
export default function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const [userData, setUserData] = useState({ payload: { username: "" } });
    const [filteredCartItems,setFilteredCartItems]= useState([])
 
  useEffect(() => {
    fetchUserData();
  }, []);
 
 
//   const history = useHistory();
//   useEffect(() => {
//     fetchUserData();
//   }, []);
 
  async function fetchUserData() {
    await Auth.currentAuthenticatedUser()
      .then((userSession) => {
        console.log("userData: ", userSession);
        setUserData(userSession.signInUserSession.accessToken);
      })
      .catch((e) => console.log("Not signed in", e));
    listCartTable();
  }
 
  async function listCartTable() {
    const cartData = await API.graphql({ query: listCartTables });
    setCartItem(cartData.data.listCartTables.items);
    console.log("Cart Items Added from Menu", cartItem);
    filterCartItems();
  }
 
  async function filterCartItems() {
      console.log("UserData-UserName",userData.payload.username)
    var filterMenuIDs = cartItem.filter(Item=>Item.username==userData.payload.username);
    console.log("Filtered Items",filterMenuIDs)
 
    // Query using a parameter
    const oneTodo = await API.graphql({ query: getCartTable, variables: { id: '0614290a-65cb-4eb7-a04a-edde24c77dfa' }});
    // const cartData = await API.graphql({ query: getCartTable(filterMenuIDs[0]) });
    // setFilteredCartItems(cartData.data.getCartTable);
    // console.log("Menu ID of User",cartData.menuID);
    console.log("Getting Query from GraphQL",oneTodo)
  }
 
  return (
    <div className="main menu">
      <Container>
        <h1>Cart</h1>
        <Table striped bordered hover responsive="sm">
          <tbody>
            {filteredCartItems &&
              filteredCartItems.map((cartItem) => (
                <tr>
                  <td>{cartItem.menuItems}</td>
                  <td>{cartItem.username}</td>
                  {/* <td>
                    {cartItem.dishname}
                    <span>{cartItem.ingredients}</span>
                  </td>
                  <td>$ {cartItem.price}</td> */}
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
