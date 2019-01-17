import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    users: {}
  };

  componentDidMount() {
    console.log('fu');
    fetch(
      'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users'
    )
    .then(response => response.json())
    .then(users => this.setState({ users: users.users }));
  }

  fetchUsers(endpoint) {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.warn(error));
  }

  getUsers() {
    this.fetchUsers(
      'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users'
    ).then(users => {
      if (users.length) {
        this.setState({ users });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <h1>YO</h1>
        <ol>
          {this.state.users.map(user => {
            return <li>{user.name.first}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
