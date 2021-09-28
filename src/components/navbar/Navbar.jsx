import React from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import notifications from "../../data/notification.json";
import user_image from "../../images/avatar.png";
import user_menu from "../../data/user_menus.json";
import ThemeMenu from "../theme/ThemeMenu";

const notificationItem = (item, index) => (
  <>
    <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </>
);

const userToggle = () => (
  <>
    <div className="navbar-right-user">
      <div className="navbar-right-user-image">
        <img src={user_image} alt="UserImage" />
      </div>
      <div className="navbar-right-user-name">Abdusalomov</div>
    </div>
  </>
);

const userMenu = (item, index) => (
  <>
    <Link to="/" key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  </>
);

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-search">
          <input type="text" placeholder="Search here..." />
          <i className="bx bx-search"></i>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-item">
            <Dropdown
              customToggle={userToggle}
              contentData={user_menu}
              renderItems={(item, index) => userMenu(item, index)}
            />
          </div>
          <div className="navbar-right-item">
            <Dropdown
              icon="bx bx-bell"
              badge="12"
              contentData={notifications}
              renderItems={(item, index) => notificationItem(item, index)}
              renderFooter={() => <Link to="/">View All</Link>}
            />
          </div>
          <div className="navbar-right-item">
            <ThemeMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
