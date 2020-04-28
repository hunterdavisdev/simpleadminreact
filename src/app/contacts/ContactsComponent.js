import React from 'react';
import { Image, Card, Modal, Header, Button } from 'semantic-ui-react';
import IconizedParagraph from '../common/IconizedParagraph';
import { FiCopy, FiX } from 'react-icons/fi';
import contacts from './contacts';

const ContactsComponent = () => {
  const [departments, setDepartments] = React.useState([]);
  const [visible, setVisibile] = React.useState(false);

  const showModal = () => setVisibile(true);
  const hideModal = () => setVisibile(false);

  const handleClick = (departments, e) => {
    setDepartments(departments);
    showModal();
  };

  return (
    <>
      <Modal open={visible} size='mini' basic>
        <Modal.Actions>
          <p onClick={hideModal} style={{ display: 'flex', alignItems: 'center' }}>
            >
            <FiX /> Close
          </p>
        </Modal.Actions>
        <Modal.Content>
          {departments.map((department) => (
            <>
              <Header inverted as='h3'>
                {department.name}
              </Header>
              <IconizedParagraph
                icon={<FiCopy />}
                text={department.email}
                style={{ cursor: 'pointer' }}
                onClick={() => alert('Copied!')}
              />
              <IconizedParagraph
                icon={<FiCopy />}
                text={department.phone}
                style={{ cursor: 'pointer' }}
                onClick={() => alert('Copied!')}
              />
            </>
          ))}
        </Modal.Content>
      </Modal>
      <Card.Group itemsPerRow={3}>
        {contacts.map((contact) => (
          <Card fluid style={{ padding: '1em', cursor: 'pointer' }} onClick={(e) => handleClick(contact.departments)}>
            <Image src={contact.image} style={{ background: 'white' }} />
          </Card>
        ))}
      </Card.Group>
    </>
  );
};
export default ContactsComponent;
