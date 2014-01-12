var webshot = require('webshot');

webshot('http://purr.noopkat.com/', 'tmp/today.png', function(err) {
  // screenshot now saved to google.png
});