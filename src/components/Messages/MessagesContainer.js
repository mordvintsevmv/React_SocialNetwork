import {addMessage, changeMessage} from "../../redux/MessagePageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return ({
        messagePage: state.messagePage
    })
}

let objectDispatchToProps = {
    addMessage,
    changeMessage
}

const MessagesContainer = connect(mapStateToProps, objectDispatchToProps)(Messages);

export default MessagesContainer;