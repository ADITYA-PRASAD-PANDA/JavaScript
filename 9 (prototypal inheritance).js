//aisa  koi bi function jisme aap this ka upyog kar rahe ho aur us function ko call karte waqt app new ka upyog karein , to new  ka matlab waha par  ek blank object  hojaata hai

function human(){
  this.name="Aditya";
  this.age=21;

}
let a = new human();
//ek asia function o ki this ka upyog kar rahe ho and naye naye objects create kar rahe ho new ki madat se to usko constructor function kaha jata hai

//-----------------------------------------------------------------------------------------------
//Closures: aisa koi bi function jo ek aur function ko return karta hai 
function abc(){
  var a="hello";
  return function cd(){
    console.log(a)
  }
}
var e = abc();
console.log(e); // it will return a function
e(); //it will give the numeric output

//-----------------------------------------------------------------------
//event delegation:- jab aap event listener se kai saare different elements ke events ko handle kar sake;  event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karke different task karao


//try catch block

// higher order functions