import NavCSS from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={NavCSS.nav}>

            <div className={NavCSS.item_block}>
                <NavLink to="/profile" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Profile</NavLink>
            </div>

            <div className={NavCSS.item_block}>
                <NavLink to="/messages" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Messages</NavLink>
            </div>

            <div className={NavCSS.item_block}>
                <NavLink to="/users" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Users</NavLink>
            </div>

            <div className={NavCSS.item_block}>
                <NavLink to="/news" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>News</NavLink>
            </div>

            <div className={NavCSS.item_block}>
                <NavLink to="/music" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Music</NavLink>
            </div>

            <br/>

            <div className={NavCSS.item_block}>
                <NavLink to="/settings" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Settings</NavLink>
            </div>

        </nav>
    );
}

export default Nav;