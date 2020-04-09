import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiSliders,
  FiFileText,
  FiRotateCcw,
  FiSettings
} from "react-icons/fi";

const options = [
  {
    route: "/",
    name: "search",
    icon: FiSearch,
    text: "Search"
  },
  {
    route: "/tools",
    name: "tools",
    icon: FiSliders,
    text: "Scripts"
  },
  {
    route: "/account",
    name: "account",
    icon: FiFileText,
    text: "Account"
  }
];

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState("search");
  const handleClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu vertical fluid secondary style={{ paddingTop: "1.5em", margin: 0 }}>
      <Menu.Item
        as={Link}
        to="/"
        name="search"
        active={activeItem === "search"}
        onClick={handleClick}
      >
        <p>
          <FiSearch /> Scripts
        </p>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/tools"
        name="tools"
        active={activeItem === "tools"}
        onClick={handleClick}
      >
        <p>
          <FiSliders /> Scripts
        </p>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/account"
        name="account"
        active={activeItem === "account"}
        onClick={handleClick}
      >
        <p>
          <FiFileText /> Account
        </p>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/history"
        name="history"
        active={activeItem === "history"}
        onClick={handleClick}
      >
        <p>
          <FiRotateCcw /> History
        </p>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/settings"
        name="settings"
        active={activeItem === "settings"}
        onClick={handleClick}
      >
        <p>
          <FiSettings /> Settings
        </p>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
