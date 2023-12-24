import bannerStyle from "./Banner.module.css";

const Banner = ({ title, subHeading }) => {
  const words = subHeading.split(" ");
  const lastWord = words.pop();
  const otherWords = words.join(" ");

  return (
    <div>
      <div className={bannerStyle.bannerContent}>
        <h1>{title}</h1>
        <h2>
          {otherWords} <span>{lastWord}</span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
