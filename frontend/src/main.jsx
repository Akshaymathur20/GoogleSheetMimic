import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Spreadsheet from './components/Spreadsheet.jsx'
import SpreadsheetProvider from './context/SpreadsheetContext.jsx'

createRoot(document.getElementById('root')).render(
  <SpreadsheetProvider>
  <App />
</SpreadsheetProvider>,
)
