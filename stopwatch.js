const d = new Date();

let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let second = 0;
let minute = 0;
let hour = 0;
let time = h + ':' + m + ":" + s;
console.log(time);
let inter;

function stopInterval() {
    clearInterval(inter);
}

function mytimer(){
  
    second = second + 1;
    document.querySelector('.seconds').textContent = second;
    if(second == 60){
        second = 0
        minute = minute + 1;
        document.querySelector('.minutes').textContent = minute + ":";
    
    }
    else if(minute == 60){
        minute = 0
        hour = hour + 1;
        document.querySelector('.hours').textContent = hour + ':';
    
    }
    
        
    }

 
document.querySelector('.start').addEventListener('click', function(){
inter = setInterval(mytimer, 1000);
mytimer();
})

document.querySelector('.reset').addEventListener('click', function(){
    second = 0;
    minute = 0;
    hour = 0;
document.querySelector('.seconds').textContent = second;
document.querySelector('.minutes').textContent = minute + ':';
document.querySelector('.hours').textContent = hour +':';
    stopInterval();

})