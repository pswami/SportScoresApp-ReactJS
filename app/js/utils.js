export function secondsToMinSec(time) {
  let mins = ~~(time / 60);
  let secs = time % 60;
  let newTime = '';

  if (mins > 0) {
    newTime += `${mins}:`
  }

  newTime += str_pad_left(secs, '0', 2);

  return newTime;
}


function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}
