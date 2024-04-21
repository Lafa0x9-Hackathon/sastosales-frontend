import Navbar from "./components/navBar/navbar";
// import FilterPopUp from "./components/navBar/filterPopUp/filterPopUp";
import Review from "./components/review/review.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/nav",
    element: <Navbar />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/review",
    element: <Review />,
    errorElement: <div>404 Not Found</div>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
