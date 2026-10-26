import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ThemeProvider } from './components/themeContext.js'
import { EditorTabsProvider } from './components/hooks/useEditorTabs.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider>
      <EditorTabsProvider initialFile="all-projects">
        <App />
      </EditorTabsProvider>
    </ThemeProvider>

  </StrictMode>,
)
