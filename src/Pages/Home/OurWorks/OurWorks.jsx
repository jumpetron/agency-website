import { Link } from "react-router-dom";
import { ourWorks } from "../../../Common/data";
import ourWorksStles from "./OurWorks.module.css";

const OurWorks = () => {
  return (
    <section className={ourWorksStles.ourWorksSection}>
      <div className="container">
        <div>
          <h3 className={ourWorksStles.title}>Our Works</h3>
          <div className={ourWorksStles.worksContainer}>
            {ourWorks.slice(0, 3).map((item) => (
              <div key={item.itemNum} className={ourWorksStles.worksBox}>
                <div className={ourWorksStles.companyLogo}>
                  <img src={item.companyLogo} alt="" />
                </div>
                <div
                  className={`${ourWorksStles.worksBoxContent} ${
                    ourWorksStles[`itemNum-${item.itemNum}`]
                  }`}
                >
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                  <div className={ourWorksStles.task}>
                    {item.task.map((item, index) => (
                      <small key={index}>{item}</small>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link className={ourWorksStles.seeAll}>
            See all
            <small className={ourWorksStles.icon}>
              <i className="fi fi-rr-arrow-right"></i>
            </small>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
