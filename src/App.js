import React from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContaner';
import { initializeApp } from './redux/app-reducer';

import './App.css';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

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
}

/* ************************************************************************************************* */
/*  wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5 */
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }} />
        )
    }
    return ComponentWithRouterProp;
}
/*  wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5 */
/* ************************************************************************************************* */

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, { initializeApp }),
    withRouter,
)(App)