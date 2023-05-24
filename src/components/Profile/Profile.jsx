import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://media.tproger.ru/uploads/2016/10/reactmini.png" alt="background" />
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;