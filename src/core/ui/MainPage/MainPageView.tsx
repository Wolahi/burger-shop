import Header from "./componets/Header/Header";
import styles from "./MainPage.module.scss";
import Footer from "./componets/Footer/Footer";
import Basket from "./componets/Basket/Basket";
import BurgerShop from "./componets/BurgersShop/BurgersShop";

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
