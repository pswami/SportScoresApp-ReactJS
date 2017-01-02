export function secondsToMinSec(time) {
  let mins = ~~(time / 60);
  let secs = time % 60;
  let newTime = '';

  if (mins > 0) {
    newTime += `${mins}:`
  }

  newTime += padNumbers(secs, '0', 2);

  return newTime;
}

export function padNumbers(string, pad, length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}
