import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";



const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
    console.log('State changed')
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)