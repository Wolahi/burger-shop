import Header from "@/core/componets/MainPage/componets/Header";
import styles from "./MainPage.module.scss";
import Footer from "./componets/Footer";
import Basket from "./componets/Basket";

const MainPageView = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.mainBlock}>
        <Basket />
        <div>БУРГЕРЫ</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPageView;
