import React from 'react';
// import { Menu, Confirm } from 'semantic-ui-react';
import { Menu, Modal, Header, Button, Icon } from 'semantic-ui-react';
import { FiTerminal } from 'react-icons/fi';

const fragmentIcon = (FaIcon, title) => (
  <p>
    <FaIcon style={{ marginRight: '1em' }} />
    {title}
  </p>
);

const ToolsComponent = () => {
  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCancel = () => setOpen(false);
  const handleConfirm = () => setOpen(false);

  return (
    <React.Fragment>
      {/* <Confirm open={isOpen} onCancel={handleCancel} onConfirm={handleConfirm} style={{ width: '50%' }} /> */}
      <Modal basic size='mini' open={isOpen} onClose={handleClose} style={{ width: '85%' }}>
        <Header content='Run script' />
        <Modal.Content>
          <p>Are you sure you want to run SCRIPT_NAME for CHURCH_NAME?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={handleConfirm} inverted>
            <Icon name='remove' /> No
          </Button>
          <Button basic color='green' onClick={handleCancel} inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <Menu size='small' text vertical style={{ width: '100%' }}>
        <Menu.Item onClick={handleOpen} name='search' active={false}>
          {fragmentIcon(FiTerminal, 'Re-index search')}
        </Menu.Item>
        <Menu.Item onClick={handleOpen} name='families' active={false}>
          {fragmentIcon(FiTerminal, 'Fix duplicate families')}
        </Menu.Item>
        <Menu.Item onClick={handleOpen} name='giving' active={false}>
          {fragmentIcon(FiTerminal, 'Associate giving with pledges')}
        </Menu.Item>
        <Menu.Item onClick={handleOpen} name='date' active={false}>
          {fragmentIcon(FiTerminal, 'Fix last attended date')}
        </Menu.Item>
        <Menu.Item onClick={handleOpen} name='duplicates' active={false}>
          {fragmentIcon(FiTerminal, 'Find duplicates')}
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default ToolsComponent;
