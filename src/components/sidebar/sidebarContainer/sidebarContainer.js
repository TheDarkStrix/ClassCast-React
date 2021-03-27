import style from "./sidebarContainer.module.css";

const SideBarContainer = (props) => {
  return <div className={style.sideBarContainer}>{props.children}</div>;
};

export default SideBarContainer;
