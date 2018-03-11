import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import { deleteContact } from 'data/contactApi';
import Router from 'next/router';
import Link from 'next/link';
import { getPictureUrl } from 'utils/contactUtils';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/ModeEdit';
import BackIcon from 'material-ui-icons/ArrowBack';

interface Props {
  contact: Contact;
}

const onDeleteContact = (contact: Contact) => {
  if (confirm(`Delete ${contact.name}?`)) {
    deleteContact(contact.id);
    Router.replace('/');
  }
};

const ContactCard = ({ contact }: Props) => (
  <Card>
    <AppBar
      position="static"
      color="default"
      style={{ position: 'sticky', top: 0 }}
    >
      <Toolbar>
        <div style={{ flex: 1 }}>
          <Link href="/">
            <IconButton>
              <BackIcon />
            </IconButton>
          </Link>
        </div>
        <Link href={{ pathname: '/edit', query: { id: contact.id } }}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton onClick={() => onDeleteContact(contact)}>
          <DeleteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <CardMedia
      image={getPictureUrl(contact)}
      title={contact.name}
      style={{ paddingTop: '60%' }}
    />
    <CardContent>
      <Typography variant="headline" component="h2">
        {contact.name}
      </Typography>
      <Typography variant="subheading" color="textSecondary">
        {contact.jobTitle}
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell type="head">
              <b>Email</b>
            </TableCell>
            <TableCell>{contact.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell type="head">
              <b>Phone</b>
            </TableCell>
            <TableCell>{contact.phoneNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell type="head">
              <b>Address</b>
            </TableCell>
            <TableCell>{contact.address}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);
export default ContactCard;
