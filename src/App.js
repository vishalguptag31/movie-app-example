import React from "react";
import { Provider } from "react-redux";
import store from "./redux//store";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
}

export default App;




















/*
   Installation 

   1. npm install node-sass --save 
   2. npm install --save react-router-dom
   3. npm install --save bootstrap
           add import 'bootstrap/dist/css/bootstrap.css';      in index.js
   4. npm install --save reactstrap
   5. npm install --save prop-types


   ##########################
   REDUX

   1. npm install redux react-redux redux-thunk
    2. npm i redux-devtools-extension
*/
