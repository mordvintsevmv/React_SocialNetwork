import MessagesCSS from './Messages.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import ChatItem from "./ChatItem/ChatItem";

const Messages = (props) => {

    let dialoguesElements = props.messagePage.dialogueData.map((el) => <DialogueItem id={el.id} name={el.name} />)

    let messageElements = props.messagePage.messageData.map((el) => <ChatItem message={el.message} />)


    return (
        <div className={MessagesCSS.message_wrapper}>

            <div className={MessagesCSS.dialogues}>
                {dialoguesElements}
            </div>

            <div className={MessagesCSS.chat}>
                {messageElements}
            </div>

        </div>
    )
}

export default Messages;