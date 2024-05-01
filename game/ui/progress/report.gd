'''
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Control

@onready var report_list : VBoxContainer = %ReportList

var report_data = null

func _ready():
	report_data = SaveSystem._progressData

# add text to the UI
func populate_summary():
	var summary = report_data["summary"]
	for i in summary.size():
		var row = HBoxContainer.new()
		var eng = Label.new()
		var lu = Label.new()
		lu.text = summary[i]["luganda"]
		lu.add_theme_font_size_override("font_size", 36)
		eng.text = summary[i]["english"]
		eng.add_theme_font_size_override("font_size", 24)
		row.add_child(lu)
		row.add_child(eng)
		report_list.add_child(row)
		
func populate_scenarios():
	var scenes = report_data["scenes"]
	for i in scenes.size():
		var row = HBoxContainer.new()
		var eng = Label.new()
		var lu = Label.new()
		lu.text = scenes[i]["luganda"]
		lu.add_theme_font_size_override("font_size", 36)
		eng.text = scenes[i]["english"]
		eng.add_theme_font_size_override("font_size", 24)
		row.add_child(lu)
		row.add_child(eng)
		report_list.add_child(row)
