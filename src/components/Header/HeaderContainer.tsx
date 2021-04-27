import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {auth} from "../../redux/auth-reducer";


type PropsType = {
    isAuth: boolean
    login: string | null
    auth: () => void
}

class HeaderContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
       this.props.auth()
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

export default connect (mapStateToProps, {auth})(HeaderContainer);