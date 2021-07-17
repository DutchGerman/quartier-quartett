# PYTHON TO EXCEL CONVERTER

# reads data from excel file "Quartier-Quartett.xlsx"
# writes data to json file "gamedata.json"
# for requirements see README.md

# import libraries
import pandas as pd
import json

# read dataframe
df = pd.read_excel("Quartier-Quartett.xlsx",
                   sheet_name='spieldaten',
                   na_values="-",
                   parse_dates = [0],
                   index_col=0)

# extract districts
stadtteile = df.columns[-23:]

# fill empty values with empty strings
df = df.fillna("")

labels = df.index
# create list with 23 elements containing attributes for each district
quartiere = []
for stadtteil in stadtteile:
    attributes = []
    for label in labels:
        value = df[stadtteil].loc[label]
        unit = df["Einheit"].loc[label]
        winCondition = df["WinCondition"].loc[label]
        attributes.append(dict({"label": label,
                     "value": value,
                     "unit": unit,
                     "winCondition": winCondition}))
    quartiere.append(attributes)

# create dict
output = []
for index, stadtteil in enumerate(stadtteile):
    output.append(dict({"id": index,
                  "name": stadtteil,
                  "attributes": quartiere[index]
                       }))

# write to file
json_object = json.dumps(output)
with open("gamedata.json", "w") as outfile:
    outfile.write(json_object)