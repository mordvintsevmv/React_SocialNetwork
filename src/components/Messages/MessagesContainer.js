import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/MessagePageReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let state = props.store.getState();

    let messageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return (
       <Messages messageChange={messageChange} addMessage={addMessage} dialogueData={state.messagePage.dialogueData} currentMessage={state.messagePage.currentMessage} messageData={state.messagePage.messageData}/>
    )
}

export default MessagesContainer;