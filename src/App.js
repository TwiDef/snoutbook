import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContaner';

import './App.css';
import Login from './components/Login/Login';


function App(props) {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar /* state={props.state.sideBar} */ />

            <div className="app-wrapper-content">
                <Routes>

                    <Route path="/profile/:userId?"
                        element={<ProfileContainer
                        //store={props.store}
                        />} />

                    <Route path="/dialogs/*" element={<DialogsContainer
                    //store={props.store}
                    />} />

                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />

                </Routes>
            </div>
        </div>
    );
}

export default App;
