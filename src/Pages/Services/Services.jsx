import { services } from "../../Common/data";
import Banner from "../../Components/Banner/Banner";
import ServiceCard from "./../../Components/LeftCard/ServiceCard";
import servicesStyle from "./Services.module.css";

const Services = () => {
  return (
    <section className={servicesStyle.servicesSection}>
      <div className="container">
        <Banner
          title={"Our services"}
          subHeading={"Bringing founder’s ideas to life"}
        />
        <div className="container">
          {services.map((item, index) => (
            <ServiceCard
              key={item.serviceNum}
              index={index}
              item={item}
              type={"services"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
