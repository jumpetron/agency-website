import workWithUsStyles from "./WorkWithUsCard.module.css";

const WorkWithUsCard = () => {
  return (
    <section className={workWithUsStyles.workWithUsSection}>
      <div className="container">
        <div className={workWithUsStyles.workWithUsContent}>
          <div className={workWithUsStyles.title}>
            <h3>Work with us</h3>
          </div>
          <div className={workWithUsStyles.getStarted}>
            <div>
              <p>Get started</p>
            </div>
            <div className={workWithUsStyles.ctaBtnBox}>
              <button>
                <i className="fi fi-rr-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsCard;
