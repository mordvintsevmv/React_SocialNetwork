import MessagesCSS from './Messages.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import ChatItem from "./ChatItem/ChatItem";
import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/state";

const Messages = (props) => {

    let dialoguesElements = props.messagePage.dialogueData.map((el) => <DialogueItem id={el.id} name={el.name} />)

    let messageElements = props.messagePage.messageData.map((el) => <ChatItem message={el.message} />)

    let newMessage = React.createRef();

    let onMessageChange = () => {
        props.dispatch(onMessageChangeActionCreator(newMessage.current.value));
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={MessagesCSS.message_wrapper}>

            <div className={MessagesCSS.dialogues}>
                {dialoguesElements}
            </div>

            <div className={MessagesCSS.chat}>
                {messageElements}

                <textarea ref={ newMessage } value={ props.messagePage.currentMessage.text} onChange={ onMessageChange }></textarea>
                <button onClick={ addMessage }>Send</button>
            </div>

        </div>
    )
}

export default Messages;