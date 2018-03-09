import React from 'react';
import ContactList from 'components/ContactList';
import { getContacts } from 'data/contactApi';
import Page from 'components/Page';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import PersonAdd from 'material-ui-icons/PersonAdd';

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
        <Paper>
          <AppBar position="static" color="default" style={{position: 'sticky', top: 0}}>
            <Toolbar>
              <div style={{flex:1}}>
                <Input
                  autoFocus
                  placeholder="Search contact"
                  onChange={this.handleFilterChange}
                  value={filter}
                />
              </div>  
              <IconButton>
                <PersonAdd />
              </IconButton>
            </Toolbar>
          </AppBar>
          <ContactList contacts={filteredContacts} />
        </Paper>
      </Page>  
    )
  }
}
