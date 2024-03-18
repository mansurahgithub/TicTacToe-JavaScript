let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".newbtn");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");
//2 players - X & O
let turnO = true;
const winning_patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,4,5],
    [3,4,5],
    [6,7,8]
];

const resetgame = () =>{
    turnO = true;
    enableBoxes();
    message.classList.add("hide");
};

//add eventlisteners - DISPLAY X OR O ON CLICK
let count = 0;
const draw_game=()=>{
    msg.innerHTML = `Game is a draw !`;
    message.classList.remove("hide");
    disableBoxes();
};
boxes.forEach((box)=>{
box.addEventListener("click", ()=>{
    console.log("Box was clicked!");
   
    if(turnO){
        box.innerText = "O";
       // box.classList.add("o-marker");
       box.style.color = "#005f73";
        turnO = false;

    }
    else{
        box.innerText = "X";
        box.style.color = "crimson";
        turnO = true;
        //box.classList.add("x-marker");
    }
    box.disabled=true;
    count++;
    let winner = check_winner();
    if(count == 9 && !winner){
        draw_game();
    }
});
});

//disable boxes if winner is obtained
const disableBoxes = () =>{
for(let box of boxes){
box.disabled=true;
}
};
const enableBoxes = () =>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText = "";
    }
    };
const showWinner= (winner)=>{
msg.innerText = `Congratulations! Player ${winner} wins the game !`;
message.classList.remove("hide");
disableBoxes();
}

const check_winner = ()=>{
    for(let pattern of winning_patterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText, boxes[pattern[2]].innerText );

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner!", pos1val);
                
                showWinner(pos1val);
                return true;
            }
         
        }

    }
}

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);