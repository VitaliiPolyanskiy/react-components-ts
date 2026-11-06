// MyComponentFunction.tsx
import styles from "./MyComponentFunction.module.css";

export default function MyComponentFunction() {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>Функція</div>
      <p className={styles.text}>
        Функціональний спосіб створення компонента — це сучасний стандарт 
        розробки інтерфейсів у React.
      </p>
    </div>
  );
}