setInterval(clock, 1000);



x = document.getElementById('hour');
y = document.getElementById("minute");
z = document.getElementById('second');

function clock(){

    
    time = new Date();

    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds() ;


    x.innerHTML = hour  ;
    y.innerHTML = minute  ;
    z.innerHTML = second;

    // generate bg color by time 

    l = [];
    l.push("#")
    l.push(hour)
    l.push(minute)
    l.push(second)

    bgcol = l.toString().split(',').join("");

    document.body.style.backgroundColor = bgcol
    


}



clock();