//Functions :
// Mainly functions are divided in to two types:
//es5 and es6

//-------------------------------------------------------------------
//es5 are futrher divided into 3 types:
// 1.function statement:
function abc()
{
  //function statement
}

//2.function expression
var abcd = function()
{
  //function expression
}

//3.anonymous function
function abcd()
{
  //anonymous function
}

//------------------------------------------------------------------
//es6 divided in to 1 type:
//fat arrow function: isko tin prakar mei likha ja sakta hai

// 1.basic fat arrow
()=>{

}
//or
var b = ()=>{

}

// 2. fat arrow with one parameter
var c= ab=>{

}
c(12)   // c ka value function hoga aur 12 ab mein store hoga (ab)

// 3.fat arrow with implicit return
var abcde = ()=> 5;
{
  
}
var b=  abcde();

//--------------------------------------------------------------------
// In js Functions declare karne ke time data types declare karna nahi padta eg- int or void just like we were declaring in java; but yahan function use karne ke liye just function keyword use karna paadta hai
//eg:-
 function abcd(~param){
  //~param ka matlab kuch value ho sakta hai ya fir nahi
} 

function abcd(val)  //here val is variable or actual parameter
{
  console.log(val+1)
}
abcd(11) // 


//--------------------------------------------------------------
//Return:
//return ka matlab hua, jahan para return lagega uske aghe jo bhi lokha hoga wo jaega jahan par functon call hua tha;

// return functions ke andar lagti hai
function ab()
{
  return 5;
}
var d = ab();  // d mein store hoga 5 
console.log(d);

//jo function return mein kuch nahi likha hota to tab wo undefined return karta hai because java script ka ground rule hai kuch na kuch return karega
var abcde = ()=>{
  return 5;
}
var b=  abcde();