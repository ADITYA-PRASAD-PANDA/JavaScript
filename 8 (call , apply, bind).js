// call , apply , bind ye tin taraeeka hai  function ko call karne ke kisi object ko this banakar
const obj = {name:"aditya"}
function  abc()
{
  console.log(this);
}
abc.call(obj)  // this ki value aditya hoga

function  abc(a,b,c)
{
  console.log(this);
}
abc.call(obj,1,2,3)


//apply
function  abc(a,b,c)
{
  console.log(this);
}
abc.apply(obj,[1,2,4]) 