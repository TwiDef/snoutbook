import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import classes from './Profile.module.css';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
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

export default connect(mapStateToProps, {
    setUserProfile
})(withRouter(ProfileContainer));
