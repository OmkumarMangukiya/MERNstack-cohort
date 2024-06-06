let s = 31;

function sum(x){
    s = x - 1;
    console.clear();
    console.log(s);
    if(s === 0){
        console.clear();
        console.log("BOOM!");
        clearInterval(interval);
    }
}

let interval = setInterval(() => sum(s),1000);