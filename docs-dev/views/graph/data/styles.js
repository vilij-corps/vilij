var style = cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 32,
        'width': 32,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 1,
        'border-opacity': 1,
        'content': 'data(id)',
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
        'curve-style': 'bezier',
        'width': 6,
        'target-arrow-shape': 'triangle',
        'line-color': '#dddddd',
        'target-arrow-color': '#dddddd'
      })
    .selector('#bird')
      .css({
        'background-image': 'https://live.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg'
      })
    .selector('#cat')
      .css({
        'background-image': 'https://live.staticflickr.com/1261/1413379559_412a540d29_b.jpg'
      })
    .selector('#ladybug')
      .css({
        'background-image': 'https://live.staticflickr.com/3063/2751740612_af11fb090b_b.jpg'
      })
    .selector('#aphid')
      .css({
        'background-image': 'https://live.staticflickr.com/8316/8003798443_32d01257c8_b.jpg'
      })
    .selector('#rose')
      .css({
        'background-image': 'https://live.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg'
      })
    .selector('#grasshopper')
      .css({
        'background-image': 'https://live.staticflickr.com/6098/6224655456_f4c3c98589_b.jpg'
      })
    .selector('#plant')
      .css({
        'background-image': 'https://live.staticflickr.com/3866/14420309584_78bf471658_b.jpg'
      })
    .selector('#wheat')
      .css({
        'background-image': 'https://live.staticflickr.com/2660/3715569167_7e978e8319_b.jpg'
      })