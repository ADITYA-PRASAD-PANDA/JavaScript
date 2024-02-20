//Data Types:- Data ka roop

//Mainly it is divided in to 2 types:

//1.Primitive  Date Type: Int,float,boolean,string,character,null, undefined.
//primitive mein values copy hota hai
var a=20
var b=a  // b mein a ka copy banega . agar b ka value change hota hai to a mein farak nahi padega

//2.Reference / Non-Primitive Data Type: jo bhi {},[],()  use karta hai usko reference data type kaha jata hai .eg- functions,array;       
var a1=[2,3,4,5,6];
var b1=a
b1.pop(); // a ka reference banega b mein. b ka value pop hone ki wakt a ka value pop hojaega

//so iss se bachne keliye ham use karenge spread operator ka
var arr=[1,2,3,4,5,6];
var brr=[...arr]; // iss se arr ka copy bankar brr mein store hoga naki uska reference pass hoga

//--------------------------------------------------------------------
//Conditionals:
//  99% if else else if use hota hai
//  1% ternary operator use hota hai
// almost no % switch case use hota hai😂
 
c=10;
if(c > 10)
{
  document.write(" Code executed");
}

