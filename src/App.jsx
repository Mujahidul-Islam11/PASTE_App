import { RouterProvider, createBrowserRouter } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPastes from './components/ViewPastes'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: "/pastes",
      element: <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path: "/pastes/:id",
      element: <div>
        <Navbar/>
        <ViewPastes/>
      </div>
    },
  ]
)

function App() {

  return (
    <div className='flex justify-center p-12 h-[100vh] bg-gray-800'>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
