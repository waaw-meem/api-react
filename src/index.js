import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
import SearchImageAPI from "./api.js";

SearchImageAPI()

const el = document.getElementById('root')

const root = ReactDOM.createRoot(el)

root.render(<App/>)