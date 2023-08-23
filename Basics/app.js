// Basics of Js
// variables
// let a=15;
// var b=45;
// let a=46;
// var b=48;

// const pi=3.142+9;
// pi=24;
 let fname="Harry", lname="Brooks", age="18",a="5";
//  let fullName= fname + " "+ lname
 console.log(typeof(age))
 console.log(fname);
//   document.write("Welcome to Our Website "+ fname +" "+lname +(age + a))

//  alert("hi" +fname);
//  let name= prompt("What is your Name?");
//  confirm("are you sure "+name+" ?")


//  
// var abc="10",def=10;
// alert(+abc+def)

function changeImg(){
    let image=document.getElementById("img");
    console.log(img.src);
    if(  image.src =="http://127.0.0.1:5500/Basics/1.jpg"){

        image.src="http://127.0.0.1:5500/Basics/2.jpg";
        image.style.border="4px solid red";
        console.log("bye")
    }
    else{
        image.src="http://127.0.0.1:5500/Basics/1.jpg";
        console.log("hi")
        image.style.border="none";
    }
   
}

function reverseImg(){
    let image=document.getElementById("img");
    image.src="./1.jpg";
     image.style.border="none"
}

// function add(){
   
//     let a=parseInt(prompt("ENTER NUMBER"))
//     let b=+prompt("ENTER NUMBER")
//     alert(a+b);
// }

//ARRAYS

let sports=[
    "Cricket",
    "Polo",
    "Hockey",
    "Swimming",
    "Football",
    "Racing",
    "Karate"
]
console.log(sports.length)
// document.write(sports[0] + "<br>")
// document.write(sports[1] + "<br>")
// document.write(sports[2] + "<br>")

// for loop
// for(let i=0; i< sports.length ; i++){
//     document.write(sports[i] + "<br>");
// }

//while loop
// let i=0;
// while(i< sports.length){
//     document.write(sports[i] + "<br>");
//     i++;
// }




// works on last index
sports.push("Wrestling","Boxing")
sports.push("judo")
sports.pop();
sports.pop();
sports.pop();

// works on first index
sports.unshift("Wrestling","Boxing")
sports.shift();
sports.shift();

// splice


sports.forEach(element => {
    document.write(element+ "<br>");
});