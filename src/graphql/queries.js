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
      resid
      username
      restaurant {
        id
        name
        description
        image
        username
        createdAt
        updatedAt
      }
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
        resid
        username
        restaurant {
          id
          name
          description
          image
          username
          createdAt
          updatedAt
        }
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
export const getCartData = /* GraphQL */ `
  query GetCartData($id: ID!) {
    getCartData(id: $id) {
      id
      username
      menuID
      menu {
        id
        dishname
        ingredients
        image
        price
        resid
        username
        restaurant {
          id
          name
          description
          image
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCartDatas = /* GraphQL */ `
  query ListCartDatas(
    $filter: ModelcartDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        menuID
        menu {
          id
          dishname
          ingredients
          image
          price
          resid
          username
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
