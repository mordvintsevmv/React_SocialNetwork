import MessagesCSS from './Messages.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import ChatItem from "./ChatItem/ChatItem";
import React from "react";

const Messages = (props) => {

    let dialoguesElements = props.dialogueData.map((el) => <DialogueItem id={el.id} name={el.name} />)

    let messageElements = props.messageData.map((el) => <ChatItem message={el.message} />)

    let newMessage = React.createRef();

    let onMessageChange = () => {
        props.messageChange(newMessage.current.value);
    }

    let onAddMessage = () => {
        props.addMessage();
    }

    return (
        <div className={MessagesCSS.message_wrapper}>

            <div className={MessagesCSS.dialogues}>
                {dialoguesElements}
            </div>

            <div className={MessagesCSS.chat}>
                {messageElements}

                <textarea ref={ newMessage } value={ props.currentMessage.text} onChange={ onMessageChange }></textarea>
                <button onClick={ onAddMessage }>Send</button>
            </div>

        </div>
    )
}

export default Messages;