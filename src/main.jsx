import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import './index.css'
import App from './App.jsx'
import ReduxInitializer from './components/common/ReduxInitializer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ReduxInitializer />
      <App />
    </Provider>
  </StrictMode>,
)
