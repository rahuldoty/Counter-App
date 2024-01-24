const counterLabel = document.getElementById('counterLabel')
const increase = document.getElementById('increase')
const reset = document.getElementById('reset')
const decrease = document.getElementById('decrease')

let count = 0;

increase.onclick = () =>{
    count++;
    counterLabel.textContent=count;
}

decrease.onclick = () =>{
    count--;
    counterLabel.textContent=count;
}

reset.onclick = () =>{
    count=0;
    counterLabel.textContent=count;
}