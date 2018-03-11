import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Form } from 'react-form';
import FormTextField from './FormTextField';
import { updateContact, addContact } from 'data/contactApi';
import Router from 'next/router';

interface Props {
  contact?: Contact;
}

const onSubmit = (contact?: Contact) => async (values: any) => {
  if (contact) {
    await updateContact(contact.id, values);
    Router.push({ pathname: '/contact', query: { id: contact.id } });
  } else {
    await addContact(values);
    Router.push('/');
  }
};

const ContactForm = ({ contact, classes }: Props & StyleProps) => (
  <Form onSubmit={onSubmit(contact)}>
    {formApi => (
      <form onSubmit={formApi.submitForm}>
        <Card>
          <CardContent>
            <FormTextField field="name" label="Name" />
            <FormTextField field="jobTitle" label="Job title" />
            <FormTextField field="address" label="Address" />
            <FormTextField field="phoneNumber" label="Phone number" />
            <FormTextField field="email" label="Email" />
            <FormTextField field="pictureUrl" label="Picture url" />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button variant="raised" color="primary" type="submit">
              Save
            </Button>
          </CardActions>
        </Card>
      </form>
    )}
  </Form>
);

export default (withStyles({
  actions: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
})(ContactForm) as any) as React.SFC<Props>;
