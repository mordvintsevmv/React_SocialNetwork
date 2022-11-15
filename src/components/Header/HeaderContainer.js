import {connect} from "react-redux";
import Header from "./Header";
import {useEffect} from "react";
import {checkAuth} from "../../redux/authReducer";

const HeaderAPI = (props) => {

    useEffect(() => {
        props.checkAuth();
    }, [])

    return (<Header {...props}/>)
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const objectDispatchToProps = {
    checkAuth,
}

const HeaderContainer = connect(mapStateToProps, objectDispatchToProps)(HeaderAPI);

export default HeaderContainer;