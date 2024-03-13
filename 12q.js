const input  = require("readline-sync");

let a = input.questionInt("ENTER  NO A :- ");
if (a==0)
{
    console.log("ZERO");
}else if (a>0)
{
    console.log("positive");
}else {
    console.log("negatie");
}