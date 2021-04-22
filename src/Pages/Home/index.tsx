import React from "react";
import Header from "../../Components/Header";
import LookingFor from "./Components/LookingFor";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <LookingFor />
    </div>
  );
}
