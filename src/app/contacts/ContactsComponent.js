import React from 'react';
import { Container, List, Label } from 'semantic-ui-react';
import contacts from './contacts';

const ContactsComponent = () => {
  return (
    <Container>
      <List size='tiny' divided>
        {contacts.map((contact) => (
          <List.Item>
            {contact.name}
            {contact.departments.map((department) => (
              <Label horizontal onClick={() => alert('Text copied to clipboard')}>
                {department.name}
              </Label>
            ))}
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default ContactsComponent;
