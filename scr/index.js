let num=0;
let num2=0;

let symbol="";






console.log("javascript");
console.log(num);

document.getElementById("display").value=num;



document.getElementById('btn-0').addEventListener('click',function(){  editnum(0) });
document.getElementById('btn-1').addEventListener('click',function(){  editnum(1) });
document.getElementById('btn-2').addEventListener('click',function(){  editnum(2) });
document.getElementById('btn-3').addEventListener('click',function(){  editnum(3) });
document.getElementById('btn-4').addEventListener('click',function(){  editnum(4) });
document.getElementById('btn-5').addEventListener('click',function(){  editnum(5) });
document.getElementById('btn-6').addEventListener('click',function(){  editnum(6) });
document.getElementById('btn-7').addEventListener('click',function(){  editnum(7) });
document.getElementById('btn-8').addEventListener('click',function(){  editnum(8) });
document.getElementById('btn-9').addEventListener('click',function(){  editnum(9) });

document.getElementById('btn-.').addEventListener('click',function(){ 
 }); // get back to it

document.getElementById('btn-C').addEventListener('click',function(){  clear() });
document.getElementById('btn-AC').addEventListener('click',function(){  allClear() })

document.getElementById('btn-+').addEventListener('click',function(){ symbol="+";
num2=num;
num=0;
console.log("+") });
document.getElementById('btn-X').addEventListener('click',function(){ symbol="*"; 
num2=num;
num=0;
console.log("*")  });
document.getElementById('btn--').addEventListener('click',function(){ symbol="-"; 
num2=num;
num=0;
console.log("-")  });
document.getElementById('btn-/').addEventListener('click',function(){ symbol="/";
num2=num;
num=0;
console.log("/")  });
document.getElementById('btn-%').addEventListener('click',function(){ symbol="%";
num2=num;
num=0;
console.log("%")  });


document.getElementById('btn-=').addEventListener('click',function(){ 
    let s=num2+symbol+num;
    console.log(s)
    console.log(typeof s)
    num=eval(s);
    document.getElementById("display").value=num;
    document.getElementById("display2").value=s;

});






function editnum(number){
    console.log('clicked '+number);
    num=num*10+number;
    document.getElementById("display").value=num;
    console.log(num)
}

function clear(){
    console.log('clicked C')
    num=num/10;
    num=Math.trunc(num);
    document.getElementById("display").value=num;
}

function allClear(){
    console.log('clicked AC')
    num=0;
    num2=0;
    symbol="";
    document.getElementById("display").value=num;
    document.getElementById("display2").value="";
}


