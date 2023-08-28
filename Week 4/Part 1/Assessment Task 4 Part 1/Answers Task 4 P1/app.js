// Make a function in external JS file, that takes 2 parameters and return sum of them
function sum(a, b){
  return a + b;
}
console.log(sum(10, 5));

//  Make a function that takes Student faculty as a parameter, checks

function student(name){
  switch (name){
    // MIS
    case 'MIS':
      console.log("You’re eligible to Programing tracks");
      break;
    // Engineering
    case 'Engineering':
      console.log("You’re eligible to Network and Embedded tracks");
      break;
    //Commerce
    case 'Commerce':
    console.log("You’re eligible to ERP and Social media tracks");
    break;
    // other 
    default:
    console.log("You’re eligible to SW track");
    break;
  }
}
student('MIS');