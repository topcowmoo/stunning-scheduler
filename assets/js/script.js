$(function () {
    $(".saveBtn").on("click", function () {
    var timeBlockID = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockID, userInput);
});

function updateColors() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id).split("-") [1]);
      $(this).removeClass("past present future");
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass("present");
      } else {
        $(this).addClass("future");
      }
});
}



displayUserInput();

});

var currentDate = dayjs();
var formattedDate = currentDate.format('dddd, MMMM D');

document.getElementById("currentDay").innerHTML = formattedDate;