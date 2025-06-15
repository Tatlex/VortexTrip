import React from "react";
import './index.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer />} />
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
