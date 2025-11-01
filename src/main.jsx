import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './reduxStore/store.js'

// Apply theme from localStorage on app load
const applyTheme = () => {
  const theme = localStorage.getItem('theme') || 'dark'
  document.documentElement.setAttribute('data-theme', theme)
}

applyTheme()

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
