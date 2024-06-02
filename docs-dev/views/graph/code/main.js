
// globals
// Initialize
var cy = null;

// main database
const graph_db = new graphology.Graph();

// result of query
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

// Needed for CISE layout
function make_clusters() {

  var clusters = [];
  let region = [];
  let family = [];
  let subfamily = [];
  let genus = [];
  let language = [];
  let country = [];

  graph_db.forEachNode(function(node, attributes) {
    
    let id = attributes.n.data.id;
    let cluster = attributes.n.data.type;
    switch(cluster) {
      case "region":
        region.push(id);
        break;
      case "family":
        family.push(id);
        break;
      case "subfamily":
        subfamily.push(id);
        break;
      case "genus":
        genus.push(id);
        break;
      case "language":
        language.push(id);
        break;
      case "country":
        country.push(id);
        break;
      default:
        console.log("default");
    }
    
  })

  clusters.push(region);
  clusters.push(family);
  clusters.push(subfamily);
  clusters.push(genus);
  clusters.push(language);
  clusters.push(country);
  console.log(JSON.stringify(clusters))

}

// UI element references
var a_field = null;
var b_field = null;
var c_field = null;
var d_field = null;
var e_field = null;

var tnn_field = null;
var tne_field = null;
var vnn_field = null;
var vne_field = null;

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

// position layout on select
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
  if (node_data.id) {
    a_field.style.display = 'block';
    a_field.innerText = node_data.id;
  } else {
    a_field.style.display = 'none';
  }

  if (node_data.label) {
    b_field.style.display = 'block';
    b_field.innerText = node_data.label;
  } else {
    b_field.style.display = 'none';
  }

  if (node_data.type) {
    c_field.style.display = 'block';
    c_field.innerText = node_data.type;
  } else {
    c_field.style.display = 'none';
  }
  
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

// tap query to database
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

  vnn_field.innerText = subgraph.nodes.length;
  vne_field.innerText = subgraph.edges.length;
  
}

// load edge table
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
          tnn_field.innerText = graph_db.order;
          tne_field.innerText = graph_db.size;
          
          query_db('africa')
          // make_clusters();

      }
    });
}

// load node table
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

  a_field = document.getElementById("a_field");
  b_field = document.getElementById("b_field");
  c_field = document.getElementById("c_field");
  d_field = document.getElementById("d_field");
  e_field = document.getElementById("e_field");

  
  tnn_field = document.getElementById("tnn");
  tne_field = document.getElementById("tne");
  vnn_field = document.getElementById("vnn");
  vne_field = document.getElementById("vne");

  // ui selects

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
  // click events
  const home_btn = document.getElementById("home_btn");
  home_btn.addEventListener("click", function() { 
    window.location.assign("https://www.vilijcorps.org");
  });

  const gallery_btn = document.getElementById("gallery_btn");
  gallery_btn.addEventListener("click", function() { 
    window.location.assign("https://www.vilijcorps.org");
  });

  const translator_btn = document.getElementById("translator_btn");
  translator_btn.addEventListener("click", function() { 
    window.location.assign("https://www.vilijcorps.org");
  });

  const github_btn = document.getElementById("github_btn");
  github_btn.addEventListener("click", function() { 
    window.location.assign("https://github.com/vilij-corps/vilij");
  });


  const reset_btn = document.getElementById("reset_btn");
  reset_btn.addEventListener("click", function() { 
    refresh(); 
  });

  const revert_btn = document.getElementById("revert_btn");
  revert_btn.addEventListener("click", function() { 
    revert(); 
  });

  // tooltips

  tippy('#home_btn', {
    content: 'Home to vilijcorps.org',
    placement: 'bottom',
  });

  tippy('#gallery_btn', {
    content: '3D Asset Gallery',
    placement: 'bottom',
  });

  tippy('#translator_btn', {
    content: 'Language Translator',
    placement: 'bottom',
  });

  tippy('#github_btn', {
    content: 'Github Repository',
    placement: 'bottom-start',
  });

  tippy('#lang_info', {
    content: 'Set a language to root.',
    placement: 'right',
  });

  tippy('#langfamt_info', {
    content: 'Set a language family to root.',
    placement: 'right',
  });

  tippy('#region_info', {
    content: 'Set an African region to root.',
    placement: 'right',
  });

  tippy('#country_info', {
    content: 'Set a country to root.',
    placement: 'right',
  });
  
  tippy('#layout_info', {
    content: 'Run layout to position graph.',
    placement: 'right',
  });

  tippy('#reset_btn', {
    content: 'Reset view to root node Africa.',
    placement: 'right',
  });

  tippy('#revert_btn', {
    content: 'Go back to previous view.',
    placement: 'right',
  });

  const glotttolog = `
  Glottolog 5.0<br>
  Hammarström, Harald & Forkel, Robert & Haspelmath, Martin & Bank, Sebastian. 2024.<br>
  Leipzig: Max Planck Institute for Evolutionary Anthropology.<br>
  https://doi.org/10.5281/zenodo.8131084<br>
  http://glottolog.org, Accessed on 2024-03-11.
  `

  const phoible = `
  Phoible 2.0.1<br>
  Steven Moran and Daniel McCloy. 2019.<br>
  Max Planck Institute for the Science of Human History<br>
  http://phoible.org<br>
  https://phoible.org/
  `

  tippy('#glottolog', {
    content: glotttolog,
    allowHTML: true,
    placement: 'bottom-end',
  });

  tippy('#phoible', {
    content: phoible,
    allowHTML: true,
    placement: 'right',
  });

  set_layout("cola")
  // initialize data load
  load_db_nodes()

});