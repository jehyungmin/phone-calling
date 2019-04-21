import React, { Component } from 'react';
import './App.css';
import { PhoneNumberList } from './Components/PhoneNumberList';
import { CallNumber } from './Components/CallNumber';

class App extends Component {
  state = {
    phonePad: [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#', '', '', ''],
    CreateNumber: [],
  }

  handleCreate = () => {
    console.log("callNumber");
    this.setState({
      ...this.state,
      CreateNumber : this.CreateNumber
    })
  }

  render() {
    // const phonePad = [1,2,3,4,5,6,7,8,9,'*',0,'#'];
    // console.log(phonePad);

    return (
      <div className="App">
        <CallNumber />
        <PhoneNumberList onClick={this.handleCreate} padNum={this.state.phonePad}/>
        
      </div>
    );
  }
}

export default App;
