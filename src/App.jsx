import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Market from './components/Market';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: '/market',
      element: (
        <>
          <Navbar />
          <Market />
          <Footer />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
