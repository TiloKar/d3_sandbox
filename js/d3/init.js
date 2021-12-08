var aa ={}; //query für js entsprechung der dumpdaten

$( document ).ready(function() { //beim ersten Webseite laden

  document.title = "bbi-D3-Plotter #" + window.opener.idAT_1;

  aa=window.opener.trendfile1;// schon verfügbar, und muss nicht neu geparst werden...
  console.log(1, aa);

  // Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 50},
width = 600 - margin.left - margin.right,
height = 270 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.time.format("%d-%b-%y").parse;

// Set the ranges
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
.orient("bottom").ticks(5);

var yAxis = d3.svg.axis().scale(y)
.orient("left").ticks(5);

// Define the line
var valueline = d3.svg.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.close); });

// Adds the svg canvas
var svg = d3.select("body")
.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

          console.log(d3);
});

