import {addMessage, changeMessage} from "../../redux/MessagePageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return ({
        messagePage: state.messagePage,
    })
}

let objectDispatchToProps = {
    addMessage,
    changeMessage
}

const MessagesContainer = connect(mapStateToProps, objectDispatchToProps)(withAuthRedirect(Messages));

export default MessagesContainer;