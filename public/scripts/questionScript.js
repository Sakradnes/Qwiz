const buttonNext = document.querySelector("#MainQuestion");
const where = document.querySelector(".free");

buttonNext.addEventListener("click", async (event) => {
  //event.preventDefault();

  if (event.target.classList.contains("next")) {
    const card = event.target.closest(".all");
    const res = await fetch(
      `/questions/${card.dataset.id}/${card.dataset.idi}`,
      {
        method: "GET",
      }
    );

    const questionData = await res.json();
    card.remove();

    if (questionData.html) {
      where.insertAdjacentHTML("beforebegin", questionData.html);
    } else {
      window.location.href = "/category";
      console.log("catch you");
    }
  }
});

// // Функция для загрузки вопроса с сервера
// async function loadQuestion(index) {
//     try {
//         const response = await fetch(`/api/questions/${index}`); // замените на ваш URL эндпоинта для получения вопросов
//         if (!response.ok) {
//             throw new Error('Ошибка загрузки вопроса');
//         }
//         const questionData = await response.json();
//         displayQuestion(questionData);
//     } catch (error) {
//         console.error('Произошла ошибка:', error);
//     }
// }

// // Функция для отображения вопроса в интерфейсе
// function displayQuestion(question) {
//     questionContainer.innerHTML = `
//         <h2>${question.title}</h2>
//         <p>${question.description}</p>
//         <!-- Другие элементы вопроса -->
//     `;
// }

// // Загрузка первого вопроса при загрузке страницы
// loadQuestion(currentQuestionIndex);

// // Обработчик события для кнопки "Следующий вопрос"
// nextQuestionBtn.addEventListener('click', () => {
//     currentQuestionIndex++; // Увеличиваем индекс для получения следующего вопроса
//     loadQuestion(currentQuestionIndex); // Загружаем следующий вопрос
// });
