import styles from "../MainPage.module.scss";
import Bike from "../../../../assets/MainPage/icons/delivery.svg";

const Header = (): JSX.Element => {
  return (
    <div className={styles.basket}>
      <div className={styles.basketHeader}>
        <span className={styles.textHeader}>Корзина</span>
        <div className={styles.count}>0</div>
      </div>
      <div className={styles.order}></div>
      <div className={styles.buyBlock}>
        <div className={styles.buyHead}>
          <div className={styles.buyText}>Итого</div>
          <div className={styles.buyText}>0₽</div>
        </div>
        <button type="button" className={styles.buyButton}>
          Оформить заказ
        </button>
        <div className={styles.delivery}>
          <Bike />
          <span className={styles.deliveryText}>Бесплатная доставка</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
