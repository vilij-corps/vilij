'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

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
var proficiency_level = 0

const PROGRESS_FILE_PATH = "user://progress.save"

func update_scenarios():
	print("+1 scenarios")
	scenarios += 1
	
func update_vocabulary():
	vocabulary += 1
	
func update_learning_time(elapsed_time):
	learning_time += elapsed_time
	
func save_progress():
	print("saving progress")
	var file = FileAccess.open(PROGRESS_FILE_PATH, FileAccess.WRITE)
	file.store_var(scenarios)
	file.store_var(vocabulary)
	file.store_var(learning_time)
	file.close()
	
func load_progress():
	if FileAccess.file_exists(PROGRESS_FILE_PATH):
		var file = FileAccess.open(PROGRESS_FILE_PATH, FileAccess.READ)
		scenarios = file.get_var(scenarios)
		vocabulary = file.get_var(vocabulary)
		learning_time = file.get_var(learning_time)
	else:
		print("no data saved...")
		scenarios = 0
		vocabulary = 0
		learning_time = 0
