import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
import PassengerListItem from "../components/PassengerListItem";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [size, setSize] = useState(10);
  const [data, setData] = useState(props.data);

  useEffect(() => {
    async function fetchMore() {
      const response = await axios(
        `https://api.instantwebtools.net/v1/passenger?page=0&size=${size}`
      );
      setData(response.data.data);
    }
    fetchMore();
  }, [size]);
  async function fetchMore() {
    const response = await axios(
      `https://api.instantwebtools.net/v1/passenger?page=0&size=${size}`
    );
    data = response.data.dat;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Passenger List App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Passenger List</h1>

        <div className={styles.grid}>
          {data.map((item) => (
            <PassengerListItem key={item._id} person={item} />
          ))}
        </div>

        <button
          onClick={() => {
            setSize((pre) => pre + 10);
          }}
          className={styles.btn}
        >
          Show More
        </button>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios(
    `https://api.instantwebtools.net/v1/passenger?page=0&size=10`
  );
  const { data } = response;
  return {
    props: data,
  };
}
