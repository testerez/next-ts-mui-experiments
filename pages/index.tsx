import React from 'react';
import ContactList from 'components/ContactList';
import { getContacts } from 'data/contactApi';
import Page from 'components/Page';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Input, { InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import SearchIcon from 'material-ui-icons/Search';
import Head from 'next/head';
import Link from 'next/link';

interface Props {
  contacts: Contact[];
}

interface State {
  filter: string;
}

export default class extends React.Component<Props, State> {
  state = { filter: '' };

  static getInitialProps = async () => ({
    contacts: await getContacts(),
  });

  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.props.contacts.filter(
      c => c.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    );
    return (
      <Page>
        <Head>
          <title>Contacts</title>
        </Head>
        <Paper>
          <AppBar
            position="static"
            color="default"
            style={{ position: 'sticky', top: 0 }}
          >
            <Toolbar>
              <div style={{ flex: 1 }}>
                <Input
                  autoFocus
                  placeholder="Contact name"
                  onChange={this.handleFilterChange}
                  value={filter}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </div>
              <Link href="/edit">
                <IconButton>
                  <PersonAddIcon />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
          <ContactList contacts={filteredContacts} />
        </Paper>
      </Page>
    );
  }
}
