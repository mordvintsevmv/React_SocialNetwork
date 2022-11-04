import NavCSS from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={NavCSS.nav}>

            <div>
                <NavLink to="/profile" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Profile</NavLink>
            </div>

            <div>
                <NavLink to="/messages" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Messages</NavLink>
            </div>

            <div>
                <NavLink to="/news" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>News</NavLink>
            </div>

            <div>
                <NavLink to="/music" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Music</NavLink>
            </div>

            <div>
                <NavLink to="/settings" className = { navData => navData.isActive ? NavCSS.active : NavCSS.item }>Settings</NavLink>
            </div>

        </nav>
    );
}

export default Nav;