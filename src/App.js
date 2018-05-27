import React, { Component } from 'react';
import './App.css';
import SpeakerButton from './components/speaker_button';
import Header from './components/header';

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
      <div className="main">
        <div className="container">
          <div className="tabs">
            <input id="all" type="radio" name="tab_item" checked/>
            <label className="tab_item" for="all"><i className="fab fa-amazon"></i> Alexa</label>
            <input id="programming" type="radio" name="tab_item"/>
            <label className="tab_item" for="programming"><i className="fab fa-google"></i> Google Home</label>
            <div className="tab_content" id="all_content">
              <div className="row">
                <SpeakerButton speaker_type="alexa">
                </SpeakerButton>
              </div>
            </div>
            <div className="tab_content" id="programming_content">
              <div className="row">
                <SpeakerButton speaker_type="google"></SpeakerButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
