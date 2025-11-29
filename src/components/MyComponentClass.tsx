import React from "react";
import styles from "./MyComponentClass.module.css";

export default class MyComponentClass extends React.Component {
  render() {
    return (
      <h1 className={styles.title}>
        Отличительной чертой библиотеки React является концентрация на
        компонентах, которые легко переносить из проекта в проект.
      </h1>
    );
  }
}
