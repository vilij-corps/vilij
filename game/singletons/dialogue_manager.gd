'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

extends Node

# how many lines there are in the script
var dialogue_lines = null
# as the script reached the end
var dialogue_end = null
# which line is currently active
var dialogue_state = 0

func dialogue_manager(script):
	dialogue_lines = script.size()
	dialogue_end = dialogue_lines - 1

func dialogue_forward():
	dialogue_state += 1
	
func dialogue_back():
	dialogue_state -= 1

# where to place the dialogue bubble
func dialogue_position():
	pass
	
# set visibility to show for
# character speaking
func dialogue_show():
	pass

# set visibility to hide for
# character not speaking
func dialogue_hide():
	pass
