export const deleteCartItem = (id) => {
     return{
        type: 'DELETE_ITEM',
        id: id
     }
}

export const addToCartAction = (id, title, price) => {
    return{
       type: 'Add_ITEM_To_CART',
       id,
       title,
       price
    }
}


export const loginAction = (logInOut, userName) => {
    return {
        type: 'LOGIN_USER',
        logInOut,
        userName
    }
}