import Header from "@/core/componets/MainPage/componets/Header";
import styles from "./MainPage.module.scss";
import Footer from "./componets/Footer";

const MainPageView = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Header />
      <Footer />
    </div>
  );
};

export default MainPageView;
