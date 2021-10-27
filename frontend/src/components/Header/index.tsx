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
          <span>Features</span>
          <span>Pricing</span>
          <span>Resources</span>
        </div>

        <div className="authButtons">
          <span>Login</span>
          <button>SignUp</button>
        </div>
      </div>
    </header>
  );
};

export { Header };