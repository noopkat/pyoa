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
  access_token:  'Je5CDuGC9ORcrdAxf3gA40QnKHlnMDyjGKNSPxdpEdkw4eX-yYDAVsY3UMdy4oJfrsusto4OhIz7HNtl_NYFMVECdgRlo_GULMgGZS0EumxrKbZFiOmnmAPChBPDZ5JP'
}

var up = require('jawbone-up')(options);

var mee = up.me.get({}, function(dataaaa, resp) {
  //console.log(dataaaa, resp);
});

var movez = up.moves.get({}, function(movedata, resp) {
  //storing largest and smallest step numbers
  var largest = 0;
  var smallest = 1000000;
  // storing the hour that largest step was
  var lhour = 0;
  // storing the hour that smallest step was
  var shour = 0;
  console.log(movedata, JSON.parse(resp).data.items[0]);
  var move = JSON.parse(resp).data.items[0];
  var hourlykeys = Object.keys(move.details.hourly_totals);
  var movehourlen = hourlykeys.length;
  console.log(movehourlen);
  // find largest and smallest step hours
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
  // print largest and smallest
  console.log(smallest, largest);
  view.lowsteps = smallest;
  view.highsteps = largest;
  view.lowhour = shour;
  view.highhour = lhour;

  console.log(view);
   var stream = mu.compileAndRender('index.html', view);
  util.pump(stream, res);
  
});

}).listen(8000);