import MessagesCSS from './Messages.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import ChatItem from "./ChatItem/ChatItem";
import React from "react";

const Messages = (props) => {

    let dialoguesElements = props.messagePage.dialogueData.map((el) => <DialogueItem id={el.id} name={el.name} />)

    let messageElements = props.messagePage.messageData.map((el) => <ChatItem message={el.message} />)

    let newMessage = React.createRef();

    let editCurrentMessage = () => {
        props.dispatch({
            type: "EDIT-CURRENT-MESSAGE",
            currentText: newMessage.current.value
        });
    }

    let addMessage = () => {
        props.dispatch({
            type: "ADD-MESSAGE"
        })
    }

    return (
        <div className={MessagesCSS.message_wrapper}>

            <div className={MessagesCSS.dialogues}>
                {dialoguesElements}
            </div>

            <div className={MessagesCSS.chat}>
                {messageElements}

                <textarea ref={ newMessage } value={ props.messagePage.currentMessage.text} onChange={ editCurrentMessage }></textarea>
                <button onClick={ addMessage }>Send</button>
            </div>

        </div>
    )
}

export default Messages;