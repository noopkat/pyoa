var webshot = require('webshot');

var options = {
  windowSize: {
    width: 384
  , height: 480
  }
, shotSize: {
    width: 'window'
  , height: 'all'
  }
}


webshot('http://purr.noopkat.com/', 'tmp/today.png', options, function(err) {
  // screenshot now saved to google.png
});