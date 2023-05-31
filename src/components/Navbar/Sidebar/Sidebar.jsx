import React from 'react';
import classes from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';


const Sidebar = (props) => {
    return (
        <div className={classes.sideBar}>
            <div className={classes.title}>Friends</div>
            <ul className={classes.list}>

                {(props.state.users).map(user => <SidebarItem
                    avatar={user.avatar}
                    name={user.name}
                    key={user.id} />)}

            </ul>
        </div>
    )
}

export default Sidebar;