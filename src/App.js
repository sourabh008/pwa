import React from 'react';
import './App.css';
import axios from "axios";
class App extends React.Component {
  state = {
    users: [],
    isLoading:true
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers() {
    // Where we're fetching data from
    axios
      .get('https://us-central1-socialmediaapp-d1306.cloudfunctions.net/api/screams')
      // We get the API response and receive data in JSON format...
      // ...then we update the users state
      .then(data =>
        
        this.setState({
          users: data.data,
          isLoading: false,
        })
        // console.log(data)
      )
      // Catch any errors we hit and update the app
      .catch(error => console.log(error));
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <h1>User Posts</h1>
        {/* // Display a message if we encounter an error
        // Here's our data check */}
        {!isLoading ? (
          users.map(user => {
            const { body } = user;
            return (
              <div key={body}>
                <p>
                {body}</p>
               
                <hr />
              </div>
            );
          })
        // If there is a delay in data, let's let the user know it's loading
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
  
}





export default App;
