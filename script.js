function time() {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
}

var x = setInterval(function () {
  fetch("https://timeapi.mininxd.my.id/", {
    header: {
      "Content-Type": "Application/JSON",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const serverdate = data.wib[0].date;
      const serverday = data.wib[0].weekday;
      const servertime = data.wib[0].time;
      const serveryear = data.wib[0].year;
      const servertime12h = data.wib[0].time12;
      const servertime24h = data.wib[0].time24;

      //leap year check
      let leap = new Date(data.wib[0].year, 1, 29).getDate() === 29;
      //max days if leap year
      if (leap) {
        maxdays = "366";
      } else {
        maxdays = "365";
      }

      //
      //
      //time start (1 january ××××)
      var date1 = new Date("01/01/" + data.wib[0].year);
      //time now
      var date2 = new Date(serverdate);
      //get time of hour
      var timeGet = date2.getTime() - date1.getTime();
      //set into days
      var Difference_In_Days = timeGet / (1000 * 3600 * 24);

      //progress line
      const progress = document.getElementById("progress");
      //percentage of days
      const percent = document.getElementById("days_percentage");
      //disable decimals of days total
      const total = Difference_In_Days + 1;

      //information of %
      percent.innerHTML = Math.trunc((total / maxdays) * "100") + "%";
      //year
      document.getElementById("year").innerHTML = serveryear;
      //progress
      progress.style.width = Math.trunc((total / maxdays) * "100") - 1 + "%";

      //
      //

      //extra information
      var date_decimal = (total / "365") * "100";
      document.getElementById("days_percentage_decimals").innerHTML =
        date_decimal.toFixed(2);

      document.getElementById("days_total").innerHTML = total;

      document.getElementById("maxdays").innerHTML = maxdays;

      document.getElementById("serverdate").innerHTML = serverdate;
      
      
      document.getElementById("servertime").innerHTML = servertime;

      document.getElementById("servertime12H").innerHTML =
        servertime12h + " " + data.wib[0].AMPM.toUpperCase();

      document.getElementById("servertime24H").innerHTML = servertime24h;
    });
}, 1000);
