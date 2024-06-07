var cooking_vocabulary = 0
var cooking_dialogues = 0
var culture_vocabulary = 0
var culture_dialogues = 0
var date_time_vocabulary = 0
var date_time_dialogues = 0

var progress_file = "user://progress.json"

var _progressData = {}

function update_progress() {
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
}
