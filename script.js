let inp = document.getElementById("tb-inp")
let inp2 = document.getElementById("tb-inp2")
let btn2 = document.getElementById("clear-btn")
let btn = document.getElementById("tb-btn")
let p = document.querySelector("p")
btn.addEventListener("click",function(){
    let num = Number(inp.value);

    p.innerHTML="";
    if(num > 0 ){
    for(let i = 1; i<= Number(inp2.value);i++){
p.innerHTML += `${num} &#215; ${i} = ${num *  i} <br>`
    }
    }

})

btn2.addEventListener("click",function(){
   location.reload();
})