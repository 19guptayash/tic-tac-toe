
const boxes = document.querySelectorAll(".box");
const dialog = document.querySelector(".dialog");
const para = document.querySelector(".dialog p");
const button  = document.querySelector(".dialog button");

const grid =["","","","","","","","",""];
let currentPlayer = "O";
let gridCount = 0;

const winningCombination = [[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,3,6,],[0,4,8],[2,4,6]];



const swapCurrentPlayer = ()=>{
    if(currentPlayer==="O")currentPlayer="X";
    else currentPlayer = "O";
}

const handleClick = (ind)=>{
    if(grid[ind]===""){
        grid[ind] = currentPlayer;
        boxes[ind].innerHTML = currentPlayer; 
        gridCount++;
        swapCurrentPlayer();
        isWin();        
    }
}

function isWin(){
    winningCombination.forEach((pattern)=>{
        if(grid[pattern[0]]!="" && grid[pattern[1]]!='' && grid[pattern[2]]!=''
            && grid[pattern[0]] === grid[pattern[1]] && grid[pattern[1]]=== grid[pattern[2]]
        )
        {
            
            console.log("YOU WIN");
            boxes[pattern[0]].classList.add("win");
            boxes[pattern[1]].classList.add("win");
            boxes[pattern[2]].classList.add("win");          
            para.innerHTML = "Congractulation's You Won!"
            dialog.classList.add("visible");
            return ;
        }        
    });

    isDraw();
}

function isDraw(){
    if(gridCount===9){
       
        console.log("YOU LOOSE");
        para.innerHTML = "GAME DRAW";
        dialog.classList.add("visible");
    }
}
for(let i = 0;i<boxes.length ;i++){
    boxes[i].addEventListener("click",()=>{handleClick(i)});
}

button.addEventListener('click',()=>{
    button.classList.remove("visible");
    window.location.reload();
})

