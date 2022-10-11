export function getMillisecondsUntilMidnight() {
  let midnight = new Date();
  midnight.setHours(24);
  midnight.setMinutes(0);
  midnight.setSeconds(0);
  midnight.setMilliseconds(0);
  return midnight.getTime() - new Date().getTime();
}

export function getFullSignName(name) {
  if (name.toLowerCase() === 'ari') return 'Aries';
  if (name.toLowerCase() === 'tau') return 'Taurus';
  if (name.toLowerCase() === 'gem') return 'Gemini';
  if (name.toLowerCase() === 'can') return 'Cancer';
  if (name.toLowerCase() === 'leo') return 'Leo';
  if (name.toLowerCase() === 'vir') return 'Virgo';
  if (name.toLowerCase() === 'lib') return 'Libra';
  if (name.toLowerCase() === 'sco') return 'Scorpio';
  if (name.toLowerCase() === 'sag') return 'Sagittarius';
  if (name.toLowerCase() === 'cap') return 'Capricorn';
  if (name.toLowerCase() === 'aqu') return 'Aquarius';
  if (name.toLowerCase() === 'pis') return 'Pisces';
}
