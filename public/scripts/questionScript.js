console.log(123);
const buttonNext = document.querySelector(".next");
const where = document.querySelector(".free");
console.log(buttonNext);
if (buttonNext) {
  buttonNext.addEventListener("click", async (event) => {
    event.preventDefault();
    const card = event.target.closest(".all");

    console.log(buttonNext.dataset.id, buttonNext.dataset.idi);
    
    const res = await fetch(
      `/questions/${buttonNext.dataset.id}/${buttonNext.dataset.idi}`,
      {
        method: "GET",
      }
    );

    const questionData = await res.json();
    card.remove()
    
    // if(questionData.html) {
    //     console.log('---------');
    where.insertAdjacentHTML("beforebegin", questionData.html);
    // }
    
    
  });
}

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
