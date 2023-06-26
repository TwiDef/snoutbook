import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewTextPostActionsCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    const postsElements = props.posts
        .map((post, index) => <Post
            key={index}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
        />)

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewTextPostActionsCreator(text))
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;