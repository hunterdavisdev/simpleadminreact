import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState('search');
  const handleClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu vertical fluid secondary>
      <Menu.Item as={Link} to='/' name='search' active={activeItem === 'search'} onClick={handleClick} />
      <Menu.Item as={Link} to='/tools' name='tools' active={activeItem === 'tools'} onClick={handleClick} />
      <Menu.Item as={Link} to='/account' name='account' active={activeItem === 'account'} onClick={handleClick} />
    </Menu>
  );
};

export default Navbar;
