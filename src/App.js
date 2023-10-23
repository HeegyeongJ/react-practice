import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from './store/cart-slice';

let isInitial = true; 

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if(isInitial){ // 최초 1회만 데이터를 보내게?
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch])
  
  // useEffect(() => {
  //   fetch('https://react-test-cf689-default-rtdb.firebaseio.com/cart.json',{
  //     method: 'PUT',
  //     body: JSON.stringify(cart)
  //   })
  // }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
