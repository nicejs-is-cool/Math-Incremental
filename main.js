var maths = 0;
var addMaths = 1;
var math2 = 0;
var addMath2 = 1;
var minusMaths = 9;
var addMath3 = 9;

function increaseMath() {
    maths += addMaths;
    document.getElementById("math").innerHTML = `${maths}+${math2}=0`;
    if (maths > 9){
        maths -= addMaths
        document.getElementById("math").innerHTML = `${maths}+${math2}=0`;
    }
}

function Tab2(){
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "inline-block";
}

function Tab1(){
    document.getElementById("btn1").style.display = "inline-block";
    document.getElementById("btn2").style.display = "inline-block";
    document.getElementById("btn3").style.display = "none";
}

function convertMath1(){
    if (maths > 8.99){
        maths -= minusMaths;
        math2 += addMath2;
        document.getElementById("math").innerHTML = `${maths}+${math2}=0`;
    }
    if (math2 > 10){
        maths += addMath3;
        math2 -= addMath2;
        document.getElementById("math").innerHTML = `${maths}+${math2}=0`;
    }
}

function saveGame(){
    localStorage.setItem('maths', JSON.stringify(maths));
    localStorage.setItem('math2', JSON.stringify(math2));
}

function loadGame(){
    maths = JSON.parse(localStorage.getItem('maths'))
    math2 = JSON.parse(localStorage.getItem('math2'))
    console.log(localStorage.getItem('maths'))
    console.log(localStorage.getItem('math2'))
    document.getElementById("math").innerHTML = localStorage.getItem(`maths` + `math2`);
}

