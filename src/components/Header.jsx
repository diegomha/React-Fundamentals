import styles from './Header.module.css';
import logoImg from '../assets/logo.png';

export function Header()
{
    console.log(logoImg)
    return (
        <header className={styles.header}>
            <img src={logoImg} width="90px" />
        </header>
    );
}