import {connect} from "react-redux";
import {checkAuth} from "../../redux/authReducer";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const objectDispatchToProps = {
    checkAuth,
}

const HeaderContainer = connect(mapStateToProps, objectDispatchToProps)(Header);

export default HeaderContainer;