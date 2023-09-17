const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const winningScoreSelect = document.querySelector('#playTo'); 
let p1score = 0;
let p2score = 0;
let winningscore=5;
let isGameover = false;

p1button.addEventListener('click', function(){
    if(!isGameover)
    {
        p1score+=1;
        if(p1score===winningscore)
        {
            isGameover=true;
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1button.disabled=true;
            p2button.disabled=true;
        }
        p1Display.textContent=p1score;
        
    }
})
p2button.addEventListener('click', function(){
    if(!isGameover)
    {
        p2score+=1;
        if(p2score===winningscore)
        {
            isGameover=true;
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1button.disabled=true;
            p2button.disabled=true;            
        }
        p2Display.textContent=p2score;
    }
})
winningScoreSelect.addEventListener('change', function()
{
winningscore=parseInt(this.value);
reset();
})


resetButton.addEventListener('click',reset)
function reset(){
    isGameover=false;
    p1score =0;
    p2score =0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1button.disabled=false;
    p2button.disabled=false;
}


