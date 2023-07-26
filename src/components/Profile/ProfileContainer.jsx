import React from 'react';
import { useLocation, useNavigate, useParams, Navigate } from 'react-router-dom';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import classes from './Profile.module.css';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidUpdate() {

    }

    render() {
        /* if (!this.props.isAuth) return <Navigate to="/login" /> */

        return (
            <div>
                <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
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

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

