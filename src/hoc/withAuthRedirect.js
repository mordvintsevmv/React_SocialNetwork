import {Navigate} from "react-router-dom";
import React from "react";

export const withAuthRedirect = (Component) => {

    return (props) => {
        if (!props.isAuth) return <Navigate to="/login"/>
        return <Component {...props}/>
    }
}