import React from "react";
import './index.css';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile store={props.store} />} />
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store} /> } />
                        <Route path='/news' element={""}/>
                        <Route path='/music' element={""}/>
                        <Route path='/settings' element={""}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
