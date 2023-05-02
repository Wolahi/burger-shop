import Header from "@/core/componets/MainPage/componets/Header";
import styles from "./MainPage.module.scss";

const MainPageView = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
};

export default MainPageView;
