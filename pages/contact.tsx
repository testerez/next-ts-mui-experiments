import React from 'react';
import ContactCard from 'components/ContactCard';
import { getContact } from 'data/contactApi';
import Page from 'components/Page';

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
      <Page>
        <ContactCard contact={this.props.contact} />
      </Page>  
    )
  }
}
