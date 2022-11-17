import LoginForm from "./LoginForm";
import LoginCSS from './Login.module.css'
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const Login = (props) => {

    if (props.isAuth){
        return <Navigate to={`/profile/${props.id}`}/>
    }

    return (<div>

        <div className={LoginCSS.page_name}>Login!</div>

        <LoginForm login={props.login}/>
    </div>)
}

const mapDispatchToProps = {
    login
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
