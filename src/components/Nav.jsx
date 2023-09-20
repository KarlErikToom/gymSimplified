import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function Nav() {
  return (
    <>
      <Sidebar>
        <Menu>
          <SubMenu label='stuff'>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
          </SubMenu>
          <SubMenu label='stuff'>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
            <MenuItem>me</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
}

export default Nav;
