import {waktu} from "./fetchTime.js";
setInterval(function() {
waktu();
yourTime.innerHTML = moment().format('hh:mm:ss');
yourDate.innerHTML = moment().format('L');
  }, 100);
  