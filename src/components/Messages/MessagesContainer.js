import {addMessage, changeMessage} from "../../redux/MessagePageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return ({
        messagePage: state.messagePage,
    })
}

let objectDispatchToProps = {
    addMessage,
    changeMessage
}

export default compose(withAuthRedirect, connect(mapStateToProps, objectDispatchToProps))(Messages);