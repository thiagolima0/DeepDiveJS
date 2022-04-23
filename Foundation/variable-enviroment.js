function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true; // local env
}

var isValid = false;
one();

//two() = undefined
//one() = true
//global() = false