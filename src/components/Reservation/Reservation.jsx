import { useState } from "react";
import styles from "./Resrvation.module.css";

function Reservation() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [destination, setDestination] = useState("Santorin");
  const [erreurs, setErreurs] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  function effacerErreur(champ) {
    setErreurs((prev) => {
      const nouvellesErreurs = { ...prev };
      delete nouvellesErreurs[champ];
      return nouvellesErreurs;
    });
  }

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!nom.trim()) nouvellesErreurs.nom = "Le nom est obligatoire";
    if (!email.trim()) {
      nouvellesErreurs.email = "L'adresse email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nouvellesErreurs.email = "Adresse email invalide";
    }
    if (!telephone.trim()) nouvellesErreurs.telephone = "Le telephone est obligatoire";

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validerFormulaire()) setShowPopup(true);
  }

  function handleReset() {
    setNom("");
    setEmail("");
    setTelephone("");
    setDestination("Santorin");
    setErreurs({});
  }

  return (
    <section className={styles.container} id="reservation">
      <div className={styles.intro}>
        <span>Votre voyage sur mesure</span>
        <h2>Prêts à partir ?</h2>
        <p>Remplissez votre demande et notre équipe vous recontactera sous 24 heures.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="nom">Nom et prenom</label>
          <input
            id="nom"
            type="text"
            className={erreurs.nom ? styles.inputError : ""}
            value={nom}
            onChange={(event) => {
              setNom(event.target.value);
              effacerErreur("nom");
            }}
            placeholder="Votre nom complet"
          />
          {erreurs.nom && <span className={styles.errorMessage}>{erreurs.nom}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Adresse e-mail</label>
          <input
            id="email"
            type="email"
            className={erreurs.email ? styles.inputError : ""}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              effacerErreur("email");
            }}
            placeholder="vous@exemple.com"
          />
          {erreurs.email && <span className={styles.errorMessage}>{erreurs.email}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="telephone">Numero de telephone</label>
          <input
            id="telephone"
            type="tel"
            className={erreurs.telephone ? styles.inputError : ""}
            value={telephone}
            onChange={(event) => {
              setTelephone(event.target.value);
              effacerErreur("telephone");
            }}
            placeholder="+216 00 000 000"
          />
          {erreurs.telephone && <span className={styles.errorMessage}>{erreurs.telephone}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          >
            <option>Santorin</option>
            <option>Bali</option>
            <option>Rome</option>
          </select>
        </div>

        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>Envoyer ma demande</button>
          <button type="button" className={styles.resetButton} onClick={handleReset}>Effacer</button>
        </div>
      </form>

      {showPopup && (
        <div className={styles.overlay} role="presentation" onMouseDown={() => setShowPopup(false)}>
          <div className={styles.popup} role="dialog" aria-modal="true" aria-labelledby="popup-title" onMouseDown={(event) => event.stopPropagation()}>
            <span className={styles.successIcon}>✓</span>
            <h3 id="popup-title">Demande envoyée</h3>
            <p>Merci {nom}. Notre équipe vous contactera bientôt pour votre voyage à {destination}.</p>
            <button type="button" onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reservation;
