let num=0;
let num2=0;

let symbol="";






console.log("javascript");
console.log(num);

document.getElementById("display").value=num;

for(let i=0;i<=9;i++){
    document.getElementById('btn-'+i).addEventListener('click',function(){
        editnum(i);
    })
}


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


