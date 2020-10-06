import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Modal({ person, handleIsVisible }) {
  const [personName, setPersonName] = useState(person.name);
  const handleChange = (e) => {
    setPersonName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `https://api.instantwebtools.net/v1/passenger/${person._id}`,
        {
          name: personName,
        }
      );
    } catch (error) {
      alert("Something went wrong");
    }
  };
  return (
    <div className={styles.modal}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={personName}
          onChange={handleChange}
          type="text"
        />
        <div className={styles.btnGroup}>
          <button className={styles.btnSmall} type="submit">
            Edit
          </button>
          <button className={styles.btnSmall} onClick={() => handleIsVisible()}>
            <a href={`/details?id=${person._id}`}> Close</a>
          </button>
        </div>
      </form>
    </div>
  );
}
