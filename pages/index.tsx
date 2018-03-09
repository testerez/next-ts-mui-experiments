import React from 'react';
import ContactList from 'components/ContactList';
import { getContacts } from 'data/contactApi';
import Page from 'components/Page';

interface Props {
  contacts: Contact[];
}

interface State {
  filter: string;
}

export default class extends React.Component<Props, State> {
  state = {filter: ''}

  static getInitialProps = async () => ({
    contacts: await getContacts(),
  })

  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: event.target.value });
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.props.contacts
      .filter(c => c.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    return (
      <Page>
        Filter:
        <input
          type="text"
          onChange={this.handleFilterChange}
          value={filter}
        />
        <ContactList contacts={filteredContacts} />
      </Page>  
    )
  }
}
