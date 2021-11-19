/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
export const createAddMenu = /* GraphQL */ `
  mutation CreateAddMenu(
    $input: CreateAddMenuInput!
    $condition: ModelAddMenuConditionInput
  ) {
    createAddMenu(input: $input, condition: $condition) {
      id
      dishname
      ingredients
      image
      price
      dishid
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
export const updateAddMenu = /* GraphQL */ `
  mutation UpdateAddMenu(
    $input: UpdateAddMenuInput!
    $condition: ModelAddMenuConditionInput
  ) {
    updateAddMenu(input: $input, condition: $condition) {
      id
      dishname
      ingredients
      image
      price
      dishid
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
export const deleteAddMenu = /* GraphQL */ `
  mutation DeleteAddMenu(
    $input: DeleteAddMenuInput!
    $condition: ModelAddMenuConditionInput
  ) {
    deleteAddMenu(input: $input, condition: $condition) {
      id
      dishname
      ingredients
      image
      price
      dishid
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
