import { ourTeam, services } from "../../Common/data";
import Banner from "../../Components/Banner/Banner";
import scroll from "../../assets/images/icon/scroll.svg";
import aboutStyle from "./About.module.css";

const About = () => {
  return (
    <section>
      <div className="container">
        <Banner
          title={"About us"}
          subHeading={"Bringing founder’s ideas to life"}
        />
        <div className={aboutStyle.quote}>
          <h3>You guessed it. We’re changing the game.</h3>
          <div className={aboutStyle.divider}></div>
          <p>
            Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt
            nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo,
            adipiscing augue. Est, in in pretium at libero morbi. Euismod
            viverra arcu nisi eu sit. Praesent diam non imperdiet imperdiet
            potenti tristique et. Amet nec.
          </p>
        </div>
        <div className={aboutStyle.questions}>
          <div className={aboutStyle.firstQuestion}>
            <h3>Who we are?</h3>
            <p>
              Our services help you create digital products and solve your
              problems objectively, strategy, technology and analysis. Our
              service also has a high appeal because it has a beautiful color
              combination and a minimalist concept.
            </p>
          </div>
          <div className={aboutStyle.secondQuestion}>
            <h3>What We do?</h3>
            <p>
              We provide comprehensive marketing solutions that help our clients
              reach their maximum potential. Our team of experienced
              professionals understands the ever-changing landscape of marketing
              and is able to create custom strategies for each client. From
              digital marketing to traditional media and everything in between,
              we have the expertise to put together an effective, successful
              marketing campaign. We also offer solutions in the areas of public
              relations, branding, search engine optimization, and more. We
              strive to deliver measurable, tangible results that help our
              clients reach their goals.
            </p>
          </div>
        </div>
        <div className={aboutStyle.scroll}>
          <img src={scroll} alt="" />
        </div>

        <div className={aboutStyle.expertiseArea}>
          <div className={aboutStyle.titleSection}>
            <h3>
              Our
              <br /> Expertise Area
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit
            </p>
          </div>
          <div>
            <div className={aboutStyle.serviceBox}>
              {services.slice(0, 2).map((item) => (
                <div
                  key={item.serviceNum}
                  className={`${aboutStyle.singleBox} ${aboutStyle.first}`}
                >
                  <div className={aboutStyle.serviceIcon}>
                    <img src={item.icon} alt="" />
                  </div>
                  <p>{item.serviceName}</p>
                </div>
              ))}
            </div>
            <div className={aboutStyle.serviceBox}>
              {services.slice(2, 5).map((item) => (
                <div
                  key={item.serviceNum}
                  className={`${aboutStyle.singleBox} ${aboutStyle.second}`}
                >
                  <div className={aboutStyle.serviceIcon}>
                    <img src={item.icon} alt="" />
                  </div>
                  <p>{item.serviceName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={aboutStyle.ourTeam}>
          <div className={aboutStyle.teamTitleSection}>
            <h3>Our Talented Members</h3>
            <p>
              We are more than an agency. We want to be a team within your team,
              sharing knowledge, and helping one
            </p>
          </div>
          <div className={aboutStyle.team}>
            {ourTeam.map((item, index) => (
              <div key={index} className={aboutStyle.member}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <p>{item.name}</p>
                <div>
                  <small>{item.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
