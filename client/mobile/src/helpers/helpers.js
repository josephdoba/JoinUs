import moment from 'moment';

// shorten the displayed text to 75 letters including spaces
export function shortenText(text) {
  if (text.length >= 75) {
    const short = text.slice(0, 75);
    return `${short}...`;
  }

  return text;
}

export function formatTime(start_time, end_time) {
  const start = moment(start_time).format('llll'); // format: Wed, Sep 28, 2022 12:00 PM
  const end = moment(end_time).format('LT'); // format: 11:00 AM

  return `${start} - ${end}`;
}
