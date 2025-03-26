import styles from './Header.module.css';
import HeaderBackground from '../../assets/images/header_bg.jpg';

const Header = () => {
    return (
        <header className={styles.header} style={{backgroundImage: `url(${HeaderBackground})`}}>
            <h1 className={styles.title}>Neon Forge</h1>
        </header>
    )
}

export default Header;