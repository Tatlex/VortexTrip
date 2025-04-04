import React from "react";
import './index.css';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile  />} />
                        <Route path='/dialogs/*' element={<DialogsContainer  /> } />
                        <Route path='/users' element={<UsersContainer />} />
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
