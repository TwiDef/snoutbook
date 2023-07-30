import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Введите текст поста"}
                    name={"newPostText"}
                    component={Textarea}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)
export default AddNewPostFormRedux;