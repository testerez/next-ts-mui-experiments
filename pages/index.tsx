import React from 'react';
import ContactList from 'components/ContactList';
import { getContacts } from 'data/contactApi';

interface Props {
  contacts: Contact[];
}

export default class extends React.Component<Props> {
  static getInitialProps = async () => ({
    contacts: await getContacts(),
  })

  render() {
    return (
      <ContactList contacts={this.props.contacts} />
    )
  }
}
