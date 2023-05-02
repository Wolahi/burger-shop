import styles from "../MainPage.module.scss";
import Logo from "../../../../assets/MainPage/icons/logo.svg";
import Burger from "../../../../assets/MainPage/icons/burger.svg";

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />
      <div className={styles.burgerBlock}>
        <Burger className={styles.burger} />
        <div className={styles.text}>
          Только самые <div className={styles.textOrange}>сочные бургеры!</div>{" "}
          <div className={styles.textFooter}>Бесплатная доставка от 599₽</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
