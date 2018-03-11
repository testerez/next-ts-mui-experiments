import React from 'react';
import ContactForm from 'components/ContactForm';
import { getContact } from 'data/contactApi';
import Page from 'components/Page';
import Head from 'next/head';

interface Props {
  contact?: Contact;
}

export default class extends React.Component<Props> {
  static getInitialProps = async ({ query }: any) => ({
    // TODO: hanlde 404 pages
    contact: query.id && (await getContact(query.id)),
  });

  render() {
    const { contact } = this.props;
    return (
      <Page>
        <Head>
          <title>{contact ? `Edit ${contact.name}` : 'Add contact'}</title>
        </Head>
        <ContactForm contact={contact} />
      </Page>
    );
  }
}
