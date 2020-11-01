$(document).ready(function () {
  // display current date within #currentday id

  $("#currentDay").text(moment().format("LLLL"));

  var currentHour = parseInt(moment().format("HH"));

  //Change textarea background color based on time
  var checkTime = function () {
    var textAreas = $(".description");
    // apply new class if task is near/over due date
    for (var i = 0; i < textAreas.length; i++) {
      var textAreaID = parseInt(textAreas[i].id);
      if (textAreaID < currentHour) {
        textAreas[i].classList.add("past");
      } else if (textAreaID > currentHour) {
        textAreas[i].classList.add("future");
      } else {
        textAreas[i].classList.add("present");
      }
    }
  };
  checkTime();

  // WHEN I click the save button for that time block
  // THEN the text for that event is saved in local storage

  // WHEN I refresh the page
  // THEN the saved events persist
  // ```
  
  $(".saveBtn").addEventListener('click', function() {
    localStorage.setItem("timeBlockArray", timeBlockArray.value);
  }, false);


  //get local data
  var timeBlockArray = $(".time-des");
  timeBlockArray.each(function (index) {
    var $timeblock = $(timeBlockArray[index]);
    //get the id
    var id = $timeblock.find("textarea").attr("id");
    //get that data associated with the id
    var data = localStorage.getItem(`hour-${id}`);
    //udpate the textarea
    if (data) {
      timeBlockArray.find("textarea").val(data);
    } else {
      timeBlockArray.find("textarea").val("");
    }
  });
});
