let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg")
let msg=document.querySelector("#m")
console.log(boxes)
let turnO=true;
let c=0
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
        msgcontainer.classList.add("hide");
    }
};
const resetgame=()=>{
    turnO=true;
    enablebox()
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked",box);
        c=c+1
        console.log(c)
        if(turnO){
            box.innerText="O";
            box.style.color='blue'
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color='red'
            turnO=true;
        }
        box.disabled=true
        checkw();
    });
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

 const showwinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");

 }

 const gametie=()=>{
    msg.innerText='Game Tied. Play New Game'
    msgcontainer.classList.remove("hide");
 }
const checkw = () =>{
    for(let pattern of win){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="" ){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val)
                disablebox()
                showwinner(pos1val)
                c=0
            }
        }
    }
    if(c==9){
        gametie();
        c=0
    }
}
newgame.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)