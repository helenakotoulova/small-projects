import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
//import {AppProvider} from './stripeMenu/context/context';
import ContextProvider from './stripe-ja/context/context';

ReactDOM.render(<ContextProvider><BrowserRouter><App /></BrowserRouter></ContextProvider>, document.getElementById("root"));
