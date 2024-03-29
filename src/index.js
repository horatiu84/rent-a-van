import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
} 

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
        <App/>
  </BrowserRouter>
);
