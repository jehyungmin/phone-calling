import React, { Component } from 'react';
import './App.css';
import { PhoneNumberList } from './Components/PhoneNumberList';
import { CallNumber } from './Components/CallNumber';

class App extends Component {

  constructor() {
    super();
    this.state ={
      number: "",
      phonePad: [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#', '', '', 'x'],
    }
  }

  handleCreate= (button) => {
    // console.log('success');

    if(button === "BS"){
      this.backspace()
    }else if(button === "NU"){
      this.setState({
        number: this.state.number
      })
    }else if(button === "CALL"){
      //alert(this.state.number)
      const {number} = this.state;
      let phoneFormat = 'number';
      if (number.length === 11) {
        phoneFormat = number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      } else if (number.length === 8) {
        phoneFormat = number.replace(/(\d{4})(\d{4})/, '$1-$2')
      } else {
        if (number.indexOf('02') === 0) {
          phoneFormat = number.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3')
        } else {
          phoneFormat = number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
        }
      }
      alert(phoneFormat)
    }else{
      this.setState({
        number: this.state.number + button
      });
    }
  }
  
  backspace = () =>{
    this.setState({
      number: this.state.number.slice(0,-1)
    })
  }
  render() {

    return (
      <div className="App">
        <CallNumber number={this.state.number} />
        <PhoneNumberList number={this.state.number} onClick={this.handleCreate} padNum={this.state.phonePad}/>
      </div>
    );
  }
}

export default App;
