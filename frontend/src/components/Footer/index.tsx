import "./styles.scss";

import { BsGithub, BsLinkedin , BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <h1>Shortly</h1>

      <div className="features">
        <strong>Features</strong>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>

      <div className="resources">
      <strong>Resources</strong>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>

      <div className="company">
      <strong>Company</strong>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
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