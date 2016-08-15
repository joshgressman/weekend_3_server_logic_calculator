var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var answerOb = {
  answer:0,
};

console.log("new ob",answerOb.answer);
app.use(bodyParser.urlencoded({extended: true}));
//pull data from form from ajax POST data
app.post('/numbers', function (req, res){
  var calcNumbers = [];

  // string numbers to number
  req.body.x =parseInt(req.body.x);
  req.body.y =parseInt(req.body.y);
  calcNumbers.push(req.body);

// console.log("req body",req.body);
console.log("calcList", calcNumbers[0].type);

switch(calcNumbers[0].type) {
  case "add":
   var x = calcNumbers[0].x
   var y = calcNumbers[0].y
   var result = x + y;
   answerOb.answer = result;
  break;
  case "sub":
  var x = calcNumbers[0].x
  var y = calcNumbers[0].y
  var result = x - y;
  answerOb.answer = result;
  break;
  case "multi":
  var x = calcNumbers[0].x
  var y = calcNumbers[0].y
  var result = x * y;
  answerOb.answer = result;
  break;
  case "div":
  var x = calcNumbers[0].x
  var y = calcNumbers[0].y
  var result = x / y;
  answerOb.answer = result;
  break;
}
res.sendStatus(200);
console.log(answerOb);
});



app.get('/numbers', function (req, res){
  res.send(answerOb);
});



app.get('/*', function(req, res) {
    var file = req.params[0] || '/view/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('server is running on port', app.get('port'));
});
