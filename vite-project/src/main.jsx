import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; //para generar rutas en la app
import { store } from "../redux/store/store.jsx";
import { Provider } from "react-redux"; //permite q los componentes tengan acceso al estado de redux

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </div>
);
