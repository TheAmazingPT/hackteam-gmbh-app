import React, {Component} from 'react';

import Map from '../map/map.jsx';
import Sidebox from '../sidebox/sidebox.jsx';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <Sidebox />
      </div>
    );
  }
}

export default App;
