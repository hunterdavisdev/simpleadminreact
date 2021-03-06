import React from 'react';
import { Menu } from 'semantic-ui-react';
import ConfirmationModal from '../common/ConfirmationModal';
import { FiTerminal } from 'react-icons/fi';
import IconizedParagraph from '../common/IconizedParagraph';
import {
  reindexSearch,
  fixDuplicateFamilies,
  associateGiving,
  fixLastAttendedDate,
  updateLastActivity,
} from './scripts';

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
  {
    name: 'activity',
    text: 'Fix last activity date',
    script: updateLastActivity,
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
      <Menu size='small' secondary vertical style={{ width: '100%' }}>
        {options.map((option) => (
          <Menu.Item name={option.name} onClick={() => setVisible(true)}>
            <IconizedParagraph icon={<FiTerminal />} text={option.text} />
          </Menu.Item>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default ToolsComponent;
