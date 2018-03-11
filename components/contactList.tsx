import React from 'react';
import Link from 'next/link';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { getPictureUrl } from 'utils/contactUtils';

interface Props {
  contacts: Contact[];
}

const ContactList = ({ contacts }: Props) => (
  <List component="div">
    {contacts.map(c => (
      <Link key={c.id} href={{ pathname: '/contact', query: { id: c.id } }}>
        <ListItem button component="a">
          <Avatar src={getPictureUrl(c)} />
          <ListItemText primary={c.name} secondary={c.jobTitle} />
        </ListItem>
      </Link>
    ))}
  </List>
);
export default ContactList;
