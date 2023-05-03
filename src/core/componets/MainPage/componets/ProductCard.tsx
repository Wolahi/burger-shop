import styles from "../MainPage.module.scss";
import Image from "next/image";

const ProductCard = (props: any): JSX.Element => {
  const obj = props.burg;
  return (
    <div className={styles.card}>
      <Image src={obj.icon} alt="Not" className={styles.cardIcon} />
      <div className={styles.disCard}>
        <div className={styles.cardCost}>{obj.cost}₽</div>
        <div className={styles.nameCard}>{obj.name}</div>
      </div>
      <div className={styles.butAdd}>
        <div className={styles.weightCard}>{obj.weight}г</div>
        <button type="button" className={styles.butAddBurg}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
