import Style from "./Header.module.css";

function Header() {
    return (
        <header className={Style.header}>
            <a className={Style.brand} href="#" aria-label="Travel Agency - Accueil">
                <span className={Style.brandMark}>T</span>
                <span>Travel <strong>Agency</strong></span>
            </a>
            <nav className={Style.nav}>
                <a href="#">Accueil</a>
                <a href="#destinations">Destinations</a>
                <a href="#reservation">Réservation</a>
            </nav>
            <a className={Style.cta} href="#reservation">Planifier mon voyage</a>
        </header>
    );
}

export default Header;