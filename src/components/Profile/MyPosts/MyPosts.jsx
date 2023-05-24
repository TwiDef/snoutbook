import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts

            <div className={classes.posts}>
                <textarea cols="30" rows="5"></textarea>
                <button>Add post</button>
            </div>

            <Post likesCount={15} message="first post" />
            <Post likesCount={5} message="second post" />
            <Post likesCount={23} message="another post" />
        </div>

    )
}

export default MyPosts;