const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let questions = ["What's your name?", "What's an activity you like doing?", 
"What do you listen to while doing that?", 
"Which meal is your favourite? (eg: dinner, brunch, etc.)", 
"What's your favourite thing to eat for that meal?", 
"Which sport is your absolute favourite?", 
"What is your superpower? In a few words, tell us what you are amazing at!"]
let answers = []
rl.question(`${questions[0]} `, (answer) => {
  answers.push(`${answer}`)

  rl.question(`${questions[1]} `, (answer) => {
    answers.push(`${answer}`)
  
    rl.question(`${questions[2]} `, (answer) => {
      answers.push(`${answer}`)
    
      rl.question(`${questions[3]} `, (answer) => {
        answers.push(`${answer}`)
      
        rl.question(`${questions[4]} `, (answer) => {
          answers.push(`${answer}`)
        
          rl.question(`${questions[5]} `, (answer) => {
            answers.push(`${answer}`)
          
            rl.question(`${questions[6]} `, (answer) => {
              answers.push(`${answer}`)
            console.log(`Hi! my name is ${answers[0]}, and I love ${answers[1]}!
            \nMy favourite kind of music is ${answers[2]}.
            \nMy favourite meal is ${answers[3]} and my favourite dish is ${answers[4]}.
            \nMy favourite sport is ${answers[5]} 
            and the thing I'm the best at is ${answers[6]}.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});