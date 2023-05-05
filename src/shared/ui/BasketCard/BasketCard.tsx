import styles from "./BasketCard.module.scss";
import Image from "next/image";
import { useActions } from "@/shared/hooks/useActions";
import { BasketCart } from "@/store/products/products.types";
import { useTypedSelector } from "@/shared/hooks/useTypedSelector";

const BasketCard = (props: any): JSX.Element => {
  const obj: BasketCart = props.card;
  const key = props.id;
  const { addItem, removeItem } = useActions();
  return (
    <div className={styles.root} key={key}>
      <Image src={obj.icon} alt="Not Found" className={styles.burgIcon} width={256} height={220} />
      <div className={styles.descriptionCard}>
        <div className={styles.name}>{obj.name}</div>
        <div className={styles.weight}>{obj.weight}г</div>
        <div className={styles.cost}>{obj.cost}₽</div>
      </div>
      <div className={styles.buttonCard}>
        <div
          className={styles.minus}
          onClick={() => {
            removeItem(obj);
          }}>
          -
        </div>
        <div className={styles.count}>{obj.count}</div>
        <div
          className={styles.plus}
          onClick={() => {
            addItem(obj);
          }}>
          +
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
