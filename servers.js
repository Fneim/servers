var http = require("http");
var InsultCompliment = require("insult-compliment");

http.createServer(function(request, response){
  var compliments = ["The greatest mind that ever lived!", "A genius", "The next Stephen Hawking","Could give Shakespeare a run for his money!"];
  for (var i = 0; i < compliments.length; i++){
    response.write(compliments[i] + "\n");
  }
  response.end();
}).listen(7000);

http.createServer(function(request, response){
  response.write("Douchebag");
  InsultCompliment.Insult();
  response.end();
}).listen(7500);
