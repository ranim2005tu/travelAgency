
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Destinations from "./components/Destinations/Destinations";
import Reservation from "./components/Reservation/Reservation";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroContent">
            <span className="eyebrow">Votre prochaine aventure commence ici</span>
            <h1 id="hero-title">Explorez le monde,<br />vivez l&apos;exceptionnel.</h1>
            <p>
              Des destinations soigneusement sélectionnées, des voyages sur mesure
              et une équipe à vos côtés à chaque étape.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#destinations">Découvrir les destinations</a>
              <a className="secondaryButton" href="#reservation">Réserver maintenant</a>
            </div>
          </div>
          <div className="heroStats" aria-label="Nos engagements">
            <div><strong>12k+</strong><span>voyageurs heureux</span></div>
            <div><strong>30+</strong><span>destinations</span></div>
            <div><strong>4.9</strong><span>note moyenne</span></div>
          </div>
        </section>
        <Destinations />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
