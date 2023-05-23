import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://media.tproger.ru/uploads/2016/10/reactmini.png" alt="background" />
            </div>
            <div>
                ava + descr
            </div>
            <div >
                my posts
                <div className='posts'>new post</div>
                <div className={classes.item}>opost 1</div>
                <div className={classes.item}>opost 2</div>
            </div>
        </div>
    )
}

export default Profile;