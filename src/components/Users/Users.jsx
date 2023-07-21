import React from "react";
import userDefault from '../../assets/images/default-user.png';
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totaUsersCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(page => {
                    return <span key={page}
                        /* className={props.currentPage === page && classes.selectedPage} */
                        className={props.currentPage ? page : classes.selectedPage}
                        onClick={(e) => { props.onPageChanged(page) }}>{page}
                    </span>
                })
            }
        </div>
        {
            props.users.map(user =>
                <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ?
                                    user.photos.small :
                                    userDefault}
                                    alt="avatar"
                                    className={classes.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.follow(user.id) }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>)
        }
    </div>
}

export default Users;