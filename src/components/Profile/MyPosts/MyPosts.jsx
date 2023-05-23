import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div className={classes.posts}>new post</div>
            <Post />
            <Post />
            <Post />

        </div>

    )
}

export default MyPosts;