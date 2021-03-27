import style from "./leftContent.module.css";

const LeftContent = () => {
  return (
    <>
      <div className={style.leftContent}>
        <div className={style.company}>
          <img src="assets/classCast.png" alt="company_logo" />
        </div>
      </div>
    </>
  );
};

export default LeftContent;
