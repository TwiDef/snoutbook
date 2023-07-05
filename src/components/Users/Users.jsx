import React from 'react';
import classes from './Users.module.css';
import axios from 'axios'
import userDefault from '../../assets/images/default-user.png'
//import classes from '';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totaUsersCount / this.props.pageSize)
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {
                        pages.map(page => {
                            return <span
                                className={this.props.currentPage === page && classes.selectedPage}
                                onClick={(e) => { this.onPageChanged(page) }}>{page}
                            </span>
                        })
                    }
                </div>
                {
                    this.props.users.map(user => <div key={user.id}>
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
                                    <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button> :
                                    <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
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
        )
    }
}

export default Users;