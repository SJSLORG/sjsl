function setReferees() {
  
  Logger.log("Starting function");
  
  var ssID = "1LL4nHyUTdOu_o8EW6MJNxwp9wksQBZuw3jsncAmureU";
  var formID = "1bUPUTEnpDfUAKDkKMXeyj7dNVyL3TdumIUWCdLkFDvE";
  var wsData = SpreadsheetApp.openById(ssID).getSheetByName("data");
  var refData = wsData.getRange(2, 1, wsData.getMaxRows() - 1).getValues();
  
  var form = FormApp.openById(formID);
  
  var items = form.getItems();
  var refFieldId = 0;
  
  Logger.log("Loop through items");
  
  items.forEach(function(item) {
    //Logger.log(item.getTitle() + ":" + item.getId());
    if (item.getTitle() === "Referee Name")
    {
      refFieldId = item.getId();
    }
  });
  
  Logger.log(refFieldId);
  //refFieldId = 440230474;
  var dropDownData = form.getItemById(refFieldId).asListItem();
  
  var refList = [];

  // convert the array ignoring empty cells
  for(var i = 0; i < refData.length; i++)    
    if(refData[i][0] != "")
      refList[i] = refData[i][0];

  // populate the drop-down with the array data
  dropDownData.setChoiceValues(refList);
  
}

