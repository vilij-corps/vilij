# The script of the game goes in this file.

define bubble.rows = 48
define bubble.cols = 48

transform place_right:
    pos (0.2, 1.0)
    anchor (0.5, 1.0)
    
transform place_left:
    pos (0.8, 1.0)
    anchor (0.5, 1.0)

label splashscreen:
    scene black
    with Pause(1)

    show text "Vilij Corps Presents..." with dissolve
    with Pause(2)
    
    hide text with dissolve
    with Pause(1)
    
    show splash with dissolve
    with Pause(2)

    hide splash with dissolve
    with Pause(1)

    scene black
    with Pause(1)

    return

# game start with map navigation.
label start:

    # background with a file named "bg questmap.png"
    # in the images sub-directory start.

    scene bg questmap:
        zoom 0.5

    "Select your adventure"

    jump greetings

    return
