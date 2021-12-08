import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import { listCartDatas } from "../graphql/queries";
import { deleteCartData } from "../graphql/mutations";

export default function Cart() {
  const location = useLocation();
  const [userData, setUserData] = useState("");
  const [cartItem, setCartItem] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const fetchCartData = async () => {
      console.log("user",location.state.id.payload.username)
      await API.graphql(
        graphqlOperation(listCartDatas, {
          filter: {
            username: {
              eq: location.state.id.payload.username,
            },
          },
        })
      )
        .then((apiData) => {
          setCartItem(apiData.data.listCartDatas.items);
          console.log(cartItem);
        })
        .catch((e) => console.log("No apidata", e));
    };

    fetchCartData();
  }, [setCartItem]);

  async function placeOrder() {
    const map = new Map();
    console.log("cart1", cartItem);

    cartItem.map((item) => {
      var todoDetails = {
        id: item.id,
      };
      console.log("todo", todoDetails);
      API.graphql({ query: deleteCartData, variables: { input: todoDetails } });
    });
    alert("order has been placed");
    setCartItem([]);
  }

  function routeChange(){ 
    let path = `/#`; 
    console.log("route Change called")
    history.push(path);
  }


  return (
    <div className="main menu">
      <Container>
        <h1>Cart {userData}</h1>
        <button
          onClick={() => {
            placeOrder();
            routeChange();
          }}
          className="btn btn-dark"
        >
          Place Order
        </button>
        <Table striped bordered hover responsive="sm">
          <tbody>
            {cartItem &&
              cartItem.map((item) => (
                <tr>
                  <td>{item.menu.dishname}</td>
                  <td>{item.menu.ingredients}</td>
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
