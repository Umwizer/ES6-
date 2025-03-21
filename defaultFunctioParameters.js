function greet(name, greeting) {
    name = (typeof name !== 'undefined') ?  name : 'Student';
    greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';
  
    return `${greeting} ${name}!`;
  }
  
  greet(); // Welcome Student!
  greet('James'); // Welcome James!
  greet('Richard', 'Howdy'); // Howdy Richard!