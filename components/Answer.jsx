const React = require('react');

module.exports=function Answer ({question, user}){
    return(
        <div className='Answer'>
          <p>ВВЕДИТЕ ВАШ ОТВЕТ</p>
            <input  className='inputAnswer'  data-id={question.category_id} data-idi={question.id} data-udi={user.id} placeholder='ваш ответ сюда'/>
            <button className='yourScore'>{user.score}</button>
            <div className='Compare'></div>
            <div>Cложность вопроса:</div>
            <button className='Dif'>{question.difficulty}</button>
        </div>
    )}