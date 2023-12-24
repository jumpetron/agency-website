import { Link } from "react-router-dom";
import cardStyle from "./Card.module.css";

const ServiceCard = ({ item, type, index }) => {
  const {
    serviceName,
    description,
    serviceImg,
    memberName,
    memberRole,
    memberImg,
  } = item;
  const des = description.split("\n");
  return (
    <div>
      <div
        className={`${cardStyle.serviceBox} ${
          index % 2 === 0 ? "" : cardStyle.even
        }`}
      >
        <div className={cardStyle.imgBox}>
          <img
            src={
              type === "services"
                ? serviceImg
                : type === "team"
                ? memberImg
                : ""
            }
            alt=""
          />
        </div>
        <div className={cardStyle.contentBox}>
          <div>
            {type === "services" ? (
              ""
            ) : type === "team" ? (
              <h3>{memberRole}</h3>
            ) : (
              ""
            )}
            <h2>
              {type === "services"
                ? serviceName
                : type === "team"
                ? memberName
                : ""}
            </h2>
            {des.map((str, index) => (
              <p key={index}>{str}</p>
            ))}
          </div>
          {type === "services" ? (
            <p className={cardStyle.learnMorebtn}>
              <Link>Learn more</Link>
              <i className="fi fi-rr-arrow-right"></i>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
