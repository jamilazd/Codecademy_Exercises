let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true; 
let runnerAge = 18; 

if (earlyRunner && runnerAge > 18){ console.log(raceNumber + 1000);
}

if(earlyRunner && runnerAge > 18) {
  console.log( raceNumber + 1000 + ', you will race at 9:30am'); 
} 
else if (!earlyRunner && runnerAge > 18 ) {
  console.log(`${raceNumber}` + ', you will race at 11:00am');
} else {
  console.log('Please see the registration desk'); 
}

if(runnerAge < 18) {
  console.log( `${raceNumber}` + ', you will race at 12:30am')
}

