export function waktu() {
  fetch('https://timeapi.mininxd.my.id/')
.then((res) => {
  return res.json();
}).then((data) => {  console.log(data);



//leap year check
  var maxdays;
      let leap = new Date(data.wib[0].year, 1, 29).getDate() === 29;
      //max days if leap year
      if (leap) {
        maxdays = "366";
        leapYear.innerHTML = "True"
      } else {
        maxdays = "365";
        leapYear.innerHTML = "False"
      }

var startDate = new Date("1/1/" + data.wib[0].year).getTime();
var thisDate = new Date().getTime();
var ongoingDays = Math.trunc((thisDate - startDate) / (1000 * 3600 * 24) + 1);

                   
var dateOngoing = Number(data.wib[0].unixtime);
var yearOngoing = Number(data.wib[0].year);
document.getElementById("thisYear").innerHTML = yearOngoing.toString();
// console.log(yearOngoing);

var dateStart = new Date("January 1," + yearOngoing + ", 00:00:00");
var dateStartSeconds = dateStart.getTime() / 1000;

var dateEnd = new Date("January 1," + Math.floor(yearOngoing + 1) + ", 00:00:00");
var dateEndSeconds = dateEnd.getTime() / 1000;

//Get Percentages
var percent, percentDec, percentDecFive
percent = Math.trunc((dateOngoing - dateStartSeconds) / (dateEndSeconds - dateStartSeconds) * 100) + "%";
percentDec = ((dateOngoing - dateStartSeconds) / (dateEndSeconds - dateStartSeconds) * 100).toFixed(2) + "%";
percentDecFive = ((dateOngoing - dateStartSeconds) / (dateEndSeconds - dateStartSeconds) * 100).toFixed(5) + "%";
//  test.innerHTML = percent;

barPercent.innerHTML = percent;
progressBar.style.width = percentDecFive;
  
var thisDate = JSON.stringify(data.wib[0].day).toString().replace(/"/g,"");
maxDays.innerHTML = ongoingDays + "/" + maxdays;
yourTime.innerHTML = moment().format('LTS');
yourDate.innerHTML = moment().format('L');
serverTime.innerHTML = JSON.stringify(data.wib[0].time).toString().replace(/"/g,"");
serverDate.innerHTML = JSON.stringify(data.wib[0].date).toString().replace(/"/g,"");
yearPercentageDecimals.innerHTML = percentDec;
yearPercentageDecimals5.innerHTML = percentDecFive;
  
  
}).catch((error) => {
  console.log(error);
})
}

