import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// render e que vai renderiza o processamento do react
//mas antes ele chama o css root
//index.html
// <div id="root"></div>
//o react vai injeta todo o visual dentro deste div id="root"

//render vai renderiza o resulta do componente  App
//App fica neste local src\App.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
