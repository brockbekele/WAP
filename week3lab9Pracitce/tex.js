$(function() {
$("#textbox").mouseout(sayHi); // bound to text box here
$("#btn").click(sayHi); // bound to submit button here
});
function sayHi() { // sayHi knows what object it was called on
this.value = "sayHi";
}
