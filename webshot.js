var webshot = require('webshot');

webshot('wedgies.com', 'tmp/wedgies.png', function(err) {
  // screenshot now saved to google.png
});