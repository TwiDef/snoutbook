import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormsControl";
import { required } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login, logout } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import classes from './../common/FormsControl/FormsControl.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                    name={"email"}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"}
                    name={"rememberMe"}
                    component={Input} />
                remember me
            </div>

            {props.error && <div className={classes.formSummaryError}> {props.error} </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);