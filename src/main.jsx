import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCQe0Zw0dtWUbJXNGTeHK3bPCsoaxtUOaY",
  authDomain: "canvasexpress-f2853.firebaseapp.com",
  projectId: "canvasexpress-f2853",
  storageBucket: "canvasexpress-f2853.appspot.com",
  messagingSenderId: "426311139254",
  appId: "1:426311139254:web:f4f17fff934669fe744b17",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
