import styles from "./Header.module.scss";
import Logo from "../../../../../../public/assets/MainPage/icons/logo.svg";
import Burger from "../../../../../../public/assets/MainPage/icons/burger.svg";

const Header = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Logo className={styles.logo} />
      <div className={styles.burgerBlock}>
        <Burger className={styles.burger} />
        <div className={styles.text}>
          Только самые <div className={styles.textOrange}>сочные бургеры!</div>
          <div className={styles.textFooter}>Бесплатная доставка от 599₽</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
