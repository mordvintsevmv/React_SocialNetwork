import DialogueItemCSS from "./DialogueItem.module.css";
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {

    return (
        <div className={DialogueItemCSS.dialogue_item}>
            <NavLink to={props.id} className = { navData => navData.isActive ? DialogueItemCSS.dialogue_active : DialogueItemCSS.dialogue_inactive }>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem;