import DialogueItemCSS from "./DialogueItem.module.css";
import {Link} from "react-router-dom";

const DialogueItem = (props) => {

    return (<div className={DialogueItemCSS.dialogue_item}>
        <Link to={"/messages/" + props.id}
                 className={navData => navData.isActive ? DialogueItemCSS.dialogue_active : DialogueItemCSS.dialogue_inactive}>{props.name}</Link>
    </div>)
}

export default DialogueItem;