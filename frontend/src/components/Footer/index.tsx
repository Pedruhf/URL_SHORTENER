import "./styles.scss";

import { BsFacebook, BsTwitter, BsPinterest, BsInstagram } from "react-icons/bs";

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
        <BsFacebook size="24" />
        <BsTwitter size="24" />
        <BsPinterest size="24" />
        <BsInstagram size="24" />
      </div>
    </footer>
  );
};

export { Footer };