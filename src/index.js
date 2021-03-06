import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ModalGallery from './routing';
import ViceHeaderLogo from '../public/images/vice_header_logo.png';
import './App.css';

const TopViceHeader = React.createClass({
  render(){    
    return (
            <div>
              <img alt="topViceHeader" src={ViceHeaderLogo} />
              <h1>Shows</h1>
            </div>
      )
  }
});

ReactDOM.render(
	<TopViceHeader />, 
	document.getElementById('topHeader')
);

ReactDOM.render(
  <ModalGallery />,
  document.getElementById('app')
);