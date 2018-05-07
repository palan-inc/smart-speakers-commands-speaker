import React, { Component } from 'react';
import './App.css';
import SpeakerButton from './components/speaker_button';

class App extends Component {
  render() {
    return (
      <div>
        <div class="bg-dark header">
            <div class="container py-3">
              <div class="logo">
                  <h1 class="text-white">
                  <i class="fas fa-microphone"></i>
                     SSCS
                  </h1>
                </div>
                  <p class="text-white">スマートスピーカーのコマンド発音代行サービス</p>
            </div>{/* container */}
          </div>
        <div className="jumbotron mv">
          <header class="mv_ttl">
            <h2>Smart Speaker Commands Speaker （SCSS）</h2>
            <p>スマートスピーカーのコマンドを日本語で発音して代行してくれるサイトです。コマンドをクリックすると発音されます。<br/>
              コマンドの追加は<a href="https://github.com/eishis/smart-speakers-commands-speaker" target="_blank" rel="noopener noreferrer">こちらから</a>お願いします。
            </p>
          <div class="radio_button">{/* radio button */}
          <input type="radio" name="s2" id="on" value="1" checked="checked"/>
          <label for="on" class="switch-on">Alexa</label>
          <input type="radio" name="s2" id="off" value="0"/>
          <label for="off" class="switch-off">Google Home</label>
          </div>
            <form id="form1" action="自分のサイトURL">{/* search form */}
            <input id="sbox" name="s" type="text" placeholder="キーワードを入力" />
            <input id="sbtn" type="submit" value="" />
            <i class="fas fa-microphone fa-2x"></i>
            </form>
          </header>
        </div>{/* jumbotron mv */}
      <div class="main">
        <div class="container">

    <div class="tabs">{/* tab switching start*/}
    <input id="all" type="radio" name="tab_item" checked/>
    <label class="tab_item" for="all"><i class="fab fa-amazon"></i> Alexa</label>
    <input id="programming" type="radio" name="tab_item"/>
    <label class="tab_item" for="programming"><i class="fab fa-google"></i> Google Home</label>
    <div class="tab_content" id="all_content">
    <div class="row">
      <SpeakerButton speaker_type="alexa">
      </SpeakerButton>
    </div>
    </div>
    <div class="tab_content" id="programming_content">
    <div class="row">
      <SpeakerButton speaker_type="google">
      </SpeakerButton>
    </div>
</div>
</div>{/* tab switching end*/}
          </div>{/* container */}
        </div>{/* main */}
      </div>
    );
  }
}

export default App;
