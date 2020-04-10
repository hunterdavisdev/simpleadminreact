import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FiSearch, FiSliders, FiFileText, FiRotateCcw, FiSettings, FiPhoneOutgoing } from 'react-icons/fi';

const options = [
  {
    route: '/',
    name: 'search',
    icon: FiSearch,
    text: 'Search',
  },
  {
    route: '/tools',
    name: 'tools',
    icon: FiSliders,
    text: 'Scripts',
  },
  {
    route: '/account',
    name: 'account',
    icon: FiFileText,
    text: 'Account',
  },
  {
    route: '/history',
    name: 'history',
    icon: FiRotateCcw,
    text: 'History',
  },
  {
    route: '/contacts',
    name: 'contacts',
    icon: FiPhoneOutgoing,
    text: 'Contacts',
  },
  {
    route: '/settings',
    name: 'settings',
    icon: FiSettings,
    text: 'Settings',
  },
];

const menuStyle = {
  paddingTop: '1.5em',
  margin: 0,
};

const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  marginRight: '0.5em',
};

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState('search');
  const handleClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu vertical fluid secondary style={menuStyle}>
      {options.map((option) => (
        <Menu.Item
          as={Link}
          to={option.route}
          name={option.name}
          active={activeItem === option.name}
          onClick={handleClick}
        >
          <p style={menuItemStyle}>
            <option.icon style={iconStyle} />
            {option.text}
          </p>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;
