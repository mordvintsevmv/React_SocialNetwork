import {connect} from "react-redux";
import Header from "./Header";
import {useEffect} from "react";
import {setUserData} from "../../redux/authReducer";
import {serverCheckAuth} from "../../api/api";

const HeaderAPI = (props) => {

    const loadAuth = () => {

        serverCheckAuth().then(r => {
            if (r.resultCode === 0) {
                props.setUserData(r.data.id, r.data.email, r.data.login);
            }
        })
    }

    useEffect(() => {
        loadAuth();
    }, [])

    return (<Header {...props}/>)
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    setUserData,
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI);

export default HeaderContainer;