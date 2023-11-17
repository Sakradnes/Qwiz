const buttonNext = document.querySelector("#MainQuestion");
const where = document.querySelector(".free");

buttonNext.addEventListener("click", async (event) => {


  if (event.target.classList.contains("next")) {
    const card = event.target.closest(".all");
    const oldAnswer = document.querySelector(".Answer");
    const res = await fetch(
      `/questions/${card.dataset.id}/${card.dataset.idi}`,
      {
        method: "GET",
      }
    );

    const questionData = await res.json();
    card.remove();
    oldAnswer.remove();

    if (questionData.html1&&questionData.html2) {
      where.insertAdjacentHTML("beforebegin", questionData.html1);
      where.insertAdjacentHTML("afterend", questionData.html2);
    } else {
      window.location.href = "/category";
      console.log("catch you");
    }
  }
});
