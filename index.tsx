import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';

import {Counter} from './components'

const App = () => (
  <div className="App">
    <img className="App-Logo" src={logo} alt="React Logo" />
    <h1 className="App-Title">Hello Parcel x React</h1>
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
