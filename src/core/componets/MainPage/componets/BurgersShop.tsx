import styles from "../MainPage.module.scss";
import { BasketCart } from "../utils/shemas";
import CheeseBurg from "../../../../assets/MainPage/imgs/CheeseBurg.png";
import ProductCard from "./ProductCard";

const obj: BasketCart = {
  icon: CheeseBurg,
  name: "Супер сырный",
  weight: "512",
  cost: 550,
  count: 1,
};
const BurgerShop = (): JSX.Element => {
  return (
    <div className={styles.shop}>
      <div className={styles.burgShopHeader}>Бургеры</div>
      <div className={styles.burgersList}>
        <ProductCard burg={obj} />
        <ProductCard burg={obj} />
        <ProductCard burg={obj} />
        <ProductCard burg={obj} />
        <ProductCard burg={obj} />
        <ProductCard burg={obj} />
      </div>
    </div>
  );
};

export default BurgerShop;
