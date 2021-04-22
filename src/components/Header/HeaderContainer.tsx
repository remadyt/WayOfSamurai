import React from 'react';
import Header from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";

type PropsType = {
    setAuthUserData: (data: DataType) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials:true}).then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login:string | null
}


const mapStateToProps = (state:AppStateType): mapStateToPropsType=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);