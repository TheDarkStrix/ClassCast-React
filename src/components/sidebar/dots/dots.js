import style from "./dots.module.css";

const Dots = () => {
  return (
    <>
      <div className={style.dotsContainer}>
        <div className={style.dots}>
          <img src="assets/ellipsis-v.svg" alt="ellipse_dots" />
        </div>
      </div>
    </>
  );
};

export default Dots;
