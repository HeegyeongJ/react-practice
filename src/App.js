import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootElement from './components/RootElement';
import Welcome from './components/Welcome';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import ErrorPage from './components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootElement />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:'/welcome', element: <Welcome/>
        },
        {
          path: '/products', element: <Products />
        },
        {
          path: '/products/:productId',
          element: <ProductDetail/>
        }
        
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
