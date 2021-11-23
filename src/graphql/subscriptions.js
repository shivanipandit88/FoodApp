/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
export const onCreateAddMenu = /* GraphQL */ `
  subscription OnCreateAddMenu {
    onCreateAddMenu {
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
export const onUpdateAddMenu = /* GraphQL */ `
  subscription OnUpdateAddMenu {
    onUpdateAddMenu {
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
export const onDeleteAddMenu = /* GraphQL */ `
  subscription OnDeleteAddMenu {
    onDeleteAddMenu {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      username
      menuItems
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCartData = /* GraphQL */ `
  subscription OnCreateCartData {
    onCreateCartData {
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
export const onUpdateCartData = /* GraphQL */ `
  subscription OnUpdateCartData {
    onUpdateCartData {
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
export const onDeleteCartData = /* GraphQL */ `
  subscription OnDeleteCartData {
    onDeleteCartData {
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
