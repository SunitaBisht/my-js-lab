setTimeout(() => {
  console.log("Hello afetr 4 second");
}, 4 * 1000);

//Function/Arrow function---------------------------

/* this.id = "exports";
const testerObj = {
  func1: function () {
    console.log("func1", this);
  },
  func2: () => {
    console.log("func1", this);
  },
};
testerObj.func1();
testerObj.func2(); */

//Destructuring /and rest/spread-------------------------

/* -----------
const PI=Math.PI;
const E=Math.E;
const SQRT2=Math.SQRT2; */ //--------------------------

/* const { PI, E, SQRT2 } = Math;
//with require
//const{readFile}=require('fs');
const circle = {
  label: "circleX",
  radius: 2,
};
const circleArea = ({ radius }) => (PI * radius * radius).toFixed(2);

console.log(circleArea(circle)); */

//------Promiss And Async Await.js----------------------------------------

/* const https=require('https');

function fetch(url){
    return new Promise((resolve,reject)=>{
    https.get(url,(res)=>{
        let data='';
        res.on('data',(rd)=>data=data+rd);
        res.on('end',()=>resolve(data));
        res.on('error',reject);
    });
});
}
fetch('https://www.javascript.com/').then(data=>{
    console.log(data.length);
});
(async function read(){
    const data=await fetch('https://www.javascript.com/');
    console.log(data.length);
})(); */
