import React from "react";
import './index.css';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                 dispatch={props.dispatch} /> } />
                        <Route path='/dialogs/*' element={<Dialogs store={props.store} /> } />
                                                                {/*  /*  dialogsData={props.state.dialogsPage.dialogsData}
                                                                         messageData={props.state.dialogsPage.messageData}/>}/>
                                                                        */}
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
