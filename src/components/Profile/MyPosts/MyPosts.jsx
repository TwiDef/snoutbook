import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import AddNewPostFormRedux from './AddPostForm';

const MyPosts = (props) => {

    const postsElements = props.posts
        .map((post, index) => <Post
            key={index}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
        />)

    /* let newPostElement = React.createRef(); */

    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;