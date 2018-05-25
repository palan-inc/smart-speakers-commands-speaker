import React, { Component } from 'react';

export default class FreeWordBox extends Component {
  constructor(props) {
    super(props);
    this.state = { textValue: "" };
    this._changeText = this._changeText.bind(this);
  }

  _onClick(e) {
    let ssu = new SpeechSynthesisUtterance();
    ssu.text = this.state.textValue;
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);
  }

  _changeText(e) {
    this.setState({textValue: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="radio_button">
          <input type="radio" name="s2" id="on" value="1" checked="checked"/>
          <label for="on" className="switch-on">Alexa</label>
          <input type="radio" name="s2" id="off" value="0"/>
          <label for="off" className="switch-off">Google Home</label>
        </div>
        <div id="form1">
          <input id="sbox"
            defaultValue={this.state.textValue}
            onChange={this._changeText}
            placeholder="キーワードを入力"
          />
          <button id="sbtn" value="" onClick={() => this._onClick()}>
            <i className="fas fa-microphone fa-2x"></i>
          </button>
        </div>
      </div>
    )
  }
}
