import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addPost, newPostText, subscribe} from "./redux/state";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPostText={newPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
    console.log('State changed')
}

rerenderEntireTree()
subscribe(rerenderEntireTree)