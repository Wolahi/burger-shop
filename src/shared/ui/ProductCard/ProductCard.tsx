import { useActions } from "@/shared/hooks/useActions";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { useTypedSelector } from "@/shared/hooks/useTypedSelector";

const ProductCard = (props: any): JSX.Element => {
  const { basket } = useTypedSelector((state) => state);
  const obj = props.burg;
  const { addItem, removeItem } = useActions();
  const basketObj = basket.filter((p) => p.id === obj.id)[0];
  const isExistingInBasket = basket.some((p) => p.id === obj.id);
  return (
    <div className={styles.root}>
      <Image src={obj.icon} alt="Not" className={styles.cardIcon} width={276} height={220} />
      <div className={styles.disCard}>
        <div className={styles.cardCost}>{obj.cost}₽</div>
        <div className={styles.nameCard}>{obj.name}</div>
      </div>
      <div className={styles.butAdd}>
        <div className={styles.weightCard}>{obj.weight}г</div>
        {!isExistingInBasket ? (
          <button type="button" className={styles.butAddBurg} onClick={() => addItem(obj)}>
            Добавить
          </button>
        ) : (
          <div className={styles.buttonCard}>
            <div
              className={styles.minus}
              onClick={() => {
                removeItem(obj);
              }}>
              -
            </div>
            <div className={styles.count}>{basketObj.count}</div>
            <div
              className={styles.plus}
              onClick={() => {
                addItem(obj);
              }}>
              +
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
