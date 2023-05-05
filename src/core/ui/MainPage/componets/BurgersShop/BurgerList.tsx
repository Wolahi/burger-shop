import styles from "./BurgerShop.module.scss";
import ProductCard from "@/shared/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/store/products/products.api";
import { BasketCart } from "@/store/products/products.types";

export const BurgerList = (): JSX.Element => {
  const { data, isLoading, error } = useGetProductsQuery(6);
  return (
    <div className={styles.burgersList}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        data?.map((p: BasketCart) => <ProductCard key={p.id} burg={p} />)
      )}
    </div>
  );
};
