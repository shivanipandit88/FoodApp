import { API, Auth } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import { listCartTables } from "../graphql/queries";

export default function Cart() {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const [userData, setUserData] = useState({ payload: { username: "" } });

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

    
  }

  return (
    <div className="main menu">
      <Container>
        <h1>Cart</h1>
        <Table striped bordered hover responsive="sm">
          <tbody>
            {cartItem &&
              cartItem.map((cartItem) => (
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
