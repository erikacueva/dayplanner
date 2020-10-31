// display current date within #currentday id

//  run every second
$("#currentDay").text(moment().format("LLLL"));

var format = "hh:mm:ss";
var currentHour = parseInt(moment().format("HH"));
console.log(currentHour);

//  each time block is color-coded to indicate whether it is in the past, present, or future

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

// array of the divs 9=5 to iterate inthe function compareTime

// Array of the divs 9am-5pm to iterate in the function compareTime
var timeDivs = [
  { div: $("#9am"), startTime: "09:00:00", endTime: "09:59:59" },
  { div: $("#10am"), startTime: "10:00:00", endTime: "10:59:59" },
  { div: $("#11am"), startTime: "11:00:00", endTime: "11:59:59" },
  { div: $("#12am"), startTime: "12:00:00", endTime: "12:59:59" },
  { div: $("#1pm"), startTime: "13:00:00", endTime: "13:59:59" },
  { div: $("#2pm"), startTime: "14:00:00", endTime: "14:59:59" },
  { div: $("#3pm"), startTime: "15:00:00", endTime: "15:59:59" },
  { div: $("#4pm"), startTime: "16:00:00", endTime: "16:59:59" },
  { div: $("#5pm"), startTime: "17:00:00", endTime: "17:59:59" },
];

function compareTime(time) {
  // compare the current to an hour time block
  // for loop to iterate through the "timeDivs" divs for each once check:
  // if current time is before the time block, display certain
  // if the current time is before the block updat the div class to past
  // if the current time is within the time block update the div class to present
  // if the current time is after the time block update the div class to .future
}

// var time = moment() gives you current time. no format required.
var time = moment("09:34:00", format),
  beforeTime = moment("08:34:00", format),
  afterTime = moment("10:34:00", format);

if (time.isBetween(beforeTime, afterTime)) {
  console.log("is between");
} else {
  console.log("is not between");
}

// prints 'is between'
