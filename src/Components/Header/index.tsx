import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>CoviDuct</h1>
      </div>
      <div className={styles.menu}>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
