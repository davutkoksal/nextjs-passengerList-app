import React from "react";
import styles from "../styles/Home.module.css";
export default function PassengerListItem({ person }) {
  return (
    <a href={`/details?id=${person._id}`} className={styles.card}>
      <div className={styles.cardItem}>
        <h3>Passenger Name : </h3> <p>{person.name}</p>
      </div>
      <div className={styles.cardItem}>
        <h3>Passenger's Trip Count :</h3> <p>{person.trips}</p>
      </div>
    </a>
  );
}
