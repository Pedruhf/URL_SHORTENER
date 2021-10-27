import ilustrationWorking from "../../assets/images/illustration-working.svg";

import "./styles.scss";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="visualIdentity">
        <img src={ilustrationWorking} alt="Working" />
        <h1>More than just shorter links</h1>
        <span>Build your brand's recognition and get detailed insights on how your links are performing</span>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export { LandingPage };