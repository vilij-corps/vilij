
// Initialize
var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: style,

  elements: data,

  layout: {
    name: 'tidytree',
    horizontalSpacing: 60,
    verticalSpacing: 40
  }
}); // cy init

// On tap, redraw graph with nav_data
function regenerate(g) {

  // remove old
  cy.elements().remove();
  // add new
  cy.add( g )

  // re-run layout
  var layout = cy.layout({
    // name: 'breadthfirst',
    // circle: true
    name: 'tidytree',
    horizontalSpacing: 60,
    verticalSpacing: 40
  });

  layout.run();
}


cy.on('tap', 'node', function(evt){
  
  // node tapped
  let tapped = evt.target
  // console.log(tapped.data())

  // add as root
  let root = new Object();
  root.data = tapped.data();
  nav_data["nodes"].push( root )
  
  // get first level branch of selected
  let outgoers = tapped.outgoers();
  outgoers.nodes().forEach(function( ele ){
    // console.log( "outgpers" );
    // console.log( ele.id() );
    // let n = new Object();
    // n.data = ele.data();
    // nav_data["nodes"].push( n )
   });

   outgoers.edges().forEach(function( ele ){
    // console.log( "outgpers" );
    // console.log( ele.id() );
    // let e = new Object();
    // e.data = ele.data();
    // nav_data["edges"].push( e )
   });

  // get nodes of entire branch of selected
  // add to nav_data
  let successors = tapped.successors();
  successors.nodes().forEach(function( ele ){
    // console.log( "successors" );
    // console.log( ele.data() );
    let n = new Object();
    n.data = ele.data();
    nav_data["nodes"].push( n )
   });

   // get edges of entire branch of selected
   // add to nav_data
   successors.edges().forEach(function( ele ){
    // console.log( "successors" );
    // console.log( ele.data() );
    let e = new Object();
    e.data = ele.data();
    nav_data["edges"].push( e )
   });

   // with new data created, regenerate view
   // console.log(JSON.stringify(nav_data))
   regenerate(nav_data)

}); // on tap
