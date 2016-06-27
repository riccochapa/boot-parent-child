var util = require('util'),
  graphviz = require('graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Hello)
var n0 = g.addNode( "Automobile", {"color" : "blue"} );
n0.set( "style", "filled" );

var n1 = g.addNode( "Vehicle", {"color" : "blue"} );
n1.set( "style", "filled" );

// Add node (ID: World)
g.addNode( "Golf Cart" );

// Add edge between the two nodes
var e = g.addEdge( n1, "Golf Cart" );
e.set( "color", "red" );

// Add node (ID: World)
g.addNode( "Motorcycle" );

// Add edge between the two nodes
var e = g.addEdge( n1, "Motorcycle" );
e.set( "color", "red" );

var n2 = g.addNode( "Fruit", {"color" : "blue"} );
n2.set( "style", "filled" );

// Add node (ID: World)
g.addNode( "Orange" );

// Add edge between the two nodes
var e = g.addEdge( n2, "Orange" );
e.set( "color", "red" );

// Add node (ID: World)
g.addNode( "Seedless Grape" );

// Add edge between the two nodes
var e = g.addEdge( n2, "Seedless Grape" );
e.set( "color", "red" );

// Print the dot script
console.log( g.to_dot() );

// Set GraphViz path (if not in your path)
g.setGraphVizPath( "/usr/local/bin" );
// Generate a PNG output
g.output( "png", "test01.png" );
