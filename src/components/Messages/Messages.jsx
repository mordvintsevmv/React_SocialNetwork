import MessagesCSS from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={MessagesCSS.message_wrapper}>

            <div className={MessagesCSS.dialogues}>

                <div className={MessagesCSS.dialogue_item}>
                    <NavLink to="1" className = { navData => navData.isActive ? MessagesCSS.dialogue_active : MessagesCSS.dialogue_inactive }>Maksim</NavLink>
                </div>

                <div className={MessagesCSS.dialogue_item}>
                    <NavLink to="2" className = { navData => navData.isActive ? MessagesCSS.dialogue_active : MessagesCSS.dialogue_inactive }>Andrey</NavLink>
                </div>

                <div className={MessagesCSS.dialogue_item}>
                    <NavLink to="3" className = { navData => navData.isActive ? MessagesCSS.dialogue_active : MessagesCSS.dialogue_inactive }>Anton</NavLink>
                </div>

                <div className={MessagesCSS.dialogue_item}>
                    <NavLink to="4" className = { navData => navData.isActive ? MessagesCSS.dialogue_active : MessagesCSS.dialogue_inactive }>Masha</NavLink>
                </div>

                <div className={MessagesCSS.dialogue_item}>
                    <NavLink to="5" className = { navData => navData.isActive ? MessagesCSS.dialogue_active : MessagesCSS.dialogue_inactive }>Igor</NavLink>
                </div>

                <div className={MessagesCSS.dialogue_item}>
                    <NavLink to="6" className = { navData => navData.isActive ? MessagesCSS.dialogue_active : MessagesCSS.dialogue_inactive }>Nick</NavLink>
                </div>

            </div>

            <div className={MessagesCSS.chat}>
                <div className={MessagesCSS.chat_item}>Hi!</div>
                <div className={MessagesCSS.chat_item}>Good News!</div>
                <div className={MessagesCSS.chat_item}>GoodBye!</div>
            </div>

        </div>
    )
}

export default Messages;