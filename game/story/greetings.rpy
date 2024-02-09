
# button to replay last voice over
screen replay_voice:
    fixed xpos 3500 ypos 1700:
        vbox xsize 48:
            imagebutton:
                idle "icons/replay_voice_idle.svg"
                hover "icons/replay_voice_hover.svg"
                action VoiceReplay()

# speech bubble indicators
transform om_speaking:
    pos (730, 925)
    anchor (0.5, 1.0)

transform ow_speaking:
    pos (3130, 925)
    anchor (0.5, 1.0)

label greetings:

    scene bg_sun_rises
    show screen replay_voice

    "Now we will focus on formal greetings..."

    show om_look_right at place_right
    show ow_face_forward_left at place_left

    show speaking at om_speaking
    # "Wasuze otyano Nnyabo"
    # "Good morning Madam"
    # voice "voice-overs/how-are-you-f.mp3"
    akiki "{rb}Wasuze otyano Nnyabo.{/rb}{rt}{i}{color=#666}Good morning Madam.{/color}{/i}{/rt}"

    show speaking at ow_speaking
    # "Wasuze otyano Ssebo"
    # "Good morning Sir"
    voice "voice-overs/how-are-you-f.mp3"
    akello "{rb}Wasuze otyano Ssebo.{/rb}{rt}{i}{color=#666}Good morning Sir.{/color}{/i}{/rt}"

    # "Osiibye otyano Ssebo"
    # "Good afternoon Sir"
    # voice "voice-overs/how-are-you-f.mp3"
    akello "{rb}Osiibye otyano Ssebo.{/rb}{rt}{i}{color=#666}Good afternoon Sir.{/color}{/i}{/rt}"

    show speaking at om_speaking
    # "Osiibye otyano Nnyabo"
    # "Good afternoon Madam"
    # voice "voice-overs/how-are-you-f.mp3"
    akiki "{rb}Osiibye otyano Nnyabo.{/rb}{rt}{i}{color=#666}Good afternoon Madam.{/color}{/i}{/rt}"
    
    show speaking at ow_speaking
    # "Bulungi Ssebo, gwe osiibye Ssebo?"
    # "Fine, and how are you Sir?"
    # voice "voice-overs/how-are-you-f.mp3"
    akello "{rb}Bulungi Ssebo, gwe osiibye Ssebo?{/rb}{rt}{i}{color=#666}Fine, and how are you Sir?{/color}{/i}{/rt}"

    show speaking at om_speaking
    # "Bulungi Nnyabo, gwe osiibye Nnyabo?"
    # "Fine, and how are you Madam?"
    # voice "voice-overs/how-are-you-f.mp3"
    akiki "{rb}Bulungi Nnyabo, gwe osiibye Nnyabo?{/rb}{rt}{i}{color=#666}Fine, and how are you Madam?{/color}{/i}{/rt}"

    # "Abeeka bali batya?"
    # "How is everyone at home?"
    # voice "voice-overs/how-are-you-f.mp3"
    akello "{rb}Abeeka bali batya?{/rb}{rt}{i}{color=#666}How is everyone at home?{/color}{/i}{/rt}"

    show speaking at ow_speaking
    # "Gyeballi balungi"
    # "Everybody is fine"
    # voice "voice-overs/how-are-you-f.mp3"
    akiki "{rb}Gyeballi balungi.{/rb}{rt}{i}{color=#666}Everybody is fine.{/color}{/i}{/rt}"

    # "Tunaalabagana enkya"
    # "See you again tomorrow"
    # voice "voice-overs/how-are-you-f.mp3"
    akiki "{rb}Tunaalabagana enkya.{/rb}{rt}{i}{color=#666}See you again tomorrow.{/color}{/i}{/rt}"

    show speaking at ow_speaking
    # "Weeraba"
    # "Goodbye (singular)"
    # voice "voice-overs/how-are-you-f.mp3"
    akello "{rb}Weeraba.{/rb}{rt}{i}{color=#666}Goodbye (singular).{/color}{/i}{/rt}"

    show speaking at om_speaking
    # "Mweraba"
    # "Goodbye (plural)"
    # voice "voice-overs/how-are-you-f.mp3"
    akello "{rb}Mweraba.{/rb}{rt}{i}{color=#666}Goodbye (plural).{/color}{/i}{/rt}"

    $ measure_a += 1
    "You have finished this scenario."

    return