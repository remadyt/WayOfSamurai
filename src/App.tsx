import React from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import  {RootStateType} from './redux/state'

type PropsType = {
    state: RootStateType
}

function App(props:PropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile state={props.state}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state} />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;