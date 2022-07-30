import React from "react";
import "./style.css";
import { PencilLine } from "phosphor-react";
import Avatar from "../../Avatar/Avatar";

const SideBar = () => {
  return (
    <aside className="sideBar">
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      />
      <div className="profile">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1611643378160-39d6dd915b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=530&q=80"
          }
        />
        <strong>Bmalkes</strong>
        <span>Front-end</span>
        <footer>
          <a href="#">
            <PencilLine size={24} />
            Edit Profile
          </a>
        </footer>
      </div>
    </aside>
  );
};

export default SideBar;
