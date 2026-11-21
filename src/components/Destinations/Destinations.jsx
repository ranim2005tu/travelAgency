import Destination from "../Destination/Destination";
import destinationList from "../../Data/DestinationList";
import styles from "./Destinations.module.css";

function Destinations() {
  return (
    <section className={styles.container} id="destinations">
      <div className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>Nos idées de voyage</span>
          <h2 className={styles.title}>Destinations populaires</h2>
        </div>
        <p>Choisissez parmi nos escapes les plus appréciées et préparez-vous à créer des souvenirs durables.</p>
      </div>

      <div className={styles.destinations}>
        {
          destinationList.map((d)=>(
            <Destination 
              key={d.id}
              image={d.image}
              nom={d.nom}
              pays={d.pays}
              description={d.description}
              prix={d.prix}
            />
          )

          )
        }

      </div>
    </section>
  );
}
export default Destinations;