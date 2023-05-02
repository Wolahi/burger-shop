import styles from "../MainPage.module.scss";
import FooterLogo from "../../../../assets/MainPage/icons/footer_logo.svg";
import Phone from "../../../../assets/MainPage/icons/phone.svg";
import VK from "../../../../assets/MainPage/icons/vk.svg";
import TG from "../../../../assets/MainPage/icons/tg.svg";
const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoFooter}>
        <FooterLogo />
        <div className={styles.logoText}>© YouMeal, 2022</div>
      </div>
      <div className={styles.footerBlocks}>
        <span className={styles.textFooterBold}>Номер для заказа</span>
        <span className={styles.number}>
          <Phone />
          +7(930)833-38-11
        </span>
      </div>
      <div className={styles.footerBlocks}>
        <span className={styles.textFooterBold}>Мы в соц. сетях</span>
        <div className={styles.links}>
          <a href="#">
            <VK />
          </a>
          <a href="#">
            <TG />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
