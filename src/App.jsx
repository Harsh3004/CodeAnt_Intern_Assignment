import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import SignInPage from './Pages/SignInPage'
import DashboardPage from './Pages/DashboardPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignInPage/>
    }, 
    {
      path: 'dashboard',
      element: <DashboardPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Outlet/>
    </>
  )
}

export default App
