import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { ThemeProvider } from './components/theme-provider.tsx'
import { ModeToggle } from './components/mode-toggle.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      {/* theme toggel button  */}
      <div className="absolute bottom-3 right-3">
        <ModeToggle />
      </div>

      <BrowserRouter>
        <App />
      </BrowserRouter>

      {/* toaster section */}
      <Toaster richColors />

    </ThemeProvider>
  </Provider>
  ,
)
