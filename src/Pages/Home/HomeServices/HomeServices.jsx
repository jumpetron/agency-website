import { homeServiceItem } from "../../../Common/data";
import homeServicesStyle from "./HomeServices.module.css";
import SingleServiceBox from "./SingleServiceBox";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className={homeServicesStyle.serviceBoxContainer}>
          <div className={homeServicesStyle.serviceBoxTitle}>
            <h2>
              We’re always ready for <span>challenges</span>
            </h2>
          </div>
          <div className={homeServicesStyle.serviceBox}>
            <div className={homeServicesStyle.left}>
              {homeServiceItem.slice(0, 2).map((item) => (
                <SingleServiceBox key={item.itemNum} item={item} />
              ))}
            </div>
            <div className={homeServicesStyle.right}>
              {homeServiceItem.slice(2, 4).map((item) => (
                <SingleServiceBox key={item.itemNum} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
