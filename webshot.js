var webshot = require('webshot');

webshot('google.com', 'tmp/google.png', function(err) {
  // screenshot now saved to google.png
});