
var a_field = null;
var b_field = null;
var c_field = null;
var d_field = null;
var e_field = null;
var reset_btn = null;


set_layout("stress")

// Initialize
var cy

function init_cy(graph) {
  cy = cytoscape({
    container: document.getElementById('cy'),
    boxSelectionEnabled: false,
    autounselectify: true,
    style: style,
    elements: graph,
    layout: layout_opts
  });

  cy.userPanningEnabled( true );
  cy.userZoomingEnabled( false );
  // cy.minZoom( 0.50 )
  cy.maxZoom( 2.0 )

  // show details of node
cy.on('tap', 'node', function(evt){
  show_details(evt.target.data())
})

// traverse graph
cy.on('dbltap', 'node', function(evt){
  reset_nav_data()
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

}

function run_layout() {
  // re-run layout
  var layout = cy.layout(layout_opts);
  layout.run();
}

// reload initial state
function refresh() {
  // remove old
  cy.elements().remove();
  // add new
  cy.add( graph )
  // re-run layout
  run_layout()
}

// revert to previous state
function revert() {
  // only if state has changed
  if (previous_data != null) {
    // remove old
    cy.elements().remove();
    // add new
    cy.add( previous_data )
    // re-run layout
    run_layout()
  }
}

// save current before traversing
// to next
function preserve() {
  let save_data = cy.json()
  previous_data = save_data['elements']
  console.log(previous_data)
}

// on tap, show node details
function show_details(node_data) {
  // get each DOM element
  // update inner html or text
  console.log(node_data)
  a_field.innerText = node_data.id
  b_field.innerText = node_data.type
  c_field.innerText = node_data.size
}


// On double tap, redraw graph with nav_data
function regenerate(g) {
  // copy current to revert
  preserve();
  cy.elements().remove();
  // add new
  cy.add( g )
  // re-run layout
  run_layout()
}

window.addEventListener('DOMContentLoaded',function () {
  // map to dom elements
  reset_btn = document.getElementById("reset_btn");
  reset_btn.addEventListener("click", function() { 
    refresh(); 
  });
  revert_btn = document.getElementById("revert_btn");
  revert_btn.addEventListener("click", function() { 
    revert(); 
  });

  layout_select = document.getElementById("layout_select");
  layout_select.addEventListener("change", function() { 
    let selected = this.value;
    let opt = set_layout(selected);
    console.log(opt)
    run_layout()

  });

  a_field = document.getElementById("a_field");
  b_field = document.getElementById("b_field");
  c_field = document.getElementById("c_field");
  d_field = document.getElementById("d_field");
  e_field = document.getElementById("e_field");

});

function load_nodes() {
  // Load graph data
  Papa.parse("./data/afr-languages-nodes.csv", {
    download: true,
    header: true,
    complete: function(results) {
        // console.log("Finished:", results.data);
        let data = results.data
        // console.log(JSON.stringify(data));
        data.forEach(function(d) {
          
          let n = new Object();
          n.data = d;
          graph["nodes"].push(n)

        })
        // console.log(JSON.stringify(graph))
        init_cy(graph);
    }
  });

}

function load_edges() {
    // Load graph data
    Papa.parse("./data/afr-languages-edges.csv", {
      download: true,
      header: true,
      complete: function(results) {
          // console.log("Finished:", results.data);
          let data = results.data
          // console.log(JSON.stringify(data));
          data.forEach(function(d) {
            
            let e = new Object();
            e.data = d;
            graph["edges"].push(e)
  
          })
          load_nodes()
      }
    });
}


load_edges();
