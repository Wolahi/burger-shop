import { useActions } from "@/shared/hooks/useActions";
import styles from "./ProductCard.module.scss";
import Image from "next/image";

const ProductCard = (props: any): JSX.Element => {
  const obj = props.burg;
  const { addItem } = useActions();
  return (
    <div className={styles.root}>
      <Image src={obj.icon} alt="Not" className={styles.cardIcon} width={276} height={220} />
      <div className={styles.disCard}>
        <div className={styles.cardCost}>{obj.cost}₽</div>
        <div className={styles.nameCard}>{obj.name}</div>
      </div>
      <div className={styles.butAdd}>
        <div className={styles.weightCard}>{obj.weight}г</div>
        <button type="button" className={styles.butAddBurg} onClick={() => addItem(obj)}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
