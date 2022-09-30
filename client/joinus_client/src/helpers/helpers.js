// shorten the displayed text to 75 letters including spaces
export function shortenText(text) {
  if (text.length >= 75) {
    const short = text.slice(0, 75);
    return `${short}...`;
  }

  return text;
}
