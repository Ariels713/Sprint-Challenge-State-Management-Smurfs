import React, { Component } from "react";
import "./App.css";

//Header components
import HeaderMenu from './header/HeaderMenu'
import HeaderContent from './header/HeaderContent'
import HeaderSubContent from './header/HeaderSubContent'
import TrollCard from './trollCard/TrollCard'

//Form components
import CreateTrollForm from '../components/appForm/CreateTrollForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMenu />
        <HeaderContent />
        <HeaderSubContent />
        <CreateTrollForm />
        <TrollCard />
      </div>
    );
  }
}

export default App;

{/* <h1>SMURFS! 2.0 W/ Redux</h1>
<div>Welcome to your state management version of Smurfs!</div>
<div>Start inside of your `src/index.js` file!</div>
<div>Have fun!</div> */}