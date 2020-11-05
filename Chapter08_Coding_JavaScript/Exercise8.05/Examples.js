const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askName = function() {
  interface.question("Hello, what is your name?", (input) => {
      if(input === "exit") {
          return interface.close(); // Will kill the loop.
      }

      console.log(`Hello, ${input}`);
      askName();
      
    });
}
askName(); // First Run.
