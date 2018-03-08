interface Props {
  contacts: Contact[];
}

const ContactList = ({ contacts }: Props) => (
  <ul>
    {contacts.map(c => (
      <li>{c.name}</li>
    ))}
  </ul>
)
export default ContactList;
