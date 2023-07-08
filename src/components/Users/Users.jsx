import React from "react";
import userDefault from '../../assets/images/default-user.png';
import classes from './Users.module.css';

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
                    return <span
                        /* key={page.id} */
                        className={props.currentPage === page && classes.selectedPage}
                        onClick={(e) => { props.onPageChanged(page) }}>{page}
                    </span>
                })
            }
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ?
                            user.photos.small :
                            userDefault}
                            alt="avatar"
                            className={classes.userPhoto} />
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> :
                            <button onClick={() => { props.follow(user.id) }}>Follow</button>
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