import { workingProcess } from "../../../Common/data";
import SingleProcess from "./SingleProcess";
import processStyles from "./WorkingProcess.module.css";

const WorkingProcess = () => {
  return (
    <section className={processStyles.processSection}>
      <div className="container">
        <div className="processContainer">
          <div className={processStyles.processBox}>
            {workingProcess.map((item, process) => (
              <SingleProcess key={process} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
