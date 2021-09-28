import React, { useState } from "react";
import "./SidebarStyle.css";

import logo from "../../images/logo.png";
import sidebar_items from "../../data/sidebar_routes.json";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [route, setRoute] = useState("");
  const activeItem = sidebar_items.findIndex((item) => item.route === route);

  return (
    <>
      <div className="sidebar">
        <Link to="/" onClick={() => setRoute("/")}>
          <div className="sidebar-logo">
            <img src={logo} alt="LogoImage" />
          </div>
        </Link>
        {sidebar_items.map((item, index) => (
          <Link
            to={item.route}
            key={index}
            onClick={() => setRoute(item.route)}
          >
            <SidebarItem
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
