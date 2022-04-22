//Let's define a function to get sleep hours for each day of the week. I have clubbed some days together. You can re-arrange it for individual days if you want more personalised calculator!
function getSleepHours(day){
  if (day === 'monday' || day === 'wednesday' || day === 'friday'){
    return 8;
  }
  else if (day === 'tuesday' || day === 'thursday'){
    return 4;
  }
  else if (day === 'saturday' || day === 'sunday'){
    return 9;
  } else {
    return 'error';
  }
}
//console.log(getSleepHours('tuesday'));

//function that sums up total sleep for the week. 
const getActualSleepHours = () => 
   (getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday'));
console.log(getActualSleepHours());

function idealHours(){ //let's define our ideal sleep hours.
  const idealHours = 8;
  return idealHours * 7; // ideal sleep hours * 7 days.
}
//console.log(idealHours());

//This is our last function. We will get our actual sleep debt by comparing with ideal sleep and generate our result based on the output. 
function calculateActualSleepDebt(){
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = idealHours();
  if (actualSleepHours === idealSleepHours){
    console.log(`You slept ${actualSleepHours} hours this week, that is an ideal sleep.`);
  }
  else if(actualSleepHours > idealSleepHours){
    const T1 = (actualSleepHours - idealSleepHours);
    console.log(`You slept ${T1} hours, you got more than idea sleep!`);
  }
  else if (actualSleepHours < idealSleepHours){
    const T2 = (idealSleepHours - actualSleepHours);
    console.log(`You only got ${actualSleepHours} hours of sleep, that is ${T2} hours less than your idea sleep!`);
  } else {
    console.log('sleeeeeeeep!');
  }
}
calculateActualSleepDebt(); // calling the function to get answers!

//end!!!

