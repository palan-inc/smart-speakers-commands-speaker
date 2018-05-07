import React, { Component } from 'react';
import './App.css';
import SpeakerButton from './components/speaker_button';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-2 col-md-2 py-3">
                  <h4 className="text-white">
                  <i className="fas fa-microphone"></i>
                     SSCS
                  </h4>
                </div>
                <div className="col-sm-10 col-md-10 py-3">
                  <p className="text-white">スマートスピーカーのコマンド発音代行サービス</p>
                </div>
              </div>
            </div>
          </div>
        <div className="jumbotron">
          <header className="text-center">
            <h2>Smart Speaker's Commands Speaker （SCSS）</h2>
            <p>スマートスピーカーのコマンドを日本語で発音して代行してくれるサイトです。コマンドをクリックすると発音されます。<br/>
              コマンドの追加は<a href="https://github.com/eishis/smart-speakers-commands-speaker" target="_blank" rel="noopener noreferrer">こちらから</a>お願いします。
            </p>
          </header>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-2 mt-2">
              <h2><i className="fab fa-amazon"></i> Alexa</h2>
              <div className="row">
                <SpeakerButton speaker_type="alexa">
                </SpeakerButton>
              </div>
            </div>
            <div className="col-sm-6 mb-2 mt-2">
              <h2><i className="fab fa-google"></i> Google Home</h2>
              <div className="row">
                <SpeakerButton speaker_type="google">
                </SpeakerButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
