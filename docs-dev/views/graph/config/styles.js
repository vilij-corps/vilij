var style = cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 32,
        'width': 32,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 1,
        'border-opacity': 1,
        'content': 'data(label)',
        "text-background-opacity": 1,
        "color": "#111",
        "text-background-color": "#e5e5e5",
        "text-background-shape": "roundrectangle",
        "text-background-padding": 2,
        "text-border-color": "#000",
        "text-border-width": 1,
        "text-border-opacity": 1,
        "font-family": "Dosis",
        "font-optical-sizing": "auto",
        "font-weight": 400,
        "font-style": "normal",
        "font-size": 12,
        "text-margin-x": 0,
        "text-margin-y": -5
      })

    .selector('edge')
      .css({
        'curve-style': 'straight',
        'taxi-direction': 'downward',
        'taxi-turn': 20,
        'taxi-turn-min-distance': 5,
        'taxi-radius': 10,
        'width': 1,
        'target-arrow-shape': 'circle',
        'line-color': '#bbbbbb',
        'target-arrow-color': '#111111',
        'arrow-scale': 0.5
      })
      
    .selector('node')
      .css({
        'background-image': function( ele ){ return './assets/images/' + ele.data('icon') + '.png' }
      })