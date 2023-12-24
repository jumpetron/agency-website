import scrollImage from "../../../assets/images/icon/scroll.svg";
import heroStyles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={heroStyles.heroSection}>
      <div className="container">
        <div className={heroStyles.heroContainer}>
          <div className={heroStyles.heroContent}>
            <h1>
              We make <span className={heroStyles.topSparkle}>products</span>{" "}
              that <span className={heroStyles.underline}>matter</span>
            </h1>
            <p>
              We are more than an agency. We want to be a team within your team,
              sharing knowledge, and helping one
            </p>
          </div>
        </div>
        <div className={heroStyles.scrollSvg}>
          <img src={scrollImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
