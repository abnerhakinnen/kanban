import React from "react";
import * as B from "react-icons/bs";

const sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <a href="#">
            {" "}
            <B.BsFillLayersFill />
            <li>Boards</li>
          </a>
          <a href="#">
            <B.BsPersonLinesFill/>
            <li>Equipes</li>
          </a>
          <a href="#">
            <B.BsGearWideConnected/>
            <li>Ajustes</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default sidebar;
