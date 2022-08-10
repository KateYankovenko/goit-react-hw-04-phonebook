import { ContactComponent } from '../ContactComponent/ContactComponent';

export const ContactList = ({ contacts, filter, deleteContact }) => (
  <ul>
    {filter === ''
      ? contacts.map(contact => (
          <ContactComponent
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      : contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
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