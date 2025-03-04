import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className='bg-gray-800 h-screen p-4'>
    <Provider store={store}>
        <App />
    </Provider>
      </div>
  </StrictMode>,
)
