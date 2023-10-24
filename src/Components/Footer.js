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
        <a href="/">
          <i className="fa-brands fa-facebook-square"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-behance-square"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter-square"></i>
        </a>
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
