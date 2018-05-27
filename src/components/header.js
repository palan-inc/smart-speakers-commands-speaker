import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text_value: "",
      speaker_type: "alexa",
    };
    this._changeText = this._changeText.bind(this);
    this._toggleButton = this._toggleButton.bind(this);
  }

  _onClick(e) {
    let ssu = new SpeechSynthesisUtterance();
    let pre_commands = '';
    switch (this.state.speaker_type) {
      case 'alexa': {
        pre_commands = "alexa、";
        break;
      }
      case 'google': {
        pre_commands = "OK Google、";
        break;
      }
      default:
      break;
    }
    ssu.text = pre_commands + this.state.text_value;
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);
  }

  _changeText(e) {
    this.setState({text_value: e.target.value});
  }

  _toggleButton(e) {
    this.setState({speaker_type: e.target.value});
  }

  render() {
    return (
      <div className="jumbotron mv">
        <header className="mv_ttl">
          <h2>Smart Speaker's Commands Speaker （SSCS）</h2>
          <p>スマートスピーカーのコマンドを日本語で発音して代行してくれるサイトです。コマンドをクリックすると発音されます。<br/>
            コマンドの追加は<a href="https://github.com/eishis/smart-speakers-commands-speaker" target="_blank" rel="noopener noreferrer">こちらから</a>お願いします。
          </p>
          <div>
            <div className="radio_button">
              <input
                type="radio"
                value="alexa"
                name="s2"
                id="alexa"
                checked={this.state.speaker_type === "alexa"}
                onChange={this._toggleButton}
              />
              <label for="alexa" className="switch-alexa">Alexa</label>
              <input
                type="radio"
                value="google"
                name="s2"
                id="google"
                checked={this.state.speaker_type === "google"}
                onChange={this._toggleButton}
              />
              <label for="google" className="switch-google">Google Home</label>
            </div>
            <div id="form1">
              <input id="sbox"
                defaultValue={this.state.text_value}
                onChange={this._changeText}
                placeholder="キーワードを入力"
              />
              <button id="sbtn" value="" onClick={() => this._onClick()}>
                <i className="fas fa-microphone fa-2x"></i>
              </button>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
