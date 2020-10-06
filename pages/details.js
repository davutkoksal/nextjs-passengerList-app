import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

import PassengerListItem from "../components/PassengerListItem";
import Modal from "../components/Modal";

export default function details({ person }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => setIsVisible((pre) => !pre);

  return (
    <div className={styles.container}>
      <div className={styles.card1}>
        <div className={styles.cardItem}>
          <h3>Passenger Name : </h3>
          <p style={{ marginRight: "20px" }}>{person.name}</p>
          <button
            onClick={() => setIsVisible((pre) => !pre)}
            className={styles.btnSmall}
          >
            Edit
          </button>
        </div>
        <div className={styles.cardItem}>
          <h3>Passenger's Trip Count :</h3> <p>{person.trips}</p>
        </div>
      </div>
      <div className={styles.btn}>
        <a href={`/`}>Main Page</a>
      </div>
      {isVisible && <Modal person={person} handleIsVisible={handleIsVisible} />}
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const response = await axios(
    `https://api.instantwebtools.net/v1/passenger/${query.id}`
  );

  const { data } = response;
  return {
    props: { person: data },
  };
};
