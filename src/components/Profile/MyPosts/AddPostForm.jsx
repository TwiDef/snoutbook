import React from "react";
import { Field, reduxForm } from "redux-form";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Введите текст поста"}
                    name={"newPostText"}
                    component={"textarea"} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)
export default AddNewPostFormRedux;