
import React from 'react';

import './App.css';
import NavBar from './components/Navbar'
import Users from './Users';
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Users />
        </div>
      
    )
  }

}
export default App;
