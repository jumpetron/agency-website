import processStyles from "./WorkingProcess.module.css";

const SingleProcess = ({ item }) => {
  const { process, title, description, icon } = item;

  const processNum = `process-${String(process)}`;

  return (
    <div
      className={`${processStyles.singleProcess} ${processStyles[processNum]}`}
    >
      <div className={`${processStyles.icon}`}>
        <i className={`fi fi-rr${icon}`}></i>
        <div className={processStyles.circle}></div>
      </div>
      <div className={processStyles.processContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleProcess;
