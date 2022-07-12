var number = function (busStops) {
  let arr = [0, 0];
  for (let i = 0; i < busStops.length; i++) {
    arr[0] += busStops[i][0];
    arr[1] += busStops[i][1];
  }
  return arr[0] - arr[1];
};
