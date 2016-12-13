export function secondsDifference(fromTimestamp, untilTimestamp) {
  const diffence = untilTimestamp - fromTimestamp;

  // convert milliseconds to seconds and round down to nearest whole number
  return Math.floor(diffence / 1000);
}
