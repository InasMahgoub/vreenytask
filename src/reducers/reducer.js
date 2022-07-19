const initialState = {
  cart: [
    {
      "itemId": 1,
      "id": 1,
      "title": "iPhone 9",
      "price": 549,
      "amount": 1,
      "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    },
    {
      "itemId": 2,
      "id": 2,
      "title": "iPhone X",
      "price": 899,
      "amount": 2,
      "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    },
    {
      "itemId": 3,
      "id": 3,
      "title": "Samsung Universe 9",
      "price": 1249,
      "amount": 4,
      "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
    }
  ],
  "loggedIn": false,
  "currentUser": ''
}

const reducer = (state = initialState, action) => {

  // Handle DELETE_ITEM action
  
  if(action.type === 'DELETE_ITEM'){
    let newCart = state.cart.filter(cartItem => {
      return action.id !== cartItem.itemId;
    })
    return {
      ...state,
      cart: newCart
    }
  }


  // Handle DELETE_ITEM action

  else if(action.type === 'Add_ITEM_To_CART'){
    // console.log(state.cart.length)
    let newCart = state.cart
    if(newCart.length === 0){
      console.log(action.id)
      newCart.push(
        {
          "itemId": 1,
          "id": action.id,
          "title": action.id,
          "price": action.price,
          "amount": 1,
        },
      )
    }
    else if(newCart.filter(item => item.itemId === action.id).length > 0) {
      console.log(action.id)
      const index = newCart.findIndex(item => {
        return item.itemId === action.id;
      })

      newCart[index].amount++
      console.log(newCart[index])
    }
    else {
      console.log(action.id)
      newCart.push(
        {
          "itemId": newCart.length+1,
          "id": action.id,
          "title": action.id,
          "price": action.price,
          "amount": 1,
        },
      )
    }
    return {
      // ...state,
      cart: newCart

    }
  }

  // Handle LOGIN_USER action

  else if(action.type === 'LOGIN_USER'){
    console.log(action)
    let logState = true
    let user = action.userName
    console.log(state.loggedIn, state.currentUser)
    return {
      ...state,
      loggedIn: logState,
      currentUser: user
    }
  }

  console.log(state.loggedIn)

  return state;
} 


export default reducer