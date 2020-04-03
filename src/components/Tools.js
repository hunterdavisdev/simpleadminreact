import React from 'react';
import { Menu, Confirm, Segment } from 'semantic-ui-react';
import { FiRepeat, FiUsers, FiDollarSign, FiCalendar, FiUserCheck, FiUser, FiTerminal } from 'react-icons/fi';

const fragmentIcon = (FaIcon, title) => (
  <p>
    <FaIcon style={{ marginRight: '1em' }} />
    {title}
  </p>
);

const Tools = () => {
  const [isOpen, setOpen] = React.useState(false);
  const show = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const handleConfirm = () => setOpen(false);

  return (
    <React.Fragment>
      <Confirm open={isOpen} onCancel={handleCancel} onConfirm={handleConfirm} />
      <Menu text vertical>
        <Menu.Item onClick={show} name='search' active={false}>
          {fragmentIcon(FiTerminal, 'Re-index search')}
        </Menu.Item>
        <Menu.Item onClick={show} name='families' active={false}>
          {fragmentIcon(FiTerminal, 'Fix duplicate families')}
        </Menu.Item>
        <Menu.Item onClick={show} name='giving' active={false}>
          {fragmentIcon(FiTerminal, 'Associate giving with pledges')}
        </Menu.Item>
        <Menu.Item onClick={show} name='date' active={false}>
          {fragmentIcon(FiTerminal, 'Fix last attended date')}
        </Menu.Item>
        <Menu.Item onClick={show} name='duplicates' active={false}>
          {fragmentIcon(FiTerminal, 'Find duplicates')}
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default Tools;
