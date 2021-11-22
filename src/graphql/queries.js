/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      description
      image
      username
      createdAt
      updatedAt
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddMenu = /* GraphQL */ `
  query GetAddMenu($id: ID!) {
    getAddMenu(id: $id) {
      id
      dishname
      ingredients
      image
      price
      resName
      username
      createdAt
      updatedAt
    }
  }
`;
export const listAddMenus = /* GraphQL */ `
  query ListAddMenus(
    $filter: ModelAddMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dishname
        ingredients
        image
        price
        resName
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        menuItems
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        menuItems
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCartTable = /* GraphQL */ `
  query GetCartTable($id: ID!) {
    getCartTable(id: $id) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const listCartTables = /* GraphQL */ `
  query ListCartTables(
    $filter: ModelCartTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        menuItems
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
