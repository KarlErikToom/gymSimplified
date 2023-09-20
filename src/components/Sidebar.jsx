import React from "react";
import { Sidebar as Side, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function Sidebar({ isOpen }) {
  return (
    <Side className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <Menu>
        <SubMenu label="stuff">
          <MenuItem>me</MenuItem>
          <MenuItem>me</MenuItem>
          <MenuItem>me</MenuItem>
        </SubMenu>
        <SubMenu label="stuff">
          <MenuItem>me</MenuItem>
          <MenuItem>me</MenuItem>
          <MenuItem>me</MenuItem>
        </SubMenu>
        <SubMenu label="stuff">
          <MenuItem>me</MenuItem>
          <MenuItem>me</MenuItem>
          <MenuItem>me</MenuItem>
        </SubMenu>
        <SubMenu label="stuff">
          <MenuItem>me</MenuItem>
          <MenuItem>me</MenuItem>
          <MenuItem>me</MenuItem>
        </SubMenu>
      </Menu>
    </Side>
  );
}

export default Sidebar;
