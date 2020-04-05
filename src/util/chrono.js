export const getSeconds = (elapsedTime) => Math.round(elapsedTime / 1000);
export const getMinutes = (seconds) => Math.round(seconds / 60);
export const getHours = (seconds) => Math.round(seconds / 60 / 60);
export const getDays = (hours) => Math.round(hours / 24);

export const getElapsedTimeDescription = (elapsedTime) => {
  const secondsElapsed = getSeconds(elapsedTime);
  if (secondsElapsed < 60) return `${secondsElapsed} seconds ago`;
  else if (secondsElapsed >= 60) return `${getMinutes(secondsElapsed)} minutes ago`;
  else if (secondsElapsed >= 60 * 60) return `${getHours(secondsElapsed)} hours ago`;
  else if (secondsElapsed >= 60 * 60 * 24) return `${getDays(secondsElapsed)} days ago;`;
  else return `a long, long time ago`;
};
