This `attributes` folder contains the source Excel spreadsheet for the project's languages and their associated attributes (`LanguageDataExtended.xlsx`), and the XML virtual layer definition that allows the content of the spreadsheet's first worksheet as a virtual geospatial layer (`current_language_data_VRT.xml`) that can be read by geospatial applications that use GDAL/OGR for interacting with spatial data. 

The language attributes in the spreadsheet include the following:

Language Parameter | Parameter Name | Description | Values

Language code | code | Standard language code | Three letter language code with optional single number added
Language name | Name | Language name | Text
Language family | Family | Language family name | Text
Comments | comments | Comments related to the entry | Text
Vowel index | VowIndex | Proportion of vowel symbols in simplified transcriptions of short wordlists (from Everett 2017) | 0.251282051 - 0.646551724 (available only for a subset of our sample)
Vowel index 2 | VowIndex2 | Proportion of vowel symbols in simplified transcriptions of short wordlists (from Everett 2017) | 0.251282051 - 0.646551724 (available only for a subset of our sample)
Number of speakers | NbSpeakers | Number of speakers | Numeric
Stability | Stability | Qualitative description of language locational stability | "stable", "displaced", "unclear", blank
Latitude | Lat | Latitude of the reference point for the language | Decimal degrees, North is positive, South is negative
Longitude | Long | Longitude of the reference point for the language | Decimal degrees, East of 0 longitude is positive, West of 0 longitude is negative
Maximum onset | Onset | Index of onset complexity | 0 - 3 (0 = single C onset)
Maximum coda | Coda | Index of coda complexity | 0 - 3 (0 = no coda allowed)
Basic vowel qualities | VQ | Simple vowels only | 2 - 20
Total number of vowels | VTotal | All vowels including long, nasalized, diphthongs, etc | 2 - 72
Number of consonants | CTotal | Total of consonants in inventory | 6 - 128
Number of obstruents | Obstr | Total of obstruents in inventory | 4 - 122
Sum of consonants & vowels | SegTot | Sum of VTotal and CTotal | 11 - 156
Sum of consonants & basic vowels | CplusVQ | Sum of VQ and CTotal | 11 - 133
Percentage of obstruents | ObsPct | % of obstruents in CTotal | 17.3913 - 100
Complexity of tone system | ToneCat | Categorical labeling of tone systems | None, Marginal, Simple, Moderately Complex, Complex
Tone system index | ToneOrdinal | Rank order of tone system complexity | 0 - 3 (0 = no tone; 3 = complex tone system)
Maximum onset and coda | OnsCoda | Sum of Onset and Coda | 0 - 6 
Consonant heaviness index | ConsHeavy | Sum of OnsCoda plus CTotal/4 | 1.2 - 33
Consonant heaviness index, Obstruents only| CHeavyObstr | Sum of OnsCoda plus Obstr/3 | 1.33* - 41.66*
Log-based consonant heaviness | CHeavyLog | Sum of OnsCoda plus (log)CTotal | 1.7976 - 10.0604
Log of number of speakers | LogSpkrs | Log transform of the number of speakers NbSpeakers | Numeric
Absolute Latitude | Abs(Lat) | Absolute value of the latitude of the reference point for the language | Decimal Degrees
Obstruent laterals | ObsLat | Presence/absence of /ŋ/ in inventory | Yes/No
Front rounded vowels | FRndV | Presence/absence of front rounded vowels | Yes/No
Glottalized consonants | GlotC | Presence/absence of glottalized consonants in inventory | No, Ejectives (Ej), Implosives (Imp), Resonants (Res), Ej & Imp, Ej & Res, Ej Imp & Res, Imp & Res, Plosives (Korean only)
Presence of ejectives | Ejectives | Presence/absence of ejectives in inventory | Yes/No
Number of ejectives | #Ejectives | Number of ejectives in inventory | 0 - 19
Presence of implosives | Implosives | Number of implosives in inventory | Yes/No
Number of implosives | # Implosives | Presence/absence of implosives in inventory | 0 - 6
Glottalized sonorants | GlotRes | Presence/absence of glottalized sonorants in inventory | Yes/No
Number of glottalized sonorants | #GlotRes | Number of glottalized sonorants in inventory | 0 - 8
Velar nasal | VelarNas | Presence/absence of /ŋ/ in inventory | Yes/No
Nasalized vowel pattern | NVPattern | Nasalization contrast affecting basic vowel qualities | None, Some, All
Prenasalized consonants | PNC’s | Presence/absence of prenasalized stops in inventory | Yes/No
Vowel length pattern | VLength | Vowel length contrast affecting basic vowel qualities | None, Some, All, Other (more long than short vowels)

