const findFreq = (list) => {

  if (list.length === 0) {
    return('');
  }

  var max_hist = 0;
  var max_val = list[0];

  var hist = [];

  for (var k of list) {
    if (isNaN(hist[k])) {
      hist[k] = 0;
    }
    hist[k] = hist[k] + 1;
    if (hist[k] > max_hist) {
      max_hist = hist[k];
      max_val = k;
    }
  }

  return max_val;
};


module.exports = { findFreq };
