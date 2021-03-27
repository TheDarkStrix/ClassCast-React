import style from "./account.module.css";

const Account = () => {
  return (
    <>
      <div className={style.AccountContainer}>
        <div className={style.account}>
          <div className={style.profile}>
            <img
              src="assets/profile1.png"
              width="40"
              height="40"
              alt="profile_image"
            />
          </div>
          <div className={style.user}>
            <div className={style.username}>Floyd Miles</div>
            <div className={style.accType}>Free Account</div>
          </div>
        </div>
        <div className={style.settingsbtn}>
          <div className={style.notificationContainer}>
            <div className={style.notification}>
              <img
                src="assets/bell.svg"
                width="25"
                height="25"
                alt="notification_icon"
              />
            </div>
            <div className={style.indicator}>3</div>
          </div>
          <div className={style.settingsContainer}>
            <div className={style.settings}>
              <img
                src="assets/setting.svg"
                width="25"
                height="25"
                alt="settings_icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
