import styles from "./BurgerShop.module.scss";
import { BurgerList } from "./BurgerList";

const BurgerShop = (): JSX.Element => {
  return (
    <div className={styles.shop}>
      <div className={styles.burgShopHeader}>Бургеры</div>
      <BurgerList />
    </div>
  );
};

export default BurgerShop;
