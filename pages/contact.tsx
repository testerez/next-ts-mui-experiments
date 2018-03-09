import React from 'react';
import ContactDetails from 'components/ContactDetails';
import { getContact } from 'data/contactApi';

interface Props {
  contact: Contact;
}

export default class extends React.Component<Props> {
  static getInitialProps = async ({ req }: any) => ({
    // TODO: hanlde 404 pages
    contact: await getContact('c1'),
  })

  render() {
    return (
      <ContactDetails contact={this.props.contact} />
    )
  }
}
