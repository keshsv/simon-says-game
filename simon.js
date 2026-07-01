// this peace of code for access the html elemnts 
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");
let started = false;// btata hai game shuru h yaa nii//
let gameSeq=[];// tell the sequence of game//
let userSeq=[];// record the current sequence of user pressesd buttons or colors//
let Level = 0;
let btns = ["yellow","red","purple","green"];


// this is for to start the game //
document.addEventListener("keypress",()=>{
  if(started == false){
    console.log("key is presses");
    started = true;
    levelUp();
  }
});



// this function is for uping the level

 function levelUp(){
 h2.innerText = `Level ${Level + 1}`;
 
 let randIdx = Math.floor(Math.random()*btns.length); // yeh ek random number dega 0 to 3
 let randColor = btns[randIdx];// yha se random color niklega 
 let randBtn = document.querySelector(`.${randColor}`);
 gameSeq.push(randColor);
 console.log(gameSeq);
 ranBtnFlash(randBtn);// for flashing the random button 
}

// for flashing the user pressed button 
function userBtnFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(()=>{
    btn.classList.remove("userFlash");
  },250)
};
// for flashing the random button 
function ranBtnFlash(btn){
  btn.classList.add("flash");
  setTimeout(()=>{
    btn.classList.remove("flash");
  },250)
};


//  this code for add event listener to all buttons //
for(btn of allBtns){
btn.addEventListener("click",BtnPress);
};

// after button press 
function BtnPress(){
  let btn = this;
  userBtnFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  checkAns();
}

function checkAns(){
  console.log(Level);
  let idx = Level-1;
  if(userSeq[idx]===gameSeq[idx]){
    
  }
}