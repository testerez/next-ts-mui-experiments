import React from 'react';
import Link from 'next/link'

interface Props {
  contacts: Contact[];
}

const ContactList = ({ contacts }: Props) => (
  <ul>
    {contacts.map(c => (
      <li>
        <Link
          href={{ pathname: '/contact', query: { id: c.id } }}
          children={c.name as any}
        />
      </li>
    ))}
  </ul>
)
export default ContactList;
