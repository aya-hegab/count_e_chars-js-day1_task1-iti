var count = 0;
var userString = prompt("enter a string to count the 'e' character");

for (i = 0; i <= userString.length; i++) {
  if (userString.toLowerCase().charAt(i) === "e") {
    count++;
  }
}
document.writeln("<h1>" + count + "</h1>");
// console.log(userString);
// console.log(count);
