//Function Expression
var canada = () => {
  console.log("cold");
};
//Function Declaration
function india() {
  console.log("warn");
}

// Function Invocation/Call/Execution
canada();
india();

function marry(person1, person2) {
  console.log(arguments);
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}

marry("tim", "tina");

function marry2(...args) {
  console.log(args);
  console.log(Array.from(args));
  return `${args[0]} is now married to ${args[1]}`;
}

marry2("tim", "tina");
