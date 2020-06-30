import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FiSearch, FiSliders, FiFileText, FiRotateCcw, FiSettings, FiPhoneOutgoing } from 'react-icons/fi';

const options = [
  {
    route: '/',
    name: 'search',
    icon: FiSearch,
    iconColor: '#fb6340',
    text: 'Search',
  },
  {
    route: '/tools',
    name: 'tools',
    icon: FiSliders,
    iconColor: '#11cdef',
    text: 'Scripts',
  },
  {
    route: '/account',
    name: 'account',
    icon: FiFileText,
    iconColor: '#5e72e4',
    text: 'Account',
  },
  {
    route: '/history',
    name: 'history',
    icon: FiRotateCcw,
    iconColor: '#2dce89',
    text: 'History',
  },
  {
    route: '/contacts',
    name: 'contacts',
    icon: FiPhoneOutgoing,
    iconColor: '#f5365c',
    text: 'Contacts',
  },
  {
    route: '/settings',
    name: 'settings',
    icon: FiSettings,
    iconColor: '#697490',
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
  marginRight: '1em',
};

const Navbar = ({ inverted }) => {
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
          style={{
            background: activeItem === option.name ? '#01b075' : null,
            boxShadow: activeItem === option.name ? 'rgb(1, 173, 115) 0px 0px 20px' : null,
          }}
        >
          <p style={{ ...menuItemStyle, color: 'white' }}>
            <option.icon style={{ ...iconStyle }} />
            {option.text}
          </p>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;
