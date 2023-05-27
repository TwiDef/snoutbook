import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src="https://media.tproger.ru/uploads/2016/10/reactmini.png" alt="background" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + descr
            </div>

        </div>
    )
}

export default ProfileInfo;