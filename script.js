//time target
var date1 = new Date("01/01/2023");
//time now
var date2 = new Date();
//get time of hour
var timeGet = date2.getTime() - date1.getTime();
//set into days
var Difference_In_Days = timeGet / (1000 * 3600 * 24);

//progress line
const progress = document.getElementById("progress");
//percentage of days
const percent = document.getElementById("days_total");
//disable decimals of days total
const total = Math.trunc(Difference_In_Days);

//set interval for declaring progress and %
const interval = setInterval(function () {
  //information of %
  percent.innerHTML = Math.trunc((total / "365") * "100") + "%";

  //progress
  progress.style.width = Math.trunc((total / "365") * "100") - 1 + "%";

  //interval time
}, 100);
