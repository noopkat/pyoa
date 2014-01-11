var options = {
  // ** REQUIRED **
  access_token:  'eQBwhd5FIoMs0_pqYzkaZ2P1u8OEOYNBdbvXv9Dv2oftOkvMKxWC7ejuTwbl0q7-kKMwPvEBJ55RAnYEZaPxlCzIBmUtBLpsaym2RYjpp5gDwoQTw2eSTw'
}

var up = require('jawbone-up')(options);

var mee = up.me.get({}, function(dataaaa, resp) {
  console.log(dataaaa, resp);
})