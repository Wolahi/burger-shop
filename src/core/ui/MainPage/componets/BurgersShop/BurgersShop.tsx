import styles from "./BurgerShop.module.scss";
import { BasketCart } from "../../../../../store/products/products.types";
import ProductCard from "../../../../../shared/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/store/products/products.api";

const BurgerShop = (): JSX.Element => {
  const { data, isLoading, error } = useGetProductsQuery(6);
  return (
    <div className={styles.shop}>
      <div className={styles.burgShopHeader}>Бургеры</div>
      <div className={styles.burgersList}>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          data?.map((p: BasketCart) => <ProductCard key={p.id} burg={p} />)
        )}
      </div>
    </div>
  );
};

export default BurgerShop;
