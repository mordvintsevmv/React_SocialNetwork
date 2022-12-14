import HeaderCSS from './Header.module.css';
import logoMonkey from '../../img/logoMonkey.ico'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const onLogoutButton = () => {
        props.logout();
    }

    return (<header className={HeaderCSS.header}>
            <div className={HeaderCSS.title_block}>
                <a href="/React_SocialNetwork">
                    <img src={logoMonkey} alt='monkey'/>
                </a>
                <h2 className={HeaderCSS.name}>Social Net</h2>
            </div>


            <div className={HeaderCSS.auth_block}>
                {props.auth.isAuth
                    ? <div className={HeaderCSS.login_logout_block}>
                        {props.auth.login}
                        <span className={HeaderCSS.logout_button} onClick={onLogoutButton}> logout</span>
                </div>
                    : <NavLink to="/login" className={HeaderCSS.login_button}>Login</NavLink>
                }

            </div>
        </header>

    );
}

export default Header;