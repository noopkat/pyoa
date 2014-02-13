var options = {
  access_token:  ''
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
  
});
