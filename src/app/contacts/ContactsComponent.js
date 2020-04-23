import React from "react";
import { Accordion, Image } from "semantic-ui-react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import contacts from "./contacts";

const ContactsComponent = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (e, { index }) =>
    setActiveIndex(activeIndex === index ? -1 : index);

  const iconStyle = {
    marginRight: "8px"
  };

  return (
    <Accordion>
      {contacts.map((contact, index) => (
        <>
          <Accordion.Title index={index} onClick={handleClick}>
            <p style={{ display: "flex", alignItems: "center" }}>
              {activeIndex === index ? (
                <FiChevronDown style={iconStyle} />
              ) : (
                <FiChevronRight style={iconStyle} />
              )}
              <Image
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "10px"
                }}
                src={contact.icon}
              />
              {contact.name}
            </p>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <Accordion.Accordion>
              {contact.departments.map(department => (
                <>
                  <Accordion.Title
                    onClick={() => alert("Text copied to clipboard")}
                  >
                    {department.name}
                  </Accordion.Title>
                  <Accordion.Content active={false}>
                    <p> Email: {department.email}</p>
                    <p> Phone #: {department.phone}</p>
                  </Accordion.Content>
                </>
              ))}
            </Accordion.Accordion>
          </Accordion.Content>
        </>
      ))}
    </Accordion>
  );
};

export default ContactsComponent;
