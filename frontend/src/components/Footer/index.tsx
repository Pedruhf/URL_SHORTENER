import "./styles.scss";

import { BsGithub, BsLinkedin , BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <h1>Shortly</h1>

      <div className="features">
        <strong>Características</strong>
        <p>Encurtamento de link</p>
        <p>Links da sua marca</p>
        <p>Análises</p>
      </div>

      <div className="resources">
      <strong>Recursos</strong>
        <p>Blog</p>
        <p>Desenvolvedores</p>
        <p>Suporte</p>
      </div>

      <div className="company">
      <strong>Compania</strong>
        <p>Sobre</p>
        <p>Nosso Time</p>
        <p>Carreiras</p>
        <p>Contato</p>
      </div>

      <div className="socials">
        <a target="_blank" href="https://github.com/pedruhf"><BsGithub size="24" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/pedruhf"><BsLinkedin size="24" /></a>
        <a target="_blank" href="https://www.instagram.com/pedruhf"><BsInstagram size="24" /></a>
      </div>
    </footer>
  );
};

export { Footer };