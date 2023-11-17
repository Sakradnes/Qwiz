const answerInput = document.querySelector(".inputAnswer");
const areaAnswer = document.querySelector("#MainQuestion");



areaAnswer.addEventListener("keydown", async (event) => {
  if (event.target.classList.contains("inputAnswer")&&(event.key=="Enter")) {
    const card = document.querySelector('.all');
            const res = await fetch(`/questions/${card.dataset.idi}/answer`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                yourAnswer:document.querySelector(".inputAnswer").value.trim().toLowerCase(),
                idQuestion:card.dataset.idi,
                userID:card.dataset.udi,
                userScore:document.querySelector('.yourScore').innerHTML,
                currentDif:document.querySelector('.Dif').innerHTML,
              }),
         })
         const questionData = await res.json();
         console.log(questionData);
         document.querySelector('.Compare').innerHTML=questionData.message;
         if(questionData.difficulty){
          document.querySelector('.Dif').innerHTML=questionData.difficulty;}
         else{
          document.querySelector('.yourScore').innerHTML=questionData.score;
         }
  }
});