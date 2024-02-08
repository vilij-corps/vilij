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

    scene bg questmap

    # character sprite as file named "character-a-fr.png" 
    # in the images directory.

    show character-a-fr at place_right
    with Pause(1)
    
    # These display lines of dialogue.

    voice "voice-overs/how-are-you-f.mp3"
    akello "You've created a new Ren'Py game."

    akello "Once you add a story, pictures, and music, you can release it to the world!"

    akello "【Wasuze otyano Ssebo｜Good morning Sir】."

    # This ends the game.
    jump greetings

    return
