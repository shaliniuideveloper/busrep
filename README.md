# busrep
#Status column of the table is derived based on the following assumptions
#DeviationFromTimeTable < 0 => Early
#DeviationFromTimeTable > 0 && DeviationFromTimeTable < 200 => Ontime
#DeviationFromTimeTable > 200 => Late
#DeviationFromTimeTable == null => Unknown
#Accordingly styling is varied based on the status
#Bootstrap is used to apply styling
#Angular Material Data table is used to render the detailed route details of each type of buses
#Angular collapsible is used to render the Buses list
#Service consumes the data from json instead of end point.
#Provided dummy event handler on click of the save button 