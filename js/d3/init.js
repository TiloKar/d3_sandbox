var aa ={}; //query für js entsprechung der dumpdaten

$( document ).ready(function() { //beim ersten Webseite laden

  document.title = "bbi-D3-Plotter #" + window.opener.idAT_1;

  aa=window.opener.trendfile1;// schon verfügbar, und muss nicht neu geparst werden...
  
 
  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 40, bottom: 30, left: 30},
  width = 450 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var sVg = d3.select("#drawArea")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  // translate this svg element to leave some margin.
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // X scale and Axis
  //var xlen=aa.line.length;
  //alert(aa.line[0].time);

  var data = [];   //datenreihe 6 der eingänge (temp)
  for (var i=0; i<aa.line.length - 1; i++){
    data.push({x:aa.line[i].time, y:aa.line[i].data.cI[6]});
  }

  var x = d3.scaleLinear()
  .domain([aa.line[0].time, aa.line[aa.line.length - 1].time])         // This is the min and the max of the data: 0 to 100 if percentages
  .range([0, width]);       // This is the corresponding value I want in Pixel
  
  sVg
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

  // y scale and Axis
  var y = d3.scaleLinear()
  .domain([0, 150])         // This is the min and the max of the data: 0 to 100 if percentages
  .range([height, 0]);       // This is the corresponding value I want in Pixel
  
  sVg
  .append('g')
  .call(d3.axisLeft(y));

  sVg
  .selectAll("whatever")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d){ return x(d.x) })
    .attr("cy", function(d){ return y(d.y) })
    .attr("r", 7);

});

