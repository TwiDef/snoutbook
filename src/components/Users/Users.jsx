import React from 'react';
import classes from './Users.module.css';
//import classes from '';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/1234/1234844.png',
                followed: false,
                fullName: "Dmitriy",
                status: "some status",
                location: {
                    city: "Minsk",
                    country: "Belarus"
                }
            },
            {
                id: 2,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/1205/1205645.png',
                followed: false,
                fullName: "Andrey",
                status: "another status",
                location: {
                    city: "Riga",
                    country: "Latvia"
                }
            },
            {
                id: 3,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/1680/1680401.png',
                followed: true,
                fullName: "Alex",
                status: "like fishing",
                location: {
                    city: "Bratislava",
                    country: "Slovakia"
                }
            },
            {
                id: 4,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/3066/3066718.png',
                followed: true,
                fullName: "Sarah",
                status: "none",
                location: {
                    city: "Paris",
                    country: "France"
                }
            },
            {
                id: 5,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/3384/3384516.png',
                followed: true,
                fullName: "Galthran",
                status: "none",
                location: {
                    city: "Necropolis",
                    country: "HoM"
                }
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl}
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
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;