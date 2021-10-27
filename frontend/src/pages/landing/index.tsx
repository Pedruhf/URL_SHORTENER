import { useContext, useState } from "react";
import ilustrationWorking from "../../assets/images/illustration-working.svg";
import { InputCard } from "../../components/InputCard";
import { UrlCard } from "../../components/UrlCard";
import { UrlContext } from "../../contexts/urls";

import "./styles.scss";

const LandingPage = () => {
  const { urls } = useContext(UrlContext);

  return (
    <div className="landingPage">
      <div className="visualIdentityMobile">
        <img src={ilustrationWorking} alt="Working" />

        <h1>More than just shorter links</h1>
        <span>Build your brand's recognition and get detailed insights on how your links are performing</span>

        <button>Começar</button>
      </div>

      <div className="visualIdentityDesktop">
        <div className="information">
          <h1>Mais do que apenas<br/>links mais curtos</h1>
          <span>Construa o reconhecimento da sua marca e obtenha<br/>detalhes sobre o desempenho de seus links</span>
          <button>Começar</button>
        </div>

        <img src={ilustrationWorking} alt="Working" />
      </div>

      <InputCard />
      {urls.map(link => {
        return <UrlCard key={link.url} url={link.url} shortenedURL={link.shortenedURL} />
      })}
    </div>
  );
};

export { LandingPage };