import React from 'react';
import ContactDetails from 'components/ContactDetails';
import { getContact } from 'data/contactApi';

interface Props {
  contact: Contact;
}

export default class extends React.Component<Props> {
  static getInitialProps = async ({ query }: any) => ({
    // TODO: hanlde 404 pages
    contact: await getContact(query.id),
  })

  render() {
    return (
      <ContactDetails contact={this.props.contact} />
    )
  }
}
