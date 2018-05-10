'use strict';

import express from 'express';
import {mkUTCDate} from '..';

const app = express();

function timeToString(time) {
  const date = new Date();
  date.setTime(time);
  const month = date.toLocaleString('en-US', {month: 'long'});
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

app.get('/', (req, res) => {
  res.json({unix: null, natural: null});
});

app.get('/:number([0-9]+)', (req, res) => {
  const {number} = req.params;
  const unix = Number(number);
  const natural = timeToString(unix * 1000);
  res.json({unix, natural});
});

app.get('/:date', (req, res) => {
  const {date} = req.params;
  const utc = mkUTCDate(date);
  const time = (new Date(utc)).getTime();
  const unix = Number.isNaN(time) ? null : Math.floor(time / 1000);
  const natural = unix ? timeToString(time) : null;
  res.json({unix, natural});
});

export default app;