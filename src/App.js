
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Component/Routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer /> 
   

    </div>
  );
}

export default App;
