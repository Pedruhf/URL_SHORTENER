import logoImg from "../../assets/images/logo.svg";
import { VscMenu } from "react-icons/vsc";

import "./styles.scss";

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="Shortly" />
      <VscMenu size="24" />
    </header>
  );
};

export { Header };