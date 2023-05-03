import styles from "../MainPage.module.scss";
import Image from "next/image";

const BasketCard = (props: any): JSX.Element => {
  const obj = props.card;
  return (
    <div className={styles.basketCard}>
      <Image src={obj.icon} alt="Not Found" className={styles.burgIcon} />
      <div className={styles.descriptionCard}>
        <div className={styles.name}>{obj.name}</div>
        <div className={styles.weight}>{obj.weight}г</div>
        <div className={styles.cost}>{obj.cost}₽</div>
      </div>
      <div className={styles.buttonCard}>
        <div className={styles.minus}>-</div>
        <div className={styles.count}>{obj.count}</div>
        <div className={styles.plus}>+</div>
      </div>
    </div>
  );
};

export default BasketCard;
