import React from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { deleteContact } from 'data/contactApi';
import Router from 'next/router';

interface Props {
  contact: Contact;
}

const onDeleteContact = (contactId: string) => {
  deleteContact(contactId);
  Router.replace('/');
};

const ContactCard = ({ contact }: Props) => (
  <Card>
    <CardMedia
      image={contact.pictureUrl}
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
    <CardActions>
      <Button size="small" color="primary">
        Edit
      </Button>
      <Button
        size="small"
        color="primary"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </Button>
    </CardActions>
  </Card>
);
export default ContactCard;
