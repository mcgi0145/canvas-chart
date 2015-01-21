document.addEventListener('DOMContentLoaded', init);

function init() {
var newElem = document.createElement('script');
newElem.addEventListener('load', drawPie);
newElem.addEventListener('load', drawGraph);
var mm = document.querySelector('#mm');
newElem.setAttribute('src', 'cheese.js');
mm.appendChild(newElem);
}
function drawPie() {
var canvas = document.querySelector("#pie");
var context = canvas.getContext("2d");
var cx = 200;
var cy = 200;  
var radius = 100;
var endpoint = 0;
var startpoint = 0;
    
    
for (i = 0; i < cheese.segments.length; i++) {
var CheeseLabel = cheese.segments[i].label;
var CheeseValue = cheese.segments[i].value;
var CheeseColor = cheese.segments[i].color;
console.log(CheeseColor);
console.log(CheeseValue);
console.log(CheeseLabel);
endpoint += (CheeseValue * 0.04651162243);    
context.moveTo(cx, cy);
context.beginPath();
context.arc(cx, cy, radius, startpoint, endpoint, false);  
context.fillStyle= CheeseColor;
context.lineTo(cx, cy);
context.fill();
var midAngle = (startpoint + endpoint)/2;
context.save();
context.translate(cx, cy);   
context.strokeStyle = "#333";
context.lineWidth = 2;
context.beginPath();
context.moveTo(0,0);
var dx = Math.cos(midAngle) * (radius + 35);
var dy = Math.sin(midAngle) * (radius + 20);
var lbl = cheese.segments[i].label.toString();
context.fillText(lbl, dx, dy);
context.stroke();
context.restore(); 
startpoint = endpoint;
} 
}

var values = [18.8496, 43.9823, 25.1327, 31.4159, 3.1416, 12.5664];
var total = 0;
for(var i=0; i<values.length; i++){
  total += values[i];
}
function setDefaultStyles(){
  //set default styles for canvas
var canvas = document.querySelector("#graph");
var context = canvas.getContext("2d");      
  context.strokeStyle = "#333";	//colour of the lines
  context.lineWidth = 2;
  context.font = "bold 6pt Arial";
  context.textAlign = "left";
  context.fillStyle = "black";
  context.fill();
}

function drawGraph() {    
setDefaultStyles();
var canvas = document.querySelector("#graph");
var context = canvas.getContext("2d");


     
  //the percentage of each value will be used to determine the height of the bars.
  var graphHeight = 300;    //bottom edge of the graph
  var offsetX = 30;	//space away from left edge of canvas to start drawing.
  var barWidth = 30;	//width of each bar in the graph
  var spaceBetweenPoints = 20; //how far apart to make each x value.
  //start at values[1].
  //values[0] is the moveTo point.
  var x = offsetX + 20;	//left edge of first rectangle
  //var y = offsetY - (graphHeight * (values[0]/100));
  //start a new path
  context.beginPath();
  for(var i=0; i<values.length; i++){
    var pct = values[i] / total;
    var barHeight = (graphHeight * pct);
    //(x, y) coordinates for a rectangle are the top, left values unless you do negative values for w, h
      CheeseColor = cheese.segments[i].color;
      context.stroke();
      context.fillStyle = CheeseColor;
           
      context.rect(x, graphHeight-1, barWidth, -1 * barHeight);
    //for the first point the moveTo and lineTo values are the same
    //All the labels for the bars are going above the bars
      
      //var CheeseLabel = cheese.segments[i].label;
      //var CheeseValue = cheese.segments[i].value;
      //var CheeseColor = cheese.segments[i].color;
      var testing = cheese.segments[i].label.toString();
      var lbl = Math.round(pct * 100).toString();
      var finale = testing + lbl;
    context.fillText(testing, (x - 4), graphHeight - barHeight - 30-1);
    x = x + barWidth + spaceBetweenPoints;	
    //move the x value for the next point
         
  }
    


  context.stroke();
context.strokeStyle = "#999";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(offsetX, canvas.height-graphHeight);
  context.lineTo(offsetX, graphHeight);
  context.lineTo(canvas.width-offsetX, graphHeight);
  context.stroke();  
}
    

  
    
    
    
