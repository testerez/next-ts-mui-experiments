import React from 'react';
import Link from 'next/link'

interface Props {
  contacts: Contact[];
}

const ContactList = ({ contacts }: Props) => (
  <ul>
    {contacts.map(c => (
      <li key={c.id}>
        <Link href={{ pathname: '/contact', query: { id: c.id } }}>
          <a>{c.name}</a>
        </Link>  
      </li>
    ))}
  </ul>
)
export default ContactList;
