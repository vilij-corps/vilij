var start_time, end_time;

function start_timer() {
  start_time = performance.now();
};

function end_timer() {
  end_time = performance.now();
  let time_diff = end_time - start_time; //in ms 
  
  let seconds = time_diff /= 1000;
  console.log(seconds.toFixed(2) + " seconds");

  let minutes = seconds / 60;
  console.log(minutes.toFixed(2) + " minutes");

  let hours = minutes / 60;
  console.log(hours.toFixed(3) + " hours");

}

start_timer();
setTimeout(() => { end_timer(); }, 2000);