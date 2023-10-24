import "./HeroStyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className="hero-text">
          <h3 className="hero_title1">{props.title}</h3>
          <p>{props.textname}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>{" "}
        </div>
      </div>
    </>
  );
}
export default Hero;
