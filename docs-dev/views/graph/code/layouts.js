var layout_opts = graphviz_circo

var breadthfirst = {
    name: 'breadthfirst',
    circle: true
}

var elk_force = {
    name: 'elk',
    elk: {
      algorithm: 'force'
    }
}

var elk_layered = {
    name: 'elk',
    elk: {
      algorithm: 'layered'
    }
}

var elk_mrtree = {
    name: 'elk',
    elk: {
      algorithm: 'mrtree'
    }
}

var elk_radial = {
    name: 'elk',
    elk: {
        algorithm: 'radial'
    }
}

var elk_rectpacking = {
    name: 'elk',
    elk: {
        algorithm: 'rectpacking'
    }
}

var elk_spore = {
    name: 'elk',
    elk: {
        algorithm: 'sporeCompaction'
    }
}

var elk_stress = {
    name: 'elk',
    elk: {
      algorithm: 'stress',
    }
}

var elk_topdownpacking = {
    name: 'elk',
    elk: {
      algorithm: 'topdownpacking',
    }
}

var graphviz_circo = {
    name: 'elk',
    graphviz: {
        algorithm: 'twopi'
    }
}

function set_layout(l) {
    console.log(l)
    switch (l) {
        case "breadthfirst":
            layout_opts = breadthfirst;
            break;
        case "cola":
            layout_opts = { name: 'cola' };
            break;
        case "concentric":
            layout_opts = { name: 'concentric' };
            break;
        case "fcose":
            layout_opts = { name: 'fcose' };
            break;
        case "force":
            layout_opts = elk_force;
            break;
        case "klay":
            layout_opts = { name: 'klay' };
            break; 
        case "layered":
            layout_opts = elk_layered;
            break;
        case "mrtree":
            layout_opts = elk_mrtree;
            break;
        case "radial":
            layout_opts = elk_radial;
            break;
        case "stress":
            layout_opts = elk_stress;
            break;
        case "tidytree":
            layout_opts = { name: 'tidytree', horizontalSpacing: 60, verticalSpacing: 40 };
            break;
        default:
            console.log("invalid layout");
    }

    return layout_opts
}