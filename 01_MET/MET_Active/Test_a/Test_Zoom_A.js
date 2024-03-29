// largely based on http://bl.ocks.org/4063550

// some made-up data
var data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

// tree-ify our fake data
var dataTree = {
    children: data.map(function(d) { return { size: 1 }; })
};

// basic settings
var w = 800,
    h = 800,
    maxRadius = 100;

// size scale for data
var radiusScale = d3.scale.sqrt().domain([0, d3.max(data)]).range([0, maxRadius]);

// determine the appropriate radius for the circle
var roughCircumference = d3.sum(data.map(radiusScale)) * 0.09,
    radius = roughCircumference / (Math.PI * 2);

// make a radial tree layout
var tree = d3.layout.tree()
    .size([360, radius])
    .separation(function(a, b) {
        return radiusScale(a.size) + radiusScale(b.size);
    });

// make the svg
var svg = d3.select("body").append("svg")
    .attr("width", w )
    .attr("height", h )
    .append("g")
    .attr("transform", "translate(" + (w / 2 ) + "," + (h /2) + ")");

var c = svg.append('circle').attr({r:75})

// apply the layout to the data
var nodes = tree.nodes(dataTree);

// create dom elements for the node
var node = svg.selectAll(".node")
      .data(nodes.slice(1)) // cut out the root node, we don't need it
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
          console.log(d.x);
          return "rotate(" + (d.x - 90) + ") translate(" + (d.y - 65 ) + ")";
      })

node.append("rect")
    .attr({
    width: 5,
    height:5,
    fill : 'red',
    "transform":function(d) {
         return "rotate(" + -(d.x - 90) + ") translate(" +(-10)+ ","+ (-10) + ")";
      }
});