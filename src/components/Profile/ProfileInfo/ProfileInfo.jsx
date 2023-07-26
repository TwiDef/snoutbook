import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultUser from '../../../assets/images/default-user.png'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            {/* <div>
                <img src="https://media.tproger.ru/uploads/2016/10/reactmini.png" alt="background" />
            </div> */}
            <div className={classes.descriptionBlock}>
                <img width={300} height={300}
                    src={props.profile.photos.large
                        ? props.profile.photos.large
                        : defaultUser} alt="" />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <p>{props.profile.aboutMe}</p>
            </div>

        </div>
    )
}

export default ProfileInfo;