[gd_scene load_steps=2 format=3 uid="uid://crj20wy8552wv"]

[ext_resource type="Script" path="res://scenes/cooking/_helpers/recipe_maker.gd" id="1_b322t"]

[node name="RecipeMaker" type="Control"]
layout_mode = 3
anchors_preset = 15
anchor_right = 1.0
anchor_bottom = 1.0
grow_horizontal = 2
grow_vertical = 2
script = ExtResource("1_b322t")

[node name="MarginContainer" type="MarginContainer" parent="."]
layout_mode = 1
anchors_preset = 15
anchor_right = 1.0
anchor_bottom = 1.0
grow_horizontal = 2
grow_vertical = 2
theme_override_constants/margin_left = 50
theme_override_constants/margin_top = 50
theme_override_constants/margin_right = 50
theme_override_constants/margin_bottom = 50

[node name="TabContainer" type="TabContainer" parent="MarginContainer"]
layout_mode = 2

[node name="Description" type="TabBar" parent="MarginContainer/TabContainer"]
layout_mode = 2

[node name="MarginContainer" type="MarginContainer" parent="MarginContainer/TabContainer/Description"]
layout_mode = 1
anchors_preset = 15
anchor_right = 1.0
anchor_bottom = 1.0
grow_horizontal = 2
grow_vertical = 2
theme_override_constants/margin_left = 25
theme_override_constants/margin_top = 25
theme_override_constants/margin_right = 25
theme_override_constants/margin_bottom = 25

[node name="VBoxContainer" type="VBoxContainer" parent="MarginContainer/TabContainer/Description/MarginContainer"]
layout_mode = 2

[node name="Ingredients" type="TabBar" parent="MarginContainer/TabContainer"]
visible = false
layout_mode = 2

[node name="MarginContainer" type="MarginContainer" parent="MarginContainer/TabContainer/Ingredients"]
layout_mode = 1
anchors_preset = 15
anchor_right = 1.0
anchor_bottom = 1.0
grow_horizontal = 2
grow_vertical = 2
theme_override_constants/margin_left = 25
theme_override_constants/margin_top = 25
theme_override_constants/margin_right = 25
theme_override_constants/margin_bottom = 25

[node name="list" type="VBoxContainer" parent="MarginContainer/TabContainer/Ingredients/MarginContainer"]
unique_name_in_owner = true
layout_mode = 2

[node name="Directions" type="TabBar" parent="MarginContainer/TabContainer"]
visible = false
layout_mode = 2

[node name="MarginContainer" type="MarginContainer" parent="MarginContainer/TabContainer/Directions"]
layout_mode = 1
anchors_preset = 15
anchor_right = 1.0
anchor_bottom = 1.0
grow_horizontal = 2
grow_vertical = 2
theme_override_constants/margin_left = 25
theme_override_constants/margin_top = 25
theme_override_constants/margin_right = 25
theme_override_constants/margin_bottom = 25

[node name="steps" type="VBoxContainer" parent="MarginContainer/TabContainer/Directions/MarginContainer"]
unique_name_in_owner = true
layout_mode = 2
