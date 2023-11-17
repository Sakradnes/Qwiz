const React = require('react');

module.exports = function Answer({ question, user }) {
  return (
    <div className="container">
      <div className="Answer">
        <p className="h2Auth">Введите Ваш ответ</p>

        <input
          className="inputAnswer"
          data-id={question.category_id}
          data-idi={question.id}
          data-udi={user.id}
          placeholder="ваш ответ сюда"
        />
        <button className="yourScore">{user.score}</button>

        <div className="Compare"></div>
        <div>Cложность вопроса:</div>
        <button className="Dif">{question.difficulty}</button>
      </div>
    </div>
  );
};
