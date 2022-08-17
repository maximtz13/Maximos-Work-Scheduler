// Display current time and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

    // Listener for save button click
    $(".saveBtn").on("click", function () {
        // On click, gathers values from "description" element
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // saves time and text into local storage
        localStorage.setItem(time, text)
    })

    function timeTrack() {
        //get current number of hours.
        var timePres = moment().hour();

        // loop over timeblocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // Check the time and add the classes to change bg color accordingly
            if (blockTime < timePres) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timePres) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    //getItem from local storage if available
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // runs the timeTrack function every 10 minutes
    setInterval(function () {
        timeTrack()
    }, (1000 * 60) * 10);

    timeTrack()
});
