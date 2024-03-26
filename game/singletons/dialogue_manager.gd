'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

extends Node

var dialogue_lines = null
var dialogue_end = null
var dialogue_state = 0

func dialogue_manager(script):
	dialogue_lines = script.size()
	dialogue_end = dialogue_lines - 1

func dialogue_forward():
	dialogue_state += 1
	
func dialogue_back():
	dialogue_state -= 1

func dialogue_position():
	pass
	
func dialogue_show():
	pass
	
func dialogue_hide():
	pass
