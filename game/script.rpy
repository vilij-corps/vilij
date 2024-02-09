# The script of the game goes in this file.
default measure_a = 0
default measure_b = 0
default measure_c = 0
default measure_d = 0
default measure_e = 0
default measure_f = 0

define bubble.rows = 48
define bubble.cols = 48

transform place_right:
    pos (0.2, 1.0)
    anchor (0.5, 1.0)
    
transform place_left:
    pos (0.8, 1.0)
    anchor (0.5, 1.0)

screen progress_stats_btn:
    imagebutton:
        xalign 1.0
        yalign 0.0
        xoffset -30
        yoffset 30
        idle "icons/replay_voice_idle.png"
        action ShowMenu("progress_stats_panel")

screen progress_stats_panel:
    # add "icons/replay_voice_idle.svg"
    frame:
        xalign 0.5
        yalign 0.5
        xpadding 300
        ypadding 300
        
        hbox:
            spacing 60

            vbox:
                spacing 30
                text "measure_a" size 60 color "ffffff"
                text "measure_b" size 60 color "ffffff"
                text "measure_c" size 60 color "ffffff"
                text "measure_d" size 60 color "ffffff"
                text "measure_e" size 60 color "ffffff"
                text "measure_f" size 60 color "ffffff"

            vbox:
                spacing 30
                text "[measure_a]" size 60 color "ffffff"
                text "[measure_b]" size 60 color "ffffff"
                text "[measure_c]" size 60 color "ffffff"
                text "[measure_d]" size 60 color "ffffff"
                text "[measure_e]" size 60 color "ffffff"
                text "[measure_f]" size 60 color "ffffff"

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

    $ measure_a += 1
    # jump greetings

    show screen progress_stats_btn
    show screen progress_stats_panel
    with Pause(4)

    return
