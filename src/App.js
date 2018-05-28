import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark header">
          <div className="container py-3">
            <div className="logo">
              <h1 className="text-white">
              <i className="fas fa-microphone"></i>
                SSCS
              </h1>
            </div>
            <p className="text-white">スマートスピーカーのコマンド発音代行サービス</p>
          </div>
        </div>
        <Header/>
        <Main/>
    </div>
    );
  }
}

export default App;
