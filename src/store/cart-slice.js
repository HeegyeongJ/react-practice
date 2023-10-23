import { createSlice } from '@reduxjs/toolkit';

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('https://react-test-cf689-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if(!response.ok){
        throw new Error('실패');
      }
    }

    try{
      await sendRequest();
    }catch(error){
      console.error(error.message);
    }
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) { /*TODO- 여기에 코드를 작성해 주세요*/
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if(!existingItem){
        state.items.push({
          id:newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        })
      }else{
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price + newItem.price;
      }
  },
    removeItemFromCart(state, action) { /*TODO- 여기에 코드를 작성해 주세요*/
    const id = action.payload;
    const existingItem = state.items.find(item => item.id === id)
    state.totalQuantity--;
    if(existingItem.quantity === 1){
      state.items = state.items.filter(item => item.id !== id);
    }else{
      existingItem.quantity--;
      existingItem.totalPrice -= existingItem.price
    }
  },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;