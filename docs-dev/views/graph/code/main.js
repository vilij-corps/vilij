

// Initialize
var cy = null;

const graph_db = new graphology.Graph();

var subgraph = {
  nodes: [],
  edges: []
}

function reset_subgraph() {
  subgraph = {
    nodes: [],
    edges: []
  }
}

var previous_data = null;

var nav_data = {
  nodes: [],
  edges: []
}

function reset_nav_data() {
  nav_data = {
    nodes: [],
    edges: []
  }
}

// UI element references
var a_field = null;
var b_field = null;
var c_field = null;
var d_field = null;
var e_field = null;

// initialize cytoscape after loading data
function init_cy(g) {
  cy = cytoscape({
    container: document.getElementById('cy'),
    boxSelectionEnabled: false,
    autounselectify: true,
    style: style,
    elements: g,
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
  console.log(tapped.data())

  // add as root
  let root = new Object();
  root.data = tapped.data();
  nav_data["nodes"].push( root )
  
  query_db(root.data.id)

}); // on tap

} // init_cy

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
  cy.add( subgraph )
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
  // console.log(node_data)
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


function query_db(node_id) {

  console.log(node_id)
  reset_subgraph()
  
  let root = graph_db.getNodeAttributes(node_id)
  subgraph["nodes"].push(root.n);

  graph_db.forEachNeighbor(node_id, function(neighbor, attributes) {
    // console.log(neighbor, attributes.n);
    
    let n = new Object();
    n = graph_db.getNodeAttributes(neighbor);
    subgraph["nodes"].push(n.n)

    let e = new Object();
    e.data = {source: node_id, target: neighbor};
    subgraph["edges"].push(e)

  });

  console.log(subgraph)
  if (cy) {
    regenerate(subgraph)
  }
  else {
    init_cy(subgraph);
  }
  
}

function load_db_edges() {
    // Load graph data
    Papa.parse("./data/edges.csv", {
      download: true,
      header: true,
      complete: function(results) {
          // console.log("Finished:", results.data);
          let data = results.data
          // console.log(JSON.stringify(data));
          data.forEach(function(d) {
            
            let e = new Object();
            e.data = d;
            graph_db.addEdge(e.data.source, e.data.target);
  
          })
          console.log('Number of nodes', graph_db.order);
          console.log('Number of edges', graph_db.size);
          
          query_db('africa')

      }
    });
}

function load_db_nodes() {
  // Load graph data
  Papa.parse("./data/nodes_dd.csv", {
    download: true,
    header: true,
    complete: function(results) {
        // console.log("Finished:", results.data);
        let data = results.data
        // console.log(JSON.stringify(data));
        data.forEach(function(d) {
          // console.log(d)
          let n = new Object();
          n.data = d;
          // console.log(n)
          graph_db.addNode(n.data.id, { n });

        })
        
        load_db_edges()
    }
  });

}

window.addEventListener('DOMContentLoaded',function () {

  var lang_select = new SlimSelect({
    select: '#lang_select',
    data: languages,
    events: {
      afterChange: (newVal) => {
        console.log(newVal[0].value);
        query_db(newVal[0].value);
      }
    }
  })

  var langfam_select = new SlimSelect({
    select: '#langfam_select',
    data: language_family,
    events: {
      afterChange: (newVal) => {
        console.log(newVal[0].value);
        query_db(newVal[0].value);
      }
    }
  })

  var region_select = new SlimSelect({
    select: '#region_select',
    data: regions,
    events: {
      afterChange: (newVal) => {
        console.log(newVal[0].value);
        query_db(newVal[0].value);
      }
    }
  })

  var country_select = new SlimSelect({
    select: '#country_select',
    data: countries,
    events: {
      afterChange: (newVal) => {
        console.log(newVal[0].value);
        query_db(newVal[0].value);
      }
    }
  })

  var  layout_select = new SlimSelect({
    select: '#layout_select',
    data: layout_select_opts,
    events: {
      afterChange: (newVal) => {
        console.log(newVal[0].value);
        set_layout(newVal[0].value);
        run_layout()
      }
    }
  })

  // map to dom elements
  const reset_btn = document.getElementById("reset_btn");
  reset_btn.addEventListener("click", function() { 
    refresh(); 
  });
  
  const revert_btn = document.getElementById("revert_btn");
  revert_btn.addEventListener("click", function() { 
    revert(); 
  });

  a_field = document.getElementById("a_field");
  b_field = document.getElementById("b_field");
  c_field = document.getElementById("c_field");
  d_field = document.getElementById("d_field");
  e_field = document.getElementById("e_field");

  
  set_layout("cola")
  load_db_nodes()

});