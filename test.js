var options = {
  // ** REQUIRED **
  access_token:  'Je5CDuGC9ORcrdAxf3gA40QnKHlnMDyjGKNSPxdpEdkw4eX-yYDAVsY3UMdy4oJfrsusto4OhIz7HNtl_NYFMVECdgRlo_GULMgGZS0EumxrKbZFiOmnmAPChBPDZ5JP'
}

var up = require('jawbone-up')(options);

var mee = up.me.get({}, function(dataaaa, resp) {
  console.log(dataaaa, resp);
});

var movez = up.moves.get({}, function(movedata, resp) {
  console.log(movedata, resp);
  // itemLen = resp.data.items.length;
  // for (var i = 0; i < itemLen; i++) {
  //   console.log(resp.movedatadata.items[i] + "\n");
  // }
})