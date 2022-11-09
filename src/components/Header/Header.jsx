import HeaderCSS from './Header.module.css';
import logoMonkey from '../../img/logoMonkey.ico'

const Header = () => {
    return (
        <header className={HeaderCSS.header}>
            <a href="/"><img src={logoMonkey} alt='monkey'/></a>
            <h2 className={HeaderCSS.name}>Social Net</h2>
        </header>

    );
}

export default Header;