import React from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {StoreType} from "./typeAll";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";


type PropsType = {
    store:StoreType
}

function App(props:PropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile store={props.store}  />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;