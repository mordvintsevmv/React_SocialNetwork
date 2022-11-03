import NavCSS from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={NavCSS.nav}>

            <div className={NavCSS.item + " " + NavCSS.active}>
                Profile
            </div>

            <div className={`${NavCSS.item} ${NavCSS.active}`}>
                Messages
            </div>

            <div className={NavCSS.item}>
                News
            </div>

            <div className={NavCSS.item}>
                Music
            </div>

            <div className={NavCSS.item}>
                Settings
            </div>

        </nav>
    );
}

export default Nav;