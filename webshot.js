var webshot = require('webshot'),
    child = require('child_process');

var options = {
  windowSize: {
    width: 384,
    height: '2000'
  },
  hotSize: {
    width: 384,
    height: 'all'
  },
  defaultWhiteBackground : true
}

webshot('http://purr.noopkat.com/', 'py-print/today.png', options, function(err) {
  // exec the printer script
  runPrintScript();
});

function runPrintScript() {
  child.exec('python py-print/test.py',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
}