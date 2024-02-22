// Understanding this call apply bind
//jis word ka kuch matlab ho usko keyword bola jata hai. eg.
// var let for const

// this keyword in js is one of the most  suspenseful  keyword. this keywod baar baar badal sakti hai conditions ke according. 

//1. global mein this ka value window hoga
console.log(this); // global scope

//2.functions mein this ka value window hoga
function abcd(){
  console.log(this); //function scope
}
abcd();

//3. method mein this ka value object hoga
var obj={
  name:function(){       //method matlab function inside object
    console.log(this.age);
  },
  age:25,
  email:"adk@"
}
obj.name();

//4.function inside method (es5) mein this ka value window hota hai
 var obj2={
  sayNAme:function(){
    console.log(this);
    function childfun(){
      console.log(this);
    }
  }
 }
 obj2.sayNAme();

//5. function inside method (es6) mein this ka value  object hota hai
var obj3={
  sayName:function(){
    const child = ()=>{
      console.log(this);  // this value will take the value of parent
    }
  }
}
obj3.sayName();

//6.constructor function mein this ka value new blank object
function ab(){
  console.log(this);
}
var d = new ab();

//7.event listener mein this ka value that value jispar event listener  laga ho
document.querySelector("button")
.addEventListener("click",function(){
  console.log(this);  // this ki value button hoga 
})