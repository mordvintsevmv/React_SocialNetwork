import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {

    const AuthRedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to="/login"/>
        return <Component {...props}/>
    }

    return connect(mapStateToProps)(AuthRedirectComponent)
}