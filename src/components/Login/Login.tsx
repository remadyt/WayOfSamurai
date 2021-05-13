import React from 'react';
import {FormDataType, LoginReduxFrom} from "./LoginForm/LoginForm";


const Login = () => {
    const onSubmit =  (FormData:FormDataType) => {
        console.log(FormData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
           <LoginReduxFrom onSubmit={onSubmit} />
        </div>
    );
};

export default Login;