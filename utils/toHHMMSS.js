// https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
export function toHHMMSS(secs, object = false) {
  const sec_num = parseInt(secs, 10)
  const hours   = Math.floor(sec_num / 3600)
  const minutes = Math.floor(sec_num / 60) % 60
  const seconds = sec_num % 60

  if (object) {
    return {
      hours,
      minutes,
      seconds
    }
  }

  return [hours,minutes,seconds]
    .map(v => v < 10 ? "0" + v : v)
    .filter((v,i) => v !== "00" || i > 0)
    .join(":")
};
