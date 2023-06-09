import styles from "./Basket.module.scss";
import Bike from "../../../../../../public/assets/MainPage/icons/delivery.svg";
import BasketCard from "../../../../../shared/ui/BasketCard/BasketCard";
import { useTypedSelector } from "@/shared/hooks/useTypedSelector";
import { RiDeleteBinLine } from "react-icons/ri";
import { useActions } from "@/shared/hooks/useActions";

const Basket = (): JSX.Element => {
  const { basket } = useTypedSelector((state) => state);
  const totalCost = () => {
    let count = 0;
    basket.map((p) => (count += p.cost * p.count));
    return count;
  };
  const { deleteAll } = useActions();
  return (
    <div className={styles.root}>
      <div className={styles.basketHeader}>
        <span className={styles.textHeader}>Корзина</span>
        <div className={styles.countBlock}>
          <div className={styles.count}>{basket.length}</div>
          <div
            className={styles.deleteAll}
            onClick={() => {
              deleteAll();
            }}>
            <RiDeleteBinLine />
          </div>
        </div>
      </div>
      <div className={styles.order}>
        {basket.map((p) => (
          <BasketCard card={p} id={p.id} />
        ))}
      </div>
      <div className={styles.buyBlock}>
        <div className={styles.buyHead}>
          <div className={styles.buyText}>Итого</div>
          <div className={styles.buyText}>{totalCost()}₽</div>
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

export default Basket;
