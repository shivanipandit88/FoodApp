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
      resName
      username
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
      resName
      username
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
      resName
      username
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const createCartTable = /* GraphQL */ `
  mutation CreateCartTable(
    $input: CreateCartTableInput!
    $condition: ModelCartTableConditionInput
  ) {
    createCartTable(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const updateCartTable = /* GraphQL */ `
  mutation UpdateCartTable(
    $input: UpdateCartTableInput!
    $condition: ModelCartTableConditionInput
  ) {
    updateCartTable(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const deleteCartTable = /* GraphQL */ `
  mutation DeleteCartTable(
    $input: DeleteCartTableInput!
    $condition: ModelCartTableConditionInput
  ) {
    deleteCartTable(input: $input, condition: $condition) {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
