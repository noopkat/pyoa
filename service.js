var http = require('http'),
    util = require('util'),
    stream = require('stream'),
    mu   = require('mu2');

mu.root = __dirname + '/templates';

http.createServer(function (req, res) {

  if (process.env.NODE_ENV == 'DEVELOPMENT') {
    mu.clearCache();
  }

  var view = {};
  var options = {
    // jawbone up access token
    access_token:  ''
  };

  var up = require('jawbone-up')(options);

  var movez = up.moves.get({}, function(movedata, resp) {
    // storing largest and smallest step number defaults
    var largest = 0,
        smallest = 1000000,
        // storing the hour that largest and smallest step was
        lhour = 0,
        shour = 0;

    console.log(movedata, JSON.parse(resp).data.items[0]);

    var move = JSON.parse(resp).data.items[0],
        hourlykeys = Object.keys(move.details.hourly_totals),
        movehourlen = hourlykeys.length;

    // find largest and smallest step hours
    // probably should do Math.max and Math.min instead (readability mostly) but the data is not in a flat array already
    for (var key in move.details.hourly_totals) {
      var steps = move.details.hourly_totals[key].steps;

      // comparing largest
      if (steps > largest) {
        largest = steps;
        lhour = key.substr(8, 2);
      }

      // comparing smallest
      if (steps < smallest) {
        smallest = steps;
        shour = key.substr(8, 2);
      }

    }

    // push to obj for template to use
    view.lowsteps = smallest;
    view.highsteps = largest;
    view.lowhour = shour;
    view.highhour = lhour;

    var stream = mu.compileAndRender('index.html', view);
    util.pump(stream, res);
    
  });

}).listen(8000);