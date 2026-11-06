// MyComponentArrow.tsx
import styles from "./MyComponentArrow.module.css";

const MyComponentArrow = () => (
  <div className={styles.card}>
    <div className={styles.badge}>Стрілочна функція</div>
    <p className={styles.text}>
      Для визначення компонента можна успішно використовувати стрілочні функції 
      для більш лаконічного коду.
    </p>
  </div>
);

export default MyComponentArrow;