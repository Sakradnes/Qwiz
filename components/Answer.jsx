const React = require('react');

module.exports=function Answer ({question}){
    return(
        <div className='container'>
          <p>ВВЕДИТЕ ВАШ ОТВЕТ</p>
            <input  className='inputAnswer'  data-id={question.category_id} data-idi={question.id} placeholder='ваш ответ сюда'/>
            <div className='Compare'></div>
            <div className='Dif'></div>
        </div>
    )}