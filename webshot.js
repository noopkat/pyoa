var webshot = require('webshot');

webshot('localhost:8000', 'tmp/today.png', function(err) {
  // screenshot now saved to google.png
});