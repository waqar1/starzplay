/*
    ./client/components/App.jsx
*/
import React from 'react';
import DetailsComponent from './details/DetailsComponent.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <DetailsComponent />
      </div>
    );
  }
}