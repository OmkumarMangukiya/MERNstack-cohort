
// // function findSum(n){
// //     let ans = 0 ;
// //     for(let i = 0 ; i <= n ; i++){
// //         ans += i ;
// //     }
// //      return ans;
// // }
// // function sumtill100(){
// //      console.log(findSum(100));
// // }
// // setTimeout(() => findSum(100), 1000);
// // console.log("Done");


// const fs = require('fs');
// function readfile(cb){
//     fs.readFile("C:/Users/omman/WebstormProjects/p1/story_gen/in.txt", "utf8", function (err, data) {
        
//         cb(data);
//     });
    
// }
// function print(data){
//     console.log(data);
    
// }
// readfile(print);





// // promise

// function readfile2(){
//     return new Promise(function(resolve){
//         fs.readFile("C:/Users/omman/WebstormProjects/p1/stordaswqewqesadwqey_gen/in.txt", "utf8", function (err, data) {
//             resolve(data);
//         });
//     })
// }
// function printing(data){
//     console.log(data);
// }

// readfile2().then(printing);


// function readfile3(){
//     return new Promise(function(fun){
//         setTimeout(()=>fun(),2000);
//     });
// }

// function printn(){
//     console.log("Hello");
// }

// readfile3().then(printn);

// let p  = new Promise(function(onDone){
//     setTimeout(()=>onDone(),5000);
//     console.log("Hello");
// });

// function callback(){
//     console.log(p);
// }
// console.log(p);
// p.then(callback)

// function asyncFunction(){
//     let p = new Promise(function(resolve){
//         setTimeout(()=> resolve(),3000);
//     });
//     return p;
// }
// // await can only be used inside aysnc function and that why we created a function
// async function main(){
//     let value = await asyncFunction();
//     console.log("done");
// }
// main();

// console.log("after main");

function sum(){
    
    let sums =0;
    for(let i = 0; i<1000000000;i++){
        sums++;
    }
    // setTimeout(()=>console.log("ok"),3000)
    // console.log(sums);
    return sums;
}

// console.log(sum());
function asyncfunction(){
    let p = new Promise(function(resolve){
        setTimeout(()=>resolve(),1000);
        // console.log(sum());
    });
    return p;
}
async function prin(){
    await asyncfunction();
    console.log(sum());
} 
prin();
console.log("Printing");
// let startTime = new Date();
// console.log(sum());
// let endTime = new Date();
// console.log((endTime-startTime)/1000);