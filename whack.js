    var moles = [];


var moleClass = (function () {
    // private static
    var nextId = 0;

    // constructor
    var mole = function () {
        // private
        var id = nextId++;

        // public (this instance only)
        this.get_id = function () { return id; };
    };

    // public static
    mole.get_nextId = function () {
        return nextId;
    };

    // public (shared across instances)
    mole.prototype = {
        on:false,
        up: function(){
            var randTime = Math.floor(Math.random() * 10000);
            var moleID = this.get_id();
            var docID = document.getElementById(this.get_id());
            docID.style.visibility="visible";
            docID.onclick=hit;
            this.on=true;
            var tick= setTimeout(function(){
                docID.style.visibility="hidden";
                moles[moleID].on=false;
            },randTime);//
        },
        /*down:function(){
            var docID = document.getElementById(this.get_id());
            var moleID = this.get_id();
            docID.style.visibility="hidden";
            moles[moleID].on=false;
        },*/
    };

    return mole;
})();

function createMoles(){
    for (i=0;i<=48;i++){
        moles.push(new moleClass());
    }
}

createMoles();

function riseNShine(){
    for (i=0;i<=48;i++){
        var riseMoles = setInterval(moles[i].up(),1000);
    }
    clearInterval(riseMoles);
}
setTimeout(function(){
    riseNShine();
    document.getElementById("moleAlert").innerHTML="Recursion overload: TOO MANY MOLES";
    flashText();},67000);
setTimeout(function(){
    riseNShine();
    document.getElementById("moleAlert").innerHTML="Recursion overload: TOO MANY MOLES";
    flashText();},63500);


setTimeout(function(){
    riseNShine();
    document.getElementById("moleAlert").innerHTML="Recursion overload: TOO MANY MOLES";
    flashText();},1000);
setTimeout(function(){
    riseNShine();
    document.getElementById("moleAlert").innerHTML="DESTROY THEM BEFORE THEY ...";
    flashText();},4000);
setTimeout(function(){
    riseNShine();
    document.getElementById("moleAlert").innerHTML="Recursion overload: TOO MANY MOLES";
    flashText();},7600);
setTimeout(riseNShine,71500);
setTimeout(riseNShine,81800);
setTimeout(riseNShine,93300);
setTimeout(riseNShine,101000);
setTimeout(riseNShine,105000);
setTimeout(riseNShine,109000);
setTimeout(riseNShine,115000);


var hitCount = 0;

function hit(){
    this.style.visibility="hidden";
    moles[this.id].on=false;
    hitCount += 1;
    document.getElementById("score").innerHTML = "Your score is: " + hitCount;}



function randMoleUp() {
    var randMole = Math.floor((Math.random() * 1000)%49);
    if (moles[randMole].on ==false) {
        moles[randMole].up();
    } else if (moles[randMole].on ==true){
        randMoleUp();

    }
}

function molesUp() {
    var numOfMoles = Math.floor(Math.random() * (15 - 8) + 8);
    flashText();
    document.getElementById("moleAlert").innerHTML=numOfMoles+ " moles are on their way!!!";
    var wait = setTimeout(function(){
        for (numOfMoles; numOfMoles > 0; numOfMoles--) {
            randMoleUp();
    }},3000)
}

var moleInterval = setInterval(molesUp, 10000);

function stop() {
    clearInterval(moleInterval);
    for (i=0;i<=48;i++){
        document.getElementsByTagName("img")[i].style.visibility="hidden"
        moles[i].on =false;
    }
}



//time
var count=125;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
    count=count-1;
    if (count <= 0)
    {
        clearInterval(counter);
        document.getElementById("timer").innerHTML="Time is up!";
        stop();
        //counter ended, do something here
        return;
    }
    randMoleUp();
    document.getElementById("timer").innerHTML=count + " seconds until mole containment"; // watch for spelling
    //Do code for showing the number of seconds here
}





function flashText() {
    var dID = document.getElementById('moleAlert');
    var t = setInterval(function () {
        dID.style.visibility = (dID.style.visibility == 'hidden' ? '' : 'hidden');
    }, 150);
    setTimeout(function(){
        clearInterval(t);
        dID.style.visibility ='hidden';

    },3000);
}

var audio = new Audio('duel.mp3');
audio.play();

