import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.tsx';
import './index.css';
import Provider from './context/Provider.tsx';
import ScrollToTop from "./components/scrollToTop";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <Provider>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
