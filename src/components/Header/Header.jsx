import HeaderCSS from './Header.module.css';

const Header = () => {
    return (
        <header className={HeaderCSS.header}>
            <img src='logoMonkey.ico' alt='monkey'/>
        </header>

    );
}

export default Header;