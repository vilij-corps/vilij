'''

 +-+-+ +-+-+ +-+-+-+
     |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+

'''

# Shift+O Console
# Shift+E Editor Support
# Shift+D Developer Menu
# Shift+R Reloading
# Shift+I Style Inspecting

init python:
    # to save game progress
    def save_progress():
        renpy.save_persistent()
    def reset_progress():
        persistent._clear(progress=False)
    # To calculate play time
    def getPlayTime():
        pt = renpy.get_game_runtime()
        pth = int(pt // 3600) # hours
        ptm = int(pt - pth * 3600) // 60 # minutes
        ptmfh = float(ptm // 60)
        # minutes as fraction of hours
        return ptmfh
        # return "{} Hours, {} Minutes, {} Seconds".format(pth, ptm, pts)
        # text "{u}Playtime: " + getPlayTime() + "{/u}" style "PlayTimeStyle"
    def clear_screen():
        renpy.hide_screen("map")

default persistent.scenarios = 0
default persistent.phrases = 0
default persistent.vocabulary = 0
default persistent.missions = 0
default persistent.learning_time = 0

# player character used in all scenes
define me = Character("")

# default character placements
transform place_right:
    pos (0.2, 1.0)
    anchor (0.5, 1.0)
    
transform place_left:
    pos (0.8, 1.0)
    anchor (0.5, 1.0)

# shared images
image speaking:
    "icons/speaking.png"
    zoom 0.35

# scenario jumps
screen map:
    imagebutton:
        pos (1300, 47)
        idle "icons/greetings_idle.png"
        hover "icons/greetings_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (1800, 547)
        xysize(48,48)
        idle "icons/hiv_idle.png"
        hover "icons/hiv_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (1200, 1247)
        xysize(48,48)
        idle "icons/football_idle.png"
        hover "icons/football_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (2200, 600)
        xysize(48,48)
        idle "icons/flora_fauna_idle.png"
        hover "icons/flora_fauna_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (2700, 800)
        xsize 48 ysize 48
        idle "icons/exercise_idle.png"
        hover "icons/exercise_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (700, 300)
        xsize 48 ysize 48
        idle "icons/directions_idle.png"
        hover "icons/directions_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (300, 1300)
        xysize(48,48)
        idle "icons/cooking_idle.png"
        hover "icons/cooking_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (2600, 1200)
        xsize 48 ysize 48
        idle "icons/cinema_idle.png"
        hover "icons/cinema_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (3000, 300)
        xsize 48 ysize 48
        idle "icons/church_idle.png"
        hover "icons/church_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (3100, 450)
        xsize 48 ysize 48
        idle "icons/calendar_idle.png"
        hover "icons/calendar_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (3500, 100)
        xysize(48,48)
        idle "icons/animals_idle.png"
        hover "icons/animals_hover.png"
        tooltip "Greetings"
        action Jump("greetings")
    imagebutton:
        pos (3400, 800)
        idle "icons/airport_idle.png"
        hover "icons/airport_hover.png"
        tooltip "Greetings"
        action Jump("greetings")

    $ tooltip = GetTooltip()

    if tooltip:

        nearrect:
            focus "tooltip"
            prefer_top True

            frame:
                xalign 0.5
                padding (20, 20)
                margin (0, 20)
                text tooltip size 30 color "ffffff"

# button to replay last voice over
screen replay_voice:
    imagebutton:
        pos (2350, 1710)
        idle "icons/replay_voice_idle.png"
        hover "icons/replay_voice_hover.png"
        action VoiceReplay()

# user interfaces
screen score_panel:
    fixed xpos 1325 ypos 1710:
        hbox spacing 15:
            image "icons/score_block.png"
            image "icons/score_block.png"
            image "icons/score_block.png"
            image "icons/score_block.png"
            image "icons/score_block.png"
        
    text "[persistent.scenarios]" size 40 color "000000" xpos 1410 ypos 1740 xanchor 0.5
    text "[persistent.phrases]" size 40 color "000000" xpos 1600 ypos 1740 xanchor 0.5
    text "[persistent.vocabulary]" size 40 color "000000" xpos 1790 ypos 1740 xanchor 0.5
    text "[persistent.missions]" size 40 color "000000" xpos 1980 ypos 1740 xanchor 0.5
    text "[persistent.learning_time]" size 40 color "000000" xpos 2170 ypos 1740 xanchor 0.5

screen spash_screen_panel:
    vbox xalign 0.5 yalign 0.5 spacing 25:
        image "splash/splash.png" xanchor 0.5
        text "Presents..." size 40 color "ffffff" xanchor 0.5

label splashscreen:
    scene black
    with Pause(2)

    show screen spash_screen_panel with dissolve
    with Pause(2)
    hide screen spash_screen_panel

    scene black
    with Pause(1)

    return

# game start with map navigation.
label start:

    # gui elements shown in all screens
    show screen score_panel
    show screen replay_voice

    # the quest map to select
    # scenarios and missions
    scene bg questmap:
        zoom 0.5

    # jump points for scenarios
    # as stories selected from map
    show screen map
    
    "Select your adventure..."
    "Saving progress..."
    $ persistent.learning_time += getPlayTime()
    $ save_progress()
    
    return
