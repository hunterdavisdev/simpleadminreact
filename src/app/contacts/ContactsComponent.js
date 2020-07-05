import React from 'react';
import { Message, Input, Button, List } from 'semantic-ui-react';
import { FiMail, FiPhoneCall, FiCheck } from 'react-icons/fi';
import contacts from './contacts';

const ContactsComponent = () => {
  const [value, setValue] = React.useState('');

  const divStyle = {
    height: 400,
  };

  const listStyle = {
    height: '100%',
    overflowY: 'scroll',
    padding: '1em',
  };

  const inputStyle = {
    marginBottom: '0.5em',
    border: 0,
    background: '#f6f5fb',
    boxShadow: '4px 4px 7px #d1d0d5, -4px -4px 7px #ffffff',
  };

  const handleSearchChange = (e, { value }) => setValue(value);
  const limitContacts = (query) => (element) => element.name.toLowerCase().includes(query.toLowerCase());

  const CopyContactButton = ({ copyText, color, ...rest }) => {
    const initialState = {
      loading: false,
      success: false,
    };

    const buttonStyle = {
      margin: '0.5em',
      background: '#f6f5fb',
      boxShadow: '4px 4px 7px #d1d0d5, -4px -4px 7px #ffffff',
    };

    const [iconState, setIconState] = React.useState(initialState);

    const handleClick = (e, { value }) => {
      navigator.clipboard.writeText(value);
      setIconState({ ...iconState, loading: true });
      setTimeout(() => {
        setIconState({ loading: false, success: true });
        setTimeout(() => {
          setIconState({ loading: false, success: false });
        }, 1200);
      }, 400);
    };

    return (
      <Button loading={iconState.loading} value={copyText} onClick={handleClick} {...rest} style={buttonStyle}>
        {iconState.success ? <FiCheck style={{ color: iconState.success ? 'green' : null }} /> : rest.children}
      </Button>
    );
  };

  return (
    <div style={divStyle}>
      {/* <Message>{copySuccess}</Message> */}
      <Input
        size='large'
        fluid
        placeholder='Start typing...'
        style={inputStyle}
        onChange={handleSearchChange}
        value={value}
      />
      <List relaxed style={listStyle}>
        {contacts.filter(limitContacts(value)).map((contact, index) => (
          <React.Fragment>
            {contact.departments.map((department, index) => (
              <>
                <List.Item>
                  <List.Content floated='right'>
                    <CopyContactButton copyText={department.email}>
                      <FiMail />
                    </CopyContactButton>
                    <CopyContactButton copyText={department.phone}>
                      <FiPhoneCall />
                    </CopyContactButton>
                  </List.Content>
                  <List.Content>
                    {contact.name} {department.name}
                  </List.Content>
                </List.Item>
              </>
            ))}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};
export default ContactsComponent;
