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
        />
        <div className="yourScore">{user.score}</div>

        <div className="Compare"></div>
        <div className='Dif'>{question.difficulty}</div>
      </div>
    </div>
  );
};
