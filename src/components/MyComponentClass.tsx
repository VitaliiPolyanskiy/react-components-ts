import { Component } from "react";
import styles from "./MyComponentClass.module.css";

export default class MyComponentClass extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.badge}>Клас</div>
        <p className={styles.text}>
          Відмінною рисою бібліотеки React є концентрація на компонентах, 
          які легко переносити з проєкту в проєкт.
        </p>
      </div>
    );
  }
}