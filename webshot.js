var webshot = require('webshot');

var options = {
  windowSize: {
    width: 384
  , height: 480
  }
, shotSize: {
    width: 384
  , height: 'all'
  }
}

webshot('http://purr.noopkat.com/', 'py-printer/today.png', options, function(err) {
  // exec the printer script
  exec('python py-printer/test.py',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
});