import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControl/FormsControl";
import { required, maxLengthCreator } from './../../utils/validators/validators'

const maxLength30 = maxLengthCreator(30)

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"}
                    name={"newMessageBody"}
                    component={Textarea}
                    validate={[required, maxLength30]} />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)
export default AddMessageFormRedux;

