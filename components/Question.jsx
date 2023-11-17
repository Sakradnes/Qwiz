const React = require('react');

function Question({ question, user }) {
  return (
    <div
      className="all"
      data-id={question.category_id}
      data-idi={question.id}
      data-udi={user.id}
    >
      ВОПРОС:{question.category_id == '3' && <img src={question.content}></img>}
      {question.category_id != '3' && <div>{question.content}</div>}
      <button className="next buttonAuth"> СЛЕДУЮЩИЙ ВОПРОС</button>
    </div>
  );

}

module.exports = Question;
