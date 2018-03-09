interface Props {
  contact: Contact;
}

const ContactDetails = ({ contact }: Props) => (
  <ul>
    {Object.keys(contact).map((k) => (
      <li key={k}>
        <b>{k}</b>: {contact[k as keyof Contact]}
      </li>
    ))}
  </ul>
)
export default ContactDetails;
