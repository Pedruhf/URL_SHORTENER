import logoImg from "../../assets/images/logo.svg";
import { VscMenu } from "react-icons/vsc";

import "./styles.scss";

const Header = () => {
  return (
    <header>
      <div className="headerMobile">
        <img src={logoImg} alt="Shortly" />
        <VscMenu size="24" />
      </div>

      <div className="headerDesktop">
        <div className="navigation">
          <img src={logoImg} alt="Shortly" />
          <span>Características</span>
          <span>Preços</span>
          <span>Recursos</span>
        </div>

        <div className="authButtons">
          <span>Entrar</span>
          <button>Registrar-se</button>
        </div>
      </div>
    </header>
  );
};

export { Header };