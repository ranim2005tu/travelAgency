import styles from "./Destination.module.css";
import { useState } from "react";
function Destination(props) {
    const [afficher,setAfficher]=useState(false);
    return (
        <div className={styles.destination}>
            <div className={styles.imageWrap}>
                <img
                    className={styles.image}
                    src={props.image}
                    alt={`Vue de ${props.nom}, ${props.pays}`}
                />
                <span className={styles.badge}>Populaire</span>
            </div>
            <div className={styles.content}>
                <div className={styles.location}>
                    <span>{props.pays}</span>
                    <span aria-label="Note 4.9 sur 5">★ 4.9</span>
                </div>
                <h3 className={styles.titre}>{props.nom}</h3>
                {afficher &&
                <p className={styles.description}>
                    {props.description}
                </p>
                }
                <div className={styles.footerCard}>
                    <div>
                        <span className={styles.priceLabel}>À partir de</span>
                        <strong className={styles.prix}>{props.prix} DT</strong>
                    </div>
                    <button
                        type="button"
                        className={styles.detailsButton}
                        onClick={() => setAfficher(!afficher)}
                        aria-expanded={afficher}
                    >
                        {afficher ? "Masquer" : "Voir plus"}
                    </button>
                </div>
            </div>
        </div>
    );
}
            

export default Destination;