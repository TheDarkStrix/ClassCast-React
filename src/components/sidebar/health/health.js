import style from "./health.module.css";

const Health = () => {
  return (
    <>
      <div className={style.healthContainer}>
        <div className={style.health}>Health</div>
        <div className={style.section3Container}>
          <div className={style.section3}>
            <div className={style.data}>6:25</div>
            <div className={style.holder}>
              <div className={[style.icon, style.blue].join(" ")}>
                <img src="assets/moon.PNG" alt="moon" />
              </div>
              <div className={style.attr}>Hours</div>
            </div>
            <div className={[style.slider, style.slider_blue].join(" ")}></div>
          </div>
          <div className={style.vd}></div>
          <div className={style.section3}>
            <div className={style.data}>120</div>
            <div className={style.holder}>
              <div className={[style.icon, style.red].join(" ")}>
                <img src="assets/heart.PNG" alt="heart" />
              </div>
              <div className={style.attr}>Bpm</div>
            </div>
            <div className={[style.slider, style.slider_red].join(" ")}></div>
          </div>
          <div className={style.vd}></div>
          <div className={style.section3}>
            <div className={style.data}>1.84</div>
            <div className={style.holder}>
              <div className={[style.icon, style.green].join(" ")}>
                <img src="assets/apple.PNG" alt="apple" />
              </div>
              <div className={style.attr}>Kcal</div>
            </div>
            <div className={[style.slider, style.slider_green].join(" ")}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Health;
