import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from "./routes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
