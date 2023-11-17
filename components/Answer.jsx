const React = require('react');

module.exports = function Answer({ question, user }) {
  return (
    <div className="container">
      <div className="Answer">
        <p className="h2Auth">Введите Ваш ответ</p>

        <input
          className="inputAnswer input"
          data-id={question.category_id}
          data-idi={question.id}
          data-udi={user.id}
          placeholder="ваш ответ сюда"
        /><p className='dop'>scores:</p>
        <button className="yourScore">{user.score}</button>

        <div className="Compare"></div>
        <div className='dop'>Cложность вопроса:</div>
        <button className="Dif">{question.difficulty}</button>
      </div>
    </div>
  );
};
