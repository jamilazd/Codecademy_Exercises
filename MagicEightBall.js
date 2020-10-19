let userName = 'Jamila'; 

userName ? console.log('Hello ' +   userName) : console.log('Hello Stranger');

let userQuestion = 'will I be successful?'
console.log(userName + ' asks ' + userQuestion); 

let randomNumber = Math.floor(Math.random() * 8);

switch(randomNumber) {
  case 0: 
  eightBall = 'Reply hazy try again'; 
  break;
  case 1:
  eightBall = 'There is a 50/50 chance';
  break; 
  case 2: 
  eightBall = 'It is decidedly so';
  break; 
  case 3: 
  eightBall = 'It is probably certain'; 
  break; 
  case 4: 
  eightBall = 'Do not count on it'; 
  break; 
  case 5:
  eightBall = 'Outlook not so good'; 
  break; 
  case 6:
  eightBall = 'My sources say no';
  break; 
  case 7: 
  eightBall = 'Signs point to yes';
  break;
  case 8: 
  eightBall = 'Cannot predict now'; 
  break;  
  case 9:
  eightBall = 'The fates are uncertain';
  break;
}
console.log(eightBall); 

