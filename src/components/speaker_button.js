import React, { Component } from 'react';
import {Alexa} from '../const/alexa';
import {Google} from '../const/google';

export default class SpeakerButton extends Component {
  constructor(props) {
    super(props);
    switch (this.props.speaker_type) {
      case 'alexa': {
        this.speaker_type = Alexa;
        break;
      }
      case 'google': {
        this.speaker_type = Google;
        break;
      }
      default:
      break;
    }
  }

  _onClick(command) {
    let ssu = new SpeechSynthesisUtterance();
    ssu.text = this.speaker_type.pre_commands + command;
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);
  }

  render() {
    return (
      this.speaker_type.commands.map((command) => {
        return (
          <div class="col-sm-6 mb-2 mt-2">
            <button class="card" onClick={() => this._onClick(command.pronunciation)}>
              <div class="card-body">
                <h4 class="card-title text-left">
                  <i class="fas fa-play"></i>　
                  {command.title}
                </h4>
                <p class="card-text text-left">
                  {command.description}
                </p>
              </div>
            </button>
          </div>
        );
      })
    );
  }
}