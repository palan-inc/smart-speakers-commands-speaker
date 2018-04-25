import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onClick(e) {
    var ssu = new SpeechSynthesisUtterance();
    ssu.text = 'オッケーグーグル 、 シ　シ　ド・カフカのりめんばーみーながして';
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);
  }

  render() {
    return (
      <div>
        <div class="bg-dark">
            <div class="container">
              <div class="row">
                <div class="col-sm-2 col-md-2 py-3">
                  <h4 class="text-white">
                  <i class="fas fa-microphone"></i>
                     SCSS
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
            <p>スマートスピーカーのコマンドを発音して代行してくれるサイトです。コマンドをクリックすると発音されます。<br/>
              コマンドの追加は<a href="" target="_blank">こちらから</a>お願いします。
            </p>
          </header>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h2><i class="fab fa-amazon"></i> Alexa</h2>
              <button class="card" onClick={this.onClick}>
                <div class="card-body">
                  <h4 class="card-title">
                    <i class="fas fa-play"></i>
                    音楽をかける
                  </h4>
                  <p class="card-text">Alexa, 音楽かけて</p>
                </div>
              </button>
            </div>
            <div class="col-sm-6">
              <h2><i class="fab fa-google"></i> Google Home</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;