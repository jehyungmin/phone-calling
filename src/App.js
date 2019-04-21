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
    }else{
      this.setState({
        //number: (this.state.number + button).replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3")

        //number: this.state.number.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3") + button
        number: this.state.number + button
        
       //number: this.state.number + button
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
