import { RouterProvider, createBrowserRouter } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPastes from './components/ViewPastes'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/pastes",
      element: <div>
        <Navbar />
        <Paste />
      </div>
    },
    {
      path: "/pastes/:id",
      element: <div>
        <Navbar />
        <ViewPastes />
      </div>
    },
  ]
)

function App() {

  return (
    <div className='flex justify-center'>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
