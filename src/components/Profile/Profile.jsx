import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

import classes from './Profile.module.css';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />
            <MyPostsContainer  /* store={props.store} */ />
        </div>
    )
}

export default Profile;