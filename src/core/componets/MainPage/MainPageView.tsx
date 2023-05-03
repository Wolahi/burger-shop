import Header from "@/core/componets/MainPage/componets/Header";
import styles from "./MainPage.module.scss";
import Footer from "./componets/Footer";
import Basket from "./componets/Basket";
import BurgerShop from "./componets/BurgersShop";

const MainPageView = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.mainBlock}>
        <Basket />
        <BurgerShop />
      </div>
      <Footer />
    </div>
  );
};

export default MainPageView;
