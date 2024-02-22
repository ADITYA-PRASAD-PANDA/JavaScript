//Undefined:
//It is a value. jab variable ko kuch assign kiya nahi jata tab wo undefined hota hai. Default value undefined hota hai
var a;
var b= undefined;

//Not defined:
//It is an error. jab variable/element ko na declare kiya use karte hain tab refernece error dikhayega
console.log(c); // c is not defined


//Null:
//It  is also loke a value, which resolves like not found. null is received when something is not found. 


//----------------------------------------------------------------
//Arrays
//array use hota hai jab jyada value store karni ho
arr=["aditya","aditi","aditiya",1,2,[3,4], function(){} ];
console.log(arr[3]);
//If you access something out of range it will dispaly the default value i.e. undefined

//How to iterate over array using loop
var ar=[1,2,3,4,5];
ar.forEach(function(value)
{
  console.log("Hi");
});

//-------------------------------------------------------------------
//Objects:
//objects ek tariks hai jisse  ki huum  eik identity ki  details ko ek saath rakh sakte hain
//In sort bahut jyada logon ka data ko array use karenge aur ek bande ka bahut sara  data ko object use karenge
var obj={};
var obj1 = new Object();

var ob={
  name:"aditya",
  contactno:35636666623,
  address:"heaven"
};
ob.address;
//console.log - console is object , log is a function

//------------------------------------------------------------------



//Synchronous Js:  mein code hamesha line by line chalta hai. ye code hamesha main stack mein run hota hai 

//async js mein  code line by line nahi chalta , sara async  code ek  sath shuru kar diya jata hai  and jo pehele complete hojaye uska answer dediya jata hai. ye code hamesh side stack ein run hota hai. side stack ein code execute nahi hoga sirf data processing hoga 