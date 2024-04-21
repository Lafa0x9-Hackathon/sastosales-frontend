import Navbar from "./components/navBar/navbar";
// import FilterPopUp from "./components/navBar/filterPopUp/filterPopUp";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/nav",
    element: <Navbar />,
    errorElement: <div>404 Not Found</div>
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
