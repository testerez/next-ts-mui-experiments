import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Form } from 'react-form';
import FormTextField from './FormTextField';
import { updateContact, addContact } from 'data/contactApi';
import Router from 'next/router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Link from 'next/link';
import { contactRoute } from 'utils/routes';
import BackIcon from 'material-ui-icons/ArrowBack';
import DoneIcon from 'material-ui-icons/Done';

interface Props {
  contact?: Contact;
}

const onSubmit = (contact?: Contact) => async (values: any) => {
  if (contact) {
    await updateContact(contact.id, values);
    Router.push(contactRoute(contact.id));
  } else {
    await addContact(values);
    Router.push('/');
  }
};

const ContactForm = ({ contact }: Props) => (
  <Form onSubmit={onSubmit(contact)} defaultValues={contact}>
    {formApi => (
      <form onSubmit={formApi.submitForm}>
        <Card>
          <AppBar
            position="static"
            color="default"
            style={{ position: 'sticky', top: 0 }}
          >
            <Toolbar>
              <div style={{ flex: 1 }}>
                <Link href={contact ? contactRoute(contact.id) : '/'}>
                  <IconButton>
                    <BackIcon />
                  </IconButton>
                </Link>
              </div>
              <Button color="inherit" type="submit">
                Save <DoneIcon style={{ marginLeft: '10px' }} />
              </Button>
            </Toolbar>
          </AppBar>
          <CardContent>
            <FormTextField field="name" label="Name" />
            <FormTextField field="jobTitle" label="Job title" />
            <FormTextField field="address" label="Address" />
            <FormTextField field="phoneNumber" label="Phone number" />
            <FormTextField field="email" label="Email" />
            <FormTextField field="pictureUrl" label="Picture url" />
          </CardContent>
        </Card>
      </form>
    )}
  </Form>
);

export default ContactForm;
