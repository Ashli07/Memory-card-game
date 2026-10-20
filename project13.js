
let cards=['🍀','🍀','🐼','🐼','⭐','⭐','🖼️','🖼️','🍕','🍕','🎸','🎸','🌈','🌈','🏆','🏆'];
let flipped =[];
let matched=0;
let moves= 0;
let canFlip=true;
function startGame(){
    cards.sort(()=>Math.random()-0.5);

    flipped=[];
    matched=0;
    moves=0;
    canFlip=true;
    document.getElementById('moves').textContent=0;
     document.getElementById('message').textContent="Find the matching pairs!";
     let board=document.getElementById('board');
     board.innerHTML="";
     cards.forEach(function(emoji,index){
        let card=document.createElement('div');
        card.classList.add('card');
        card.textContent='?';
        card.dataset.emoji=emoji;
        card.dataset.index=index;
        card.onclick=function(){flipCard(card);};
        board.appendChild(card);
     });

}

function flipCard(card){
   if(!canFlip)return;
   if(card.classList.contains('flipped'))
      return;
   if(flipped.length===2)return;

   card.classList.add('flipped');
   card.textContent=card.dataset.emoji;
   flipped.push(card);

   if(flipped.length===2){
      moves++;
      document.getElementById('moves').textContent=moves;
      checkMatch();
   }
}

function checkMatch(){
   if(flipped[0].dataset.emoji===flipped[1].dataset.emoji){
      matched++;
      flipped =[];
      if(matched===8){
         document.getElementById('message').textContent="You Win!🎉";
      }
   } else {
      canFlip=false;
      setTimeout(function(){
         flipped [0].classList.remove('flipped');
          flipped [0].textContent='?';
           flipped [1].classList.remove('flipped');
            flipped [1].textContent='?';
            flipped = [];
            canFlip=true;
      
      },1000);
   }
}
startGame();