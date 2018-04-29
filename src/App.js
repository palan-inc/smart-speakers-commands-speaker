import React, { Component } from 'react';
import './App.css';
import SpeakerButton from './components/speaker_button';

class App extends Component {
  render() {
    return (
      <div>
        <div class="bg-dark">
            <div class="container">
              <div class="row">
                <div class="col-sm-2 col-md-2 py-3">
                  <h4 class="text-white">
                  <i class="fas fa-microphone"></i>
                     SSCS
                  </h4>
                </div>
                <div class="col-sm-10 col-md-10 py-3">
                  <p class="text-white">スマートスピーカーのコマンド代行サービス</p>
                </div>
              </div>
            </div>
          </div>
        <div className="jumbotron">
          <header class="text-center">
            <h2>Smart Speaker Commands Speaker （SCSS）</h2>
            <p>スマートスピーカーのコマンドを日本語で発音して代行してくれるサイトです。コマンドをクリックすると発音されます。<br/>
              コマンドの追加は<a href="" target="_blank">こちらから</a>お願いします。
            </p>
          </header>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h2><i class="fab fa-amazon"></i> Alexa</h2>
              <div class="row">
                <SpeakerButton speaker_type="alexa">
                </SpeakerButton>
              </div>
            </div>
            <div class="col-sm-6">
              <h2><i class="fab fa-google"></i> Google Home</h2>
              <div class="row">
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