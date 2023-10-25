import "./Fstyles.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="top"></div>
      <div>
        <h2 className="h2_footer">Adventour</h2>
        <p className="para_footer">Choose your favourite destination.</p>
      </div>
      <div className="footer_icons">
        <a href="https://www.facebook.com/login.php">
          <i className="fa-brands fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/?hl=en">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
        <a href="https://www.behance.net/">
          <i className="fa-brands fa-behance-square"></i>
        </a>
        <a href="https://twitter.com/home">
          <i className=""></i>
        </a>
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/Map">Changelog</a>
          <a href="/Explore">Status</a>
          <a href="about">License</a>
          <a href="">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="Map">Issues</a>
          <a href="service">Projects</a>
          <a href="https://twitter.com/home">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="Contact">Support</a>
          <a href="Contact">Troubleshooting</a>
          <a href="Map">Contact Us</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
