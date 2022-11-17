import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const objectDispatchToProps = {
    logout
}

const HeaderContainer = connect(mapStateToProps, objectDispatchToProps)(Header);

export default HeaderContainer;