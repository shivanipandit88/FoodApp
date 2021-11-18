/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      description
      image
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
