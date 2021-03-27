import style from "./bubble.module.css";

const Bubble = () => {
  return (
    <>
      <div className={style.bubbleMain}>
        <div className={style.bubbleContainer}>
          <div
            className={[style.bubbleBoxBehind, style.bubblelightbg].join(" ")}
          ></div>
          <div className={style.bubble}>
            <div className={style.leftBubble}>
              <img src="assets/levels.png" alt="levels_icon" />
            </div>
            <div className={style.rightBubble}>
              <div className={style.rightBubbleText}>
                Sign up for a personal trainer to improve your results
              </div>
              <div className={style.bubblebtn}>
                <div className={style.button}>Sign Up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bubble;
