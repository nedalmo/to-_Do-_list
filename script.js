let input = document.getElementById("inp");
let but = document.getElementById("save");
let results  =document.querySelector(".results");

if(localStorage.length){
    for(let [ind,key] of Object.entries(localStorage)){
           let span = document.createElement("span");
span.append(ind);
let butone = document.createElement("button");
butone.classList.add("act")
let tex = document.createTextNode("remove");
let div = document.createElement("div");
butone.appendChild(tex);
div.appendChild(span);
div.appendChild(butone);

results.append(div);

butone.onclick = function(e){
let r =butone.previousElementSibling;
localStorage.removeItem(`${r.textContent}`);
div.remove()

}
}

}

else{
    console.log("Error")
}


function sel(){
    
but.onclick =  function(){

    if(input.value!==""){
        localStorage.setItem(`${input.value}`,`${input.value}`)
let span = document.createElement("span");
span.append(localStorage.getItem(`${input.value}`));
let butone = document.createElement("button");
let tex = document.createTextNode("remove");
let div = document.createElement("div");
butone.appendChild(tex);
butone.classList.add("act")
div.appendChild(span);
div.appendChild(butone);
results.append(div);
input.value = ""
butone.onclick = function(e){
let r =butone.previousElementSibling;
localStorage.removeItem(`${r.textContent}`);
div.remove()

}

}
else{
console.log("problem ")
}

}

}

sel()

document.onload = sel

