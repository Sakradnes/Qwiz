const answerInput = document.querySelector(".inputAnswer");
const areaAnswer = document.querySelector("#MainQuestion");



areaAnswer.addEventListener("keydown", async (event) => {
  //event.preventDefault();
  if (event.target.classList.contains("inputAnswer")&&(event.key=="Enter")) {
    const card = event.target.closest(".inputAnswer");

    const res = await fetch(
      `/questions/${card.dataset.id}/${card.dataset.idi}/answer`,
      {
        method: "GET",
      }
    );

    const questionData = await res.json();
    if((questionData.questions.answer.trim()).toLowerCase()==(answerInput.value.trim()).toLowerCase()){
        document.querySelector('.Compare').innerHTML='you are right'
    }else{
        document.querySelector('.Compare').innerHTML='you are wrong, the right answer is: '+questionData.questions.answer
        const res = await fetch(`/questions/${card.dataset.idi}/answer/difficulty`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                difficulty:questionData.questions.difficulty+1
              }),
         })
         const data = await res.json()
         if(data.message === 'ok'){
            document.querySelector('.Dif').innerHTML="difficulty+1"
         }else{
            document.querySelector('.Dif').innerHTML="can't update"
         }
    }
  }
});