import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FiSearch, FiSliders, FiFileText, FiRotateCcw, FiSettings } from 'react-icons/fi';

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState('search');
  const handleClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu vertical fluid secondary style={{ margin: '0!important', paddingTop: '1.5em' }}>
      <Menu.Item as={Link} to='/' name='search' active={activeItem === 'search'} onClick={handleClick}>
        <p>
          <FiSearch /> Search
        </p>
      </Menu.Item>
      <Menu.Item as={Link} to='/tools' name='tools' active={activeItem === 'tools'} onClick={handleClick}>
        <p>
          <FiSliders /> Scripts
        </p>
      </Menu.Item>
      <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={handleClick}>
        <p>
          <FiFileText /> Account
        </p>
      </Menu.Item>
      <Menu.Item as={Link} to='/history' name='history' active={activeItem === 'history'} onClick={handleClick}>
        <p>
          <FiRotateCcw /> History
        </p>
      </Menu.Item>
      <Menu.Item as={Link} to='/settings' name='settings' active={activeItem === 'settings'} onClick={handleClick}>
        <p>
          <FiSettings /> Settings
        </p>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
