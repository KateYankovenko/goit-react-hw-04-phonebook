import { ContactComponent } from '../ContactComponent/ContactComponent';

export const ContactList = ({ values, deleteContact }) => (
  <ul>
    {values.filter === ''
      ? values.contacts.map(contact => (
          <ContactComponent
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      : values.contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(values.filter.toLowerCase())
          )
          .map(contact => (
            <ContactComponent
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
  </ul>
);