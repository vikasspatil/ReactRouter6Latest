import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//Its default export component without using {}.
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import { About } from './pages/About';
import { Page1 } from './pages/Page1';
import { Page2 } from "./pages/Page2";
import { UseRef } from './hooks/useref/UseRef';
import { AppLayout } from './componants/Layout/AppLayout';
import { FnContextProvider } from './hooks/usecontext/ContextProviderPage';
import UserForm from './hooks/usestate/UserForm';


function App() {
  /*const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home pagetitle={'Home'} />},
        {path: "about", element: <About pagetitle={'About'} />},
        {path: "useref", element: <UseRef pagetitle={'User Ref'} />},
        {path: "usecontext", element: <UseContext pagetitle={'Use Context'} />}
      ]
    }
    
  ]);*/
  const router = createBrowserRouter ([
    {
      path:'/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home pagetitle={'Home'} />},
        {path: "about", element: <About pagetitle={'About'} />,
          // Ase asel tar page about page madhe page1 ani page2 open hotil.
          /*children: [
            {
              path: "page1",
              element: <Page1 pagetitle="Page 1" />
            },
            {
              path: "page2",
              element: <Page2 pagetitle="Page 2" />
            }
          ]*/
        },
        // jar about chi subpages seprate open karaychi asel tar about page madhe outlet comment karun thevaycha.
        // Ani path children chya baher kadhun asa root var anaycha. Navbar madhe kahi change nahi karaycha.
        // About page madhe outlet comment karun thevaycha. Navbar madhe about dropdown madhe page1 ani page2 link add karayche.
        {
          path: "about/page1",
          element: <Page1 pagetitle="Page 1" />
        },
        {
          path: "about/page2",
          element: <Page2 pagetitle="Page 2" />
        },
        {path: "useref", element: <UseRef pagetitle={'User Ref'} />},
        {path: "usecontext", element: <FnContextProvider pagetitle={'Use Context'} />},
        {path: "useState", element: <UserForm pagetitle={'Use State'} />}
      ]
    }
  ]);
  /*const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home pageprops={'Information'} />} errorElement={<ErrorPage />} />
        <Route path='/about' element={<About pageprops={'Information'} />} errorElement={<ErrorPage />} />
      </Route>
    )
  );*/
  return (
    // <FnContextProvider>
    //   <RouterProvider router={router} />
    // </FnContextProvider>
    <RouterProvider router={router} />
  )
}

export default App
