import homeServicesStyle from "./HomeServices.module.css";

const SingleServiceBox = ({ item }) => {
  const { title, description, icon } = item;
  return (
    <div className={`${homeServicesStyle.singleServiceBox}`}>
      <div className="serviceBoxIcon">
        <i className={`fi fi-rr${icon} ${homeServicesStyle.icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SingleServiceBox;
