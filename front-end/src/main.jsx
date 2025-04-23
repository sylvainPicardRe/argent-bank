import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import './styles/index.scss'

import App from './app/App'

const container = document.getElementById('root')

const root = ReactDom.createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
