import styles from "./Footer.module.scss";
import FooterLogo from "../../../../../../public/assets/MainPage/icons/footer_logo.svg";
import Phone from "../../../../../../public/assets/MainPage/icons/phone.svg";
import VK from "../../../../../../public/assets/MainPage/icons/vk.svg";
import TG from "../../../../../../public/assets/MainPage/icons/tg.svg";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.logoFooter}>
        <FooterLogo />
        <div className={styles.logoText}>© YouMeal, 2023</div>
      </div>
      <div className={styles.footerBlocks}>
        <span className={styles.textFooterBold}>Номер для заказа</span>
        <span className={styles.number}>
          <Phone />
          +7(961)350-84-85
        </span>
      </div>
      <div className={styles.footerBlocks}>
        <span className={styles.textFooterBold}>Мы в соц. сетях</span>
        <div className={styles.links}>
          <a href="/#">
            <VK />
          </a>
          <a href="/#">
            <TG />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
