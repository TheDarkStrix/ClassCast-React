import style from "./training.module.css";

const Training = () => {
  return (
    <>
      <div className={style.trainingContainer}>
        <div className={style.heading}>Today trainings</div>
        <div className={style.trainingBoxContainer}>
          <div
            className={[style.trainingBoxBehind, style.tbluelight].join(" ")}
          ></div>
          <div className={[style.trainingBox, style.tblue].join(" ")}>
            <div>
              <div className={style.title}>Box</div>
              <div className={style.subTitle}>Sport Club</div>
              <div className={style.timeContainer}>
                <div className={style.time}>10:00</div>
              </div>
            </div>
            <div className={style.exDetails}>
              <div className={style.duration}>40</div>
              <div className={style.spec}>min</div>
              <div className={style.excercise}>Warm-up</div>
            </div>
            <div className={style.exDetails}>
              <div className={style.duration}>20</div>
              <div className={style.spec}>min</div>
              <div className={style.excercise}>Stretch</div>
            </div>
            <div>
              <div className={style.menu}>
                <img src="assets/ellipsis-v.svg" alt="ellipse_icon" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.trainingBoxContainer}>
          <div
            className={[style.trainingBoxBehind, style.tredlight].join(" ")}
          ></div>
          <div className={[style.trainingBox, style.tred].join(" ")}>
            <div>
              <div className={style.title}>Box</div>
              <div className={style.subTitle}>Sport Club</div>
              <div className={style.timeContainer}>
                <div className={style.time}>10:00</div>
              </div>
            </div>
            <div className={style.exDetails}>
              <div className={style.duration}>40</div>
              <div className={style.spec}>min</div>
              <div className={style.excercise}>Warm-up</div>
            </div>
            <div className={style.exDetails}>
              <div className={style.duration}>20</div>
              <div className={style.spec}>min</div>
              <div className={style.excercise}>Stretch</div>
            </div>
            <div>
              <div className={style.menu}>
                <img src="assets/ellipsis-v.svg" alt="ellipse_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
