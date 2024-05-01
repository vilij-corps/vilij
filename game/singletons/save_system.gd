extends Node

# Completion of all dialogs
# Completion of all vocabularies
var scenarios = 0

# Itemized count
var scenario_tally = null

# Object clicks
var vocabulary = 0

# Count / Weight of repeats
var experience = 0

# Aggregate time playing game
var learning_time = 0

# Need a smart formula for this
var proficiency_level = 1

var cooking_vocabulary = 0
var cooking_dialogues = 0
var culture_vocabulary = 0
var culture_dialogues = 0
var date_time_vocabulary = 0
var date_time_dialogues = 0

var progress_file = "user://progress.json"

var _progressData = {}

func update_progress():
	_progressData = {
		"summary" : [
			{"scenarios" : scenarios},
			{"vocabulary" : vocabulary},
			{"experience" : experience},
			{"learning_time" : learning_time},
			{"proficiency_level" : proficiency_level}
		],
		"scenes" : [
			{ "scene" : "cooking", "dialogues" : cooking_dialogues, "vocabulary" : cooking_vocabulary },
			{ "scene" : "culture", "dialogues" : culture_dialogues, "vocabulary" : culture_vocabulary },
			{ "scene" : "date and time", "dialogues" : date_time_dialogues, "vocabulary" : date_time_vocabulary }
		]
	}

func load_progress():
	if FileAccess.file_exists(progress_file):
		print("file found")
		var file = FileAccess.open(progress_file, FileAccess.READ)
		var json_as_dict = JSON.parse_string(file.get_as_text())
		if json_as_dict is Dictionary:
			print("success reading file")
			_progressData = json_as_dict
			return json_as_dict
		else:
			print("error reading file")
	else:
		print("file not found")
		

func save_progress():
	update_progress()
	var file = FileAccess.open(progress_file, FileAccess.WRITE)
	file.store_string(JSON.stringify(_progressData, "\t"))
	file.close()
