import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './app/store'

import './styles/index.scss'

import App from './app/App'

const container = document.getElementById('root')

const root = ReactDom.createRoot(container)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
