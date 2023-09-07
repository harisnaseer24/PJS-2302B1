//sync and async



//setTimeout
//setInterval
//Promises
//callbacks
//async/await
//fetch

// console.log("hi0")
// console.log("hi1")
// setTimeout(()=>{
//     console.log("hi2")
// },0.0001)
// // setInterval(()=>{
// //         console.log("hi2")
// //     },1000)
    
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")
// console.log("hi3")
// console.log("hi0")
// console.log("hi1")


//Promises

// let number=Math.round(Math.random()*10)
// console.log(number)


// let prom= new Promise((resolve,reject)=>{
// if (number<10) {
//     return resolve("wada poora ho gaya");
// }
// else{
//     return reject("wada toot gaya");
// }
// }).then((answer)=>{
//     console.log(answer)
// }).catch((answer)=>{
//     console.log(answer)
// })


let khilyaYAnahi=prompt("khilaya ya nahi? press y for yes");
let burger=new Promise((res,rej)=>{
if(khilyaYAnahi=="y"){
    return res("Thanks for the treat");
}
else{
    return rej("Acha Nahi kia");
}}).then((ans)=>{
    console.log(ans)
}).catch(function(ans){
    console.log(ans)
})