const user = document.querySelector("#user")
const show = document.getElementById("show")
const again = document.querySelector(".again")
const game=(user, cpu)=>{
//1 win// -1 lose//0 draw
//draw condition
if (user == cpu) {
    return 0
}
//sanke and gun
if (user == 'snake' && cpu == 'gun') {
    return -1;
}
else if (user == 'gun' && cpu == 'snake') {
    return 1;
}
// water and snake
if (user == 'snake' && cpu == 'water') {
    return 1;
}
else if (user == 'water' && cpu == 'snake') {
    return -1;
}
// gun and water
if (user == 'gun' && cpu == 'water') {
    return -1;
}
else if (user == 'water' && cpu == 'gun') {
    return 1;
}}

const cpuchance=()=>
{
    let number=Math.floor(Math.random()*100)+1;
    let cpu;
    if(number<33)
    {
        cpu='snake';
    }
    else if(number>33&&number<66)
    {
        cpu='water';
    }
    else{
        cpu='gun'
    }
    return cpu
}

user.addEventListener("click",(value)=>{
    let user = value.target.id;
    let cpu = cpuchance();
    let result = game(user, cpu);
    if(result===0){
        show.innerHTML  = "<h2>Match Draw Try Again</h2>";
       
    }
    else if(result === -1){
        
        show.innerHTML = "<h2>You loose</h2>";
        
    }
    else{
        show.innerHTML = "<h2>You win</h2>" ;
       
    }
    console.log(result)
})
again.addEventListener("click",()=>{
    show.innerHTML = null;
})