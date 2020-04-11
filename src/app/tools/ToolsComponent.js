import React from 'react';
import { Menu } from 'semantic-ui-react';
import ConfirmationModal from '../common/ConfirmationModal';
import { FiTerminal } from 'react-icons/fi';
import { reindexSearch, fixDuplicateFamilies, associateGiving, fixLastAttendedDate } from './scripts';

const fragmentIcon = (FaIcon, title) => (
  <p>
    <FaIcon style={{ marginRight: '1em' }} />
    {title}
  </p>
);

const options = [
  {
    name: 'search',
    text: 'Re-index search',
    script: reindexSearch,
  },
  {
    name: 'families',
    text: 'Fix duplicate families',
    script: fixDuplicateFamilies,
  },
  {
    name: 'giving',
    text: 'Associate giving with pledges',
    script: associateGiving,
  },
  {
    name: 'date',
    text: 'Fix last attended date',
    script: fixLastAttendedDate,
  },
];

const ToolsComponent = () => {
  const [visible, setVisible] = React.useState(false);
  const [activeScript, setScript] = React.useState();
  const handleClose = () => setVisible(false);
  const handleCancel = () => setVisible(false);
  const handleConfirm = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      <ConfirmationModal
        header='Run script'
        description='Are you sure you want to run SCRIPT_NAME for CHURCH_NAME?'
        open={visible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onClose={handleClose}
      />
      <Menu size='small' text vertical style={{ width: '100%' }}>
        {options.map((option) => (
          <Menu.Item name={option.name} onClick={() => setVisible(true)}>
            {fragmentIcon(FiTerminal, option.text)}
          </Menu.Item>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default ToolsComponent;
