

 setInterval(() => {
  let clock = document.querySelector('#clock');
  let day = document.querySelector('#day');
  let month = document.querySelector('#month');
  let year = document.querySelector('#year');
  let ampm = document.querySelector('#ampm');
 
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
 
  if(minutes < 10){
    minutes = `0${minutes}`;
  }
 
  if(seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  let cDate = date.getDate();
  let cMonth = date.getMonth()+1;
  let cYear = date.getFullYear();
 
  let cDay = date.getDay();
 
  let daysName = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
  ];
 
  if(hours<12){
   ampm.innerHTML = 'AM';
  } else {
   ampm.innerHTML = 'PM';
  }
 
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
 
  day.innerHTML = `${daysName[cDay]} | ${cDate}-`;
 
  month.innerHTML = cMonth;
 
  year.innerHTML = `-${cYear}`;
 }, 1000);