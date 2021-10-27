import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UrlProvider } from './contexts/urls';

import "./main.scss";

ReactDOM.render(
  <React.StrictMode>
    <UrlProvider>
      <App />
    </UrlProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
