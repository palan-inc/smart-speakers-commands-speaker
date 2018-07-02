import React from 'react';
import ReactDOM from 'react-dom';
import {Alexa} from '../../const/alexa';

it('alexa commands length is even', () => {
  expect(Alexa.commands.length % 2).toEqual(0);
});
