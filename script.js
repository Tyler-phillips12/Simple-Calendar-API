$(document).ready(function () {// tells engine to load 1)html & 2)css first.
    // current day and time 
    $("#currentDay").text(dayjs().format("MMMM D YYYY, h:mm:ss a")); // use of moment.js
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        //this function to retrieve values 
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
  
        localStorage.setItem(time, text);
    })
    //load any saved data from local storage 
    $("#hour-9.description").val(localStorage.getItem("hour8"));
    $("#hour-10 .description").val(localStorage.getItem("hour9"));
    $("#hour-11 .description").val(localStorage.getItem("hour10"));
    $("#hour-12 .description").val(localStorage.getItem("hour11"));
    $("#hour-1 .description").val(localStorage.getItem("hour12"));
    $("#hou-2 .description").val(localStorage.getItem("hour13"));
    $("#hour-3 .description").val(localStorage.getItem("hour14"));
    $("#hour-4 .description").val(localStorage.getItem("hour15"));
  
    function hourTracker() {
        // functin to track the current hour 
        var currentHour = dayjs().hour(); // use of moment.js
  
        // function with logic to loop over time blocks 
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)
  
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); 
  })