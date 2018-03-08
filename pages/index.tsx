import React from 'react';
import ContactList from 'components/contactList';
import { getContacts } from 'data/contactApi';

interface Props {
  contacts: Contact[];
}

export default class extends React.Component<Props> {
  static getInitialProps = async () => ({
    contacts: await getContacts(),
  })

  render() {
    console.log(this.props);
    return (
      <ContactList contacts={this.props.contacts} />
    )
  }
}
