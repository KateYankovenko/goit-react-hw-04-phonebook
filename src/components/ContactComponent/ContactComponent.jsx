import styled from 'styled-components';

const Element = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 10px;
  color: white;
  background-color: #193ce999;
  cursor: pointer;
  border-radius: 5px;
`;

export const ContactComponent = ({ contact, deleteContact }) => (
  <Element>
    <p>
      {contact.name}: {contact.number}
    </p>
    <Button type="button" onClick={() => deleteContact(contact.id)}>
      Delete
    </Button>
  </Element>
);