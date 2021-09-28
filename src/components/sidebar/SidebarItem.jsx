import React from "react";
import "./SidebarStyle.css";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <>
      <div className="sidebar-item">
        <div className={`sidebar-item-inner ${active}`}>
          <i className={props.icon}></i>
          <span>{props.title}</span>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;
