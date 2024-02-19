// var and const

//variables and constants dono hi containers hain; farak dono mein ye hai ki var mein jo value assign hain wo baad mein change ho sakti hain

// jo bhi datatypes create karte hain wo sab chrome ke storage mein store hota hai ( AND  wo storage RAM hai )

//eg:- 
var price=299
price=199
console.log(price) //output will be 199 i.e. it's value can be changed

// const price=399
// console.log(price) it will through an error as price variable has already been used

const discount=10
console.log(discount)
// discount=15 it will raise an error as const values cannot be changed further


//--------------------------------------------------------------------
//Compilers and Interpreters  translators hai  jo ki english  code ko convert kar rahe hain machine code mein

//Interpreter atfirst bytecode mein convert karega jo ki bahut first execute hoga fir machinecode mein convert karega jo ki slow process hoga running karne wakt

//Compilers machine code mein convert karega jo ki thoda slow hoga, lekin process running ke time fast hojaega

//javascript ek interpreted language hai

// Google ne ek achi chiz banai haii.e. jit compiler-(just in time compiler) ye interpreter ki shuruati takat use karte hai and compiler ki running takat;  ye google chrome mein use hota hai
//--------------------------------------------------------------------

//Window:
//javascript mein alert, prompt,console, document.querySelector etc iss tarah ke functions nahi hota hain. Ye sab chrome ka part hai. Window is a toolkit for javascript to use the Browser's functionalities
