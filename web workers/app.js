let sayHi=()=>{
    let head1=document.getElementById("head-1");
    head1.innerHTML+= `Hi. Hope you are fine?`//+oldinnerHTML
}

let a=0;

let compute=()=>{
   

    let workerObj= new Worker('webworker.js') ;//initializes new worker object
workerObj.postMessage("Start Worker");

workerObj.onmessage=(e)=>{
    let head2=document.getElementById("head-2");
    head2.innerHTML=e.data;
}

   
 
}
