import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsElements = props.posts.map((post, index) =>
        <Post
            key={index}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
        />)

    return (
        <div className={classes.postBlock}>

            <h3>My posts</h3>

            <div>

                <div>
                    <textarea cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;