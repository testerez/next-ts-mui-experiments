interface Props {
  contact: Contact;
}

const ContactDetails = ({ contact }: Props) => console.log(contact) || (
  <ul>
    {Object.keys(contact).map((k) => (
      // @ts-ignore
      <li><b>{k}</b>: {contact[k]}</li>
    ))}
  </ul>
)
export default ContactDetails;
