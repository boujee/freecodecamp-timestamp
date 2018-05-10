'use strict';

// Input ex: December 12, 1900
// UTC is YYYY-MM-DD
function mkUTCDate(s) {
  const regex = /^(\w+) (\d+), (\d{4})$/;
  const res = regex.exec(s);
  if (!res || res.length < 4) return null;
  const [_, month_, day, year] = res;
  const month = parseMonth(month_);
  if ([month, day, year].some(it => !it)) return null;
  return `${year}-${month}-${day}`;
}

function parseMonth(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const index = months.indexOf(month);
  if (index === -1) return null;
  return index + 1;
}

export {mkUTCDate};