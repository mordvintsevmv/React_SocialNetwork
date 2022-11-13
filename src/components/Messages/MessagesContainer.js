import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/MessagePageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return ({
        messagePage: state.messagePage
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        messageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    })
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;