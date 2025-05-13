import React from "react";
import './index.css';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer  />} />
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
