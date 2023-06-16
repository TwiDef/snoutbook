import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import './App.css';

function App(props) {

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar state={props.state.sideBar} />

            <div className="app-wrapper-content">
                <Routes>

                    <Route path="/profile" element={<Profile
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                        state={props.state.profilePage} />} />

                    <Route path="/dialogs/*" element={<Dialogs
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
                        state={props.state.dialogsPage} />} />

                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />

                </Routes>
            </div>
        </div>
    );
}

export default App;
