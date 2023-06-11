$(document).ready(function() {
    // Current day and time
    $("#currentDay").text(dayjs().format("MMMM D YYYY, h:mm:ss a"));
  
    // SaveBtn click listener
    $(".saveBtn").on("click", function() {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, text);
    });

    // DeleteBtn click listener
  $(".delete-button").on("click", function() {
    localStorage.clear();
    $(".description").val("");
  });
  
    // Load any saved data from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  
    function hourTracker() {
      var currentHour = dayjs().hour();
  
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
  
        if (blockHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }
  
    hourTracker();
  });
  
  
  