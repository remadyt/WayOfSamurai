import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";


export type FormDataType = {
    login:string
    password: string
    rememberMe: boolean

}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'input'} placeholder='login' name={'login'}/></div>
            <div><Field component={'input'} placeholder='password' name={'password'}/></div>
            <div><Field component={'input'} type="checkbox" name={'rememberMe'}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export let LoginReduxFrom = reduxForm<FormDataType>({form: 'login'})(LoginForm)

