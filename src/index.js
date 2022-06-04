import React from "react";
import { createRoot } from 'react-dom/client'; 
import Home from "./views/Home/Home";
import './assets/style/main.css';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);