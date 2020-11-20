//randum number
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}

var obj=document.getElementById("bouncingBox");
var directX=1; //X axis
var directY=1; //Y axis
var sunX=randomNum(0,(window.innerWidth-obj.offsetWidth)/2); //Set initial X coordinate
var sunY=randomNum(0,(window.innerHeight-obj.offsetHeight)/2); //Set initial Y coordinate
var delay = 10;
var velocity = 0.7; //moving speed

function sunMov(){
    //set up two directions
    sunX+=directX*velocity;
    sunY+=directY*velocity;
    //change left top of div
    obj.style.top=sunY+"px";
    obj.style.left=sunX+"px";
    //decide when to turn to another direction
    //offestWidth returns the actual width of this object
    if(sunX+obj.offsetWidth>=window.innerWidth || sunX<=0){
      directX=-directX;
    }
    if(sunY+obj.offsetHeight>=window.innerHeight || sunY<=0){
      directY=-directY;
    }
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

var device = isPC();
var count = 0;
console.log(device);

var move = setInterval("sunMov()",delay);
if (device){
    obj.onmouseover=function(){clearInterval(move)};
    obj.onmouseout=function(){move=setInterval("sunMov()", delay)};
}
else{
    obj.onclick = function(){   
        count = count + 1;
        if (count % 2 == 1){clearInterval(move);}
        else{move=setInterval("sunMov()", delay);}
    }
};