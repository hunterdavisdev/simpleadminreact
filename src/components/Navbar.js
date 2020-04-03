import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FiSearch, FiSliders, FiFileText } from 'react-icons/fi';

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState('search');
  const handleClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu vertical fluid secondary>
      <Menu.Item header>Simple Admin</Menu.Item>
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
    </Menu>
  );
};

export default Navbar;
