import style from "./trainers.module.css";

const Trainers = () => {
  return (
    <>
      <div className={style.trainers}>
        <div className={style.trainersHeading}>Your trainers</div>
        {/* 2 */}
        <div className={style.tgContainer}>
          <div className={style.account}>
            <div className={style.profile}>
              <img
                src="assets/profile2.png"
                width="40"
                height="40"
                alt="profile"
              />
              <div className={style.statusIndicator}></div>
            </div>
            <div className={style.user}>
              <div className={style.username}>John Kavanagh</div>
              <div className={style.accType}>MMA coach</div>
            </div>
          </div>

          <div className={style.settingsContainer}>
            <div className={style.settings}>
              <img
                src="assets/comment-message.svg"
                width="25"
                height="25"
                alt="message_icon"
              />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className={style.tgContainer}>
          <div className={style.account}>
            <div className={style.profile}>
              <img
                src="assets/profile3.png"
                width="60"
                height="60"
                alt="message_icon"
              />
              <div className={style.statusIndicator}></div>
            </div>
            <div className={style.user}>
              <div className={style.username}>Jacob Jones</div>
              <div className={style.accType}>Boxing coach</div>
            </div>
          </div>

          <div className={style.settingsContainer}>
            <div className={style.settings}>
              <img
                src="assets/comment-message.svg"
                width="25"
                height="25"
                alt="message_icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainers;
