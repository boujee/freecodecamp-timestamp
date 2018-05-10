'use strict';

import {app, mkUTCDate} from 'freecodecamp-timestamp';
import request from 'supertest';

describe('mkUTCDate', () => {
  test('December 3, 1990', () => {
    expect(mkUTCDate('December 3, 1990')).toBe('1990-12-3');
  });
  test('blank', () => {
    expect(mkUTCDate('')).toBe(null);
  });
});

describe('GET /', () => {
  test('empty request', () =>
    request(app).get('/').expect(200, {unix: null, natural: null})
  );
  test('December 15, 2015', () =>
    request(app).get('/December 15, 2015').expect(200, {unix: 1450137600, natural: 'December 15, 2015'})
  );
  test('1450137600', () =>
    request(app).get('/1450137600').expect(200, {unix: 1450137600, natural: 'December 15, 2015'})
  );
});