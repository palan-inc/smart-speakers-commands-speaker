import React, { Component } from 'react';
import SpeakerButton from './speaker_button';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speaker_type: "google",
    };
    this._toggleButton = this._toggleButton.bind(this);
  }

  _toggleButton(e) {
    this.setState({speaker_type: e.target.value});
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="tabs">
            <input
              type="radio"
              value="alexa"
              name="tab_item"
              id="main_alexa"
              checked={this.state.speaker_type === "alexa"}
              onChange={this._toggleButton}
            />
            <label className="tab_item" htmlFor="main_alexa">
              <i className="fab fa-amazon"></i> Alexa
            </label>
            <input
              type="radio"
              value="google"
              name="tab_item"
              id="main_google"
              checked={this.state.speaker_type === "google"}
              onChange={this._toggleButton}
            />
            <label className="tab_item" htmlFor="main_google">
              <i className="fab fa-google"></i> Google Home
            </label>
            <div className="tab_content" id="alexa_content">
              <div className="row">
                <SpeakerButton speaker_type="alexa"/>
              </div>
            </div>
            <div className="tab_content" id="google_content">
              <div className="row">
                <SpeakerButton speaker_type="google"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
