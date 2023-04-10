import Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={`text-dark ${Styles.footer}`}>
      <div className="container">
        <p className="mb-1">
          <span className="font-weight-bold pointer">一些資訊</span>
          <span className="mx-2">|</span>
          <span>一些資訊</span>
          <span className="mx-2">|</span>
          <span>footer資訊</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
