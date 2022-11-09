import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/MessagePageReducer";
import Messages from "./Messages";
// import {Old_storeContext} from "../../old_storeContext";
import {connect} from "react-redux";

// const OldMessagesContainer = () => {
//
//     return (
//         <Old_storeContext.Consumer>{
//             (store) => {
//
//                 let messageChange = (text) => {
//                     store.dispatch(onMessageChangeActionCreator(text));
//                 }
//
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                 }
//
//                 return (
//                     <Messages
//                         messageChange={messageChange}
//                         addMessage={addMessage}
//                         messagePage={store.getState().messagePage}/>
//                 );
//             }
//         }
//
//         </Old_storeContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return({
        messagePage: state.messagePage
        })
}

let mapDispatchToProps = (dispatch) => {
    return({
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