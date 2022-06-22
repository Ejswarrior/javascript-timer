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
let interDown;



function stopInterval() {
    clearInterval(inter);
    clearInterval(interDown);
}

function timerDown(){
    document.querySelector('.seconds').textContent = second;
    document.querySelector('.minutes').textContent = minute + ':';
    document.querySelector('.hours').textContent = hour +':';
    console.log(second);
    second = second - 1 ;
   

    if(second == 0){
        second = 60
        minute = minute - 1;
        document.querySelector('.minutes').textContent = minute + ":";
    
    }
    else if(minute == 0 && second == 0){
        minute = 60
        hour = hour - 1;
        document.querySelector('.hours').textContent = hour + ':';
    
    }
    if(minute<10){
        document.querySelector('.minutes').textContent = '0' + minute + ":";
    }
    if(hour<10){
        document.querySelector('.hours').textContent = '0' + hour + ":";
    }
    
}

function mytimer(){
    document.querySelector('.seconds').textContent = second;
    second = second + 1;
    
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

document.querySelector('.down').addEventListener('click', function(){
    if(minute<10){
        document.querySelector('.minutes').textContent = '0' + minute + ":";
    }
    if(hour<10){
        document.querySelector('.hours').textContent = '0' + hour + ":";
    }
    second = document.querySelector('.countDownSeconds').value;
minute = document.querySelector('.countDownMinutes').value;
hour = document.querySelector('.countDownHours').value;

    document.querySelector('.hours').textContent = hour + ':';
    document.querySelector('.minutes').textContent = minute + ':';
    document.querySelector('.seconds').textContent = second;
    if(minute<10){
        document.querySelector('.minutes').textContent = '0' + minute + ":";
    }
    if(hour<10){
        document.querySelector('.hours').textContent = '0' + hour + ":";
    }

  
})

document.querySelector('.countDown').addEventListener('click', function(){
    interDown = setInterval(timerDown, 1000);
    timerDown();
})