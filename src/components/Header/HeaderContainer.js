import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {useEffect} from "react";
import {setUserData} from "../../redux/authReducer";

const HeaderAPI = (props) => {

    const loadAuth = () => {

        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(r => {
                if (r.data.resultCode === 0) {
                    props.setUserData(r.data.data.id, r.data.data.email, r.data.data.login);
                }
            })
    }

    useEffect(() => {
        loadAuth();
    }, [loadAuth])


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