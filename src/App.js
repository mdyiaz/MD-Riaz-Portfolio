import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Main from './layout/Main';
import Contacts from './Pages/Contacts/Contacts';
import MySkills from './Pages/MySkills/MySkills';
import Projects from './Pages/Projects/Projects';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'contacts',
          element:<Contacts></Contacts>
        },
        {
          path:'myskills',
          element:<MySkills></MySkills>
        },
        {
          path:'projects',
          element:<Projects></Projects>
        }
      ]
    }

  ])
  return (
    <div className='bg-zinc-900'>
      
      <RouterProvider router={router}>

      </RouterProvider>
      
    </div>
  );
}

export default App;
