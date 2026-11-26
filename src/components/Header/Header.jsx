import style from './Header.module.css';
import {NavLink} from 'react-router-dom';
function Header() {
    return (
        <header className={style.header}>
            <h1>travel agency</h1>
            <nav className={style.nav}>
                <NavLink to="/" className={({isActive}) => isActive ? style.active : ''}>Accueil</NavLink>
                <NavLink to="/apropos" className={({isActive}) => isActive ? style.active : ''}>À propos</NavLink>
                <NavLink to="/destinations" className={({isActive}) => isActive ? style.active : ''}>Destinations</NavLink>
                <NavLink to="/reservation" className={({isActive}) => isActive ? style.active : ''}>Réservation</NavLink>
            </nav>
        </header>
    
    )
}
export default Header;