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
export const createCartData = /* GraphQL */ `
  mutation CreateCartData(
    $input: CreateCartDataInput!
    $condition: ModelcartDataConditionInput
  ) {
    createCartData(input: $input, condition: $condition) {
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
export const updateCartData = /* GraphQL */ `
  mutation UpdateCartData(
    $input: UpdateCartDataInput!
    $condition: ModelcartDataConditionInput
  ) {
    updateCartData(input: $input, condition: $condition) {
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
export const deleteCartData = /* GraphQL */ `
  mutation DeleteCartData(
    $input: DeleteCartDataInput!
    $condition: ModelcartDataConditionInput
  ) {
    deleteCartData(input: $input, condition: $condition) {
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
