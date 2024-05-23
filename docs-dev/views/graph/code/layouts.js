var layout_opts = tidytree_opts

var breadthfirst_opts = {
    name: 'breadthfirst',
    padding: 30,
    circle: true,
    spacingFactor: 1.75
}

var concentric_opts = {
    name: 'concentric',
    padding: 60
}

var cola_opts = {
    name: 'cola',
    nodeSpacing: function( node ){ return 10; },
    randomize: true
}

var cose_opts = {
    name: 'cose',
    componentSpacing: 40,
    nodeOverlap: 4,
    nestingFactor: 1.2,
    gravity: 1,
    numIter: 1000,
    initialTemp: 1000,
    coolingFactor: 0.99,
    minTemp: 1.0
}

var cose_bilkent_opts = {
    name: 'cose-bilkent',
    quality: 'proof',
    padding: 30,
    idealEdgeLength: 90
}

var fcose_opts = {
    name: 'fcose',
    quality: "proof",
    padding: 60,
    nodeSeparation: 110,
    idealEdgeLength: 90
}

// http://www.eclipse.org/elk/reference.html
var elk_force_opts = {
    name: 'elk',
    elk: {
      algorithm: 'force',
      'spacing.nodeNode': 60,
      'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_layered_opts = {
    name: 'elk',
    elk: {
      algorithm: 'layered',
      'spacing.nodeNode': 60,
      'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_mrtree_opts = {
    name: 'elk',
    elk: {
      algorithm: 'mrtree',
      'spacing.nodeNode': 60,
      'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_radial_opts = {
    name: 'elk',
    elk: {
        algorithm: 'radial',
        'spacing.nodeNode': 60,
        'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_rectpacking_opts = {
    name: 'elk',
    elk: {
        algorithm: 'rectpacking',
        'spacing.nodeNode': 60,
        'spacing.nodeNodeBetweenLayers': 60
    }
}

var elk_stress_opts = {
    name: 'elk',
    elk: {
      algorithm: 'stress',
      'spacing.nodeNode': 60,
      'spacing.nodeNodeBetweenLayers': 60
    }
}

var euler_opts = {
    name: "euler",
    springLength: edge => 100
}

var hyse_opts = {
    name: "hyse"
}

var klay_opts = {
    name: 'klay',
    klay: {
        aspectRatio: 1.78,
        edgeRouting: 'ORTHOGONAL', // POLYLINE, ORTHOGONAL, SPLINES)
        fixedAlignment: 'BALANCED',
        nodeLayering:'NETWORK_SIMPLEX',
        nodePlacement:'BRANDES_KOEPF',
        spacing: 60,
        thoroughness: 10
    }
}

var tidytree_opts = { 
    name: 'tidytree',
    horizontalSpacing: 60,
    verticalSpacing: 40 
};

function set_layout(l) {
    console.log(l)
    switch (l) {
        case "breadthfirst":
            layout_opts = breadthfirst_opts;
            break;
        case "cola":
            layout_opts = cola_opts;
            break;
        case "cose":
            layout_opts = cose_opts;
            break;
        case "cose-bilkent":
            layout_opts = cose_bilkent_opts;
            break;
        case "fcose":
            layout_opts = fcose_opts;
            break;
        case "concentric":
            layout_opts = concentric_opts;
            break;
        case "force":
            layout_opts = elk_force_opts;
            break;
        case "euler":
            layout_opts = euler_opts;
            break;
        case "hyse":
            layout_opts = hyse_opts;
            break;
        case "klay":
            layout_opts = klay_opts;
            break; 
        case "layered":
            layout_opts = elk_layered_opts;
            break;
        case "mrtree":
            layout_opts = elk_mrtree_opts;
            break;
        case "radial":
            elk_radial_opts;
            break;
        case "rectpacking":
            layout_opts = elk_rectpacking_opts;
            break;
        case "stress":
            layout_opts = elk_stress_opts;
            break;
        case "tidytree":
            layout_opts = tidytree_opts
            break;
        default:
            console.log("invalid layout");
    }

    return layout_opts
}