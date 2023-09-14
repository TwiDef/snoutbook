import React from 'react';
import Users from './Users';
import axios from 'axios';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
} from '../../redux/users-reduces';

import {
    getUsers,
    getPageSize,
    getTotaUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from '../../redux/users-selectors';


//import classes from '';


/* UserContainer */
class UserContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totaUsersCount={this.props.totaUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
/* UserContainer */

/* 
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totaUsersCount: state.usersPage.totaUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
 */

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totaUsersCount: getTotaUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    /* withAuthRedirect, */
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    })
)(UserContainer)
